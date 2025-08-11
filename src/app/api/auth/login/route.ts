import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'

type Body = { email: string; password: string }

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Body>
    if (!body.email || !body.password) {
      return NextResponse.json({ ok: false, error: 'Campos obrigatórios faltando' }, { status: 400 })
    }

    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    })
    if (error || !data.session) {
      return NextResponse.json({ ok: false, error: error?.message ?? 'Credenciais inválidas' }, { status: 401 })
    }

    const accessToken = data.session.access_token
    const supabaseAuthed = getSupabaseServerClient(accessToken)
    const { data: profile, error: profileError } = await supabaseAuthed
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single()
    if (profileError) {
      return NextResponse.json({ ok: false, error: profileError.message }, { status: 400 })
    }

    return NextResponse.json({ ok: true, session: data.session, profile })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}


