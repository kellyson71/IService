'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AuthConfirmPage() {
  const router = useRouter()
  const search = useSearchParams()
  const [message, setMessage] = useState('Validando confirmação...')

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    const params = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash)
    const access_token = params.get('access_token')
    const refresh_token = params.get('refresh_token')
    const type = params.get('type')
    if (!access_token || !refresh_token) {
      setMessage('Link inválido ou tokens ausentes')
      return
    }

    ;(async () => {
      try {
        const res = await fetch('/api/auth/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ access_token, refresh_token }),
        })
        const json = await res.json()
        if (!res.ok || !json.ok) {
          setMessage(json.error || 'Falha ao confirmar')
          return
        }
        // Redireciona para login; o usuário pode entrar agora
        router.replace('/login')
      } catch (e) {
        setMessage(e instanceof Error ? e.message : 'Erro desconhecido')
      }
    })()
  }, [router, search])

  return (
    <div style={{ padding: 24 }}>
      <h1>Confirmação de Email</h1>
      <p>{message}</p>
    </div>
  )
}


