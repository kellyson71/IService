import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'

type Body = { access_token: string; refresh_token: string }

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Body>
    if (!body.access_token || !body.refresh_token) {
      return NextResponse.json({ ok: false, error: 'Tokens ausentes' }, { status: 400 })
    }

    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.auth.setSession({
      access_token: body.access_token,
      refresh_token: body.refresh_token,
    })
    if (error || !data.session) {
      return NextResponse.json({ ok: false, error: error?.message ?? 'Falha ao criar sessão' }, { status: 400 })
    }
    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}


