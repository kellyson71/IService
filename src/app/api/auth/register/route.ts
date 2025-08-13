import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { createClient } from '@supabase/supabase-js'

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

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const supabase = getSupabaseServerClient()

    // Caminho preferencial: usar service role (se disponível) para evitar falhas de DB/SMTP em dev
    if (supabaseUrl && serviceKey) {
      const serviceClient = createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } })
      const { data: created, error: adminError } = await serviceClient.auth.admin.createUser({
        email: body.email,
        password: body.password,
        email_confirm: true,
        user_metadata: { display_name: body.display_name, role: body.role, bio: body.bio ?? null },
      })
      if (adminError || !created.user) {
        const message = adminError?.message ?? 'Falha ao registrar (admin)'
        const details = (adminError as { status?: number; name?: string; code?: string; hint?: string; error_description?: string } | null) || null
        return NextResponse.json({ ok: false, error: message, details }, { status: 400 })
      }
      return NextResponse.json({ ok: true })
    }

    // Fallback: fluxo padrão com confirmação por email
    const origin = process.env.SITE_URL || req.headers.get('origin') || 'http://localhost:3000'
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: {
        data: { display_name: body.display_name, role: body.role, bio: body.bio ?? null },
        emailRedirectTo: `${origin}/auth/confirm`,
      },
    })
    if (signUpError || !signUpData.user) {
      const message = signUpError?.message ?? 'Falha ao registrar'
      const details = (signUpError as { status?: number; name?: string; code?: string; hint?: string; error_description?: string } | null) || null
      return NextResponse.json({ ok: false, error: message, details }, { status: 400 })
    }

    // Perfil será criado automaticamente pelo trigger em auth.users → public.profiles
    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}


