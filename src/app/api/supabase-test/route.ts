import { NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase
      .from('test_integration')
      .select('*')
      .limit(5)

    if (error) {
      return NextResponse.json(
        { ok: false, error: { message: error.message, details: error.details, hint: error.hint, code: (error as { code?: string } | null)?.code } },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, data: data ?? [] })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erro desconhecido'
    return NextResponse.json({ ok: false, error: { message } }, { status: 500 })
  }
}


