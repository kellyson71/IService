import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'

type Body = {
  email: string
  password: string
  display_name: string
  role: 'client' | 'provider'
  bio?: string | null
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Body>
    if (!body.email || !body.password || !body.display_name || !body.role) {
      return NextResponse.json({ ok: false, error: 'Campos obrigatórios faltando' }, { status: 400 })
    }

    const supabase = getSupabaseServerClient()

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: { data: { display_name: body.display_name, role: body.role, bio: body.bio ?? null } },
    })
    if (signUpError || !signUpData.user) {
      return NextResponse.json({ ok: false, error: signUpError?.message ?? 'Falha ao registrar' }, { status: 400 })
    }

    // Perfil será criado automaticamente pelo trigger em auth.users → public.profiles
    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}


