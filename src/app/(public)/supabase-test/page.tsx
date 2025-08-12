'use client'

import { useEffect, useState } from 'react'

type TestRow = { id: number; name: string; note: string | null; is_active: boolean; created_at: string }
type ApiResponse = { ok: true; data: TestRow[] } | { ok: false; error: { message: string; details?: string | null; hint?: string | null; code?: string } }

export default function SupabaseTestPage() {
  const [result, setResult] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/supabase-test', { cache: 'no-store' })
        const json = (await res.json()) as ApiResponse
        setResult(json)
      } catch (e) {
        setResult({ ok: false, error: { message: e instanceof Error ? e.message : 'Erro desconhecido' } })
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <div style={{ padding: 24 }}>
      <h1>Teste Supabase</h1>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <pre style={{ background: '#111', color: '#eee', padding: 16, borderRadius: 8, overflow: 'auto' }}>
{JSON.stringify(result, null, 2)}
        </pre>
      )}
      <p>
        Endpoint: <code>/api/supabase-test</code>
      </p>
    </div>
  )
}


