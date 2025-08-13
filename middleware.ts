import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createSupabaseMiddlewareClient } from './utils/supabase/middleware'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  try {
    const supabase = createSupabaseMiddlewareClient(req, res)
    // Chamada que garante refresh automático de tokens quando necessário
    await supabase.auth.getUser()
  } catch {
    // Ignora erros no middleware para não bloquear navegação pública
  }
  return res
}

export const config = {
  matcher: ['/dashboard/:path*'],
}


