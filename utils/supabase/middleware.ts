import { createServerClient, type CookieOptions } from '@supabase/ssr'
import type { NextRequest, NextResponse } from 'next/server'

export function createSupabaseMiddlewareClient(req: NextRequest, res: NextResponse) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY não definidas')
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return req.cookies.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        res.cookies.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        res.cookies.set({ name, value: '', ...options, maxAge: 0 })
      },
    },
  })
}


