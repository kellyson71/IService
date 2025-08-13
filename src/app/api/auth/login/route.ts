import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { createSupabaseMiddlewareClient } from '../../../../../utils/supabase/middleware'

type Body = { email: string; password: string }

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Body>
    if (!body.email || !body.password) {
      return NextResponse.json({ ok: false, error: 'Campos obrigatórios faltando' }, { status: 400 })
    }

    const resCookies = NextResponse.next()
    const supabase = createSupabaseMiddlewareClient(req, resCookies)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    })
    if (error || !data.session) {
      return NextResponse.json({ ok: false, error: error?.message ?? 'Credenciais inválidas' }, { status: 401 })
    }

    const accessToken = data.session.access_token
    const supabaseAuthed = getSupabaseServerClient(accessToken)
    const { data: profileMaybe, error: profileErrMaybe } = await supabaseAuthed
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .maybeSingle()

    if (profileErrMaybe) {
      return NextResponse.json({ ok: false, error: profileErrMaybe.message }, { status: 400 })
    }

    let profile = profileMaybe
    if (!profile) {
      const meta = (data.user.user_metadata || {}) as Record<string, unknown>
      const role = (meta['role'] as 'client' | 'provider' | undefined) ?? 'client'
      const display_name = (meta['display_name'] as string | undefined) ?? (data.user.email ? data.user.email.split('@')[0] : 'Usuário')
      const avatar_url = (meta['avatar_url'] as string | null | undefined) ?? null
      const bio = (meta['bio'] as string | null | undefined) ?? null
      const { data: upserted, error: upsertErr } = await supabaseAuthed
        .from('profiles')
        .upsert({ id: data.user.id, role, display_name, avatar_url, bio }, { onConflict: 'id' })
        .select('*')
        .maybeSingle()
      if (upsertErr) {
        return NextResponse.json({ ok: false, error: upsertErr.message }, { status: 400 })
      }
      profile = upserted ?? null
    }

    const out = NextResponse.json({ ok: true, session: data.session, profile })
    // Propaga cookies de autenticação setados pelo cliente SSR
    for (const c of resCookies.cookies.getAll()) {
      out.cookies.set(c)
    }
    return out
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}


