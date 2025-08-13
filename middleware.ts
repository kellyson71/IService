import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createSupabaseMiddlewareClient } from './src/utils/supabase/middleware'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  try {
    const supabase = createSupabaseMiddlewareClient(req, res)
    const { data } = await supabase.auth.getUser()
    const user = data.user

    const requiresAuth =
      pathname === '/checkout' ||
      pathname === '/inbox' ||
      pathname.startsWith('/dashboard') ||
      pathname.startsWith('/client') ||
      pathname.startsWith('/provider')

    if (requiresAuth && !user) {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('next', req.nextUrl.pathname + req.nextUrl.search)
      return NextResponse.redirect(loginUrl)
    }

    // Role guard apenas para rotas específicas
    const role = (user?.user_metadata?.role as 'client' | 'provider' | undefined) ?? undefined
    if (user) {
      if (pathname.startsWith('/provider') && role !== 'provider') {
        return NextResponse.redirect(new URL('/dashboard/client', req.url))
      }
      if (pathname.startsWith('/client') && role !== 'client') {
        return NextResponse.redirect(new URL('/dashboard/provider', req.url))
      }
    }
  } catch {
    // Ignorar para não bloquear navegação pública
  }

  return res
}

export const config = {
  matcher: ['/checkout', '/inbox', '/dashboard/:path*', '/client/:path*', '/provider/:path*'],
}


