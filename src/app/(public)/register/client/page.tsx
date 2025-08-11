"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function RegisterClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (password !== confirmPassword) {
      setError('Senhas não conferem')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, display_name: name, role: 'client' }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) {
        setError(json.error || 'Falha no cadastro')
        return
      }
      window.location.href = '/login'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#eff6ff] to-[#f0fdf4] flex items-center justify-center">
      <div className="p-8 bg-background border-1 border-accent rounded-2xl shadow-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <p className="font-extrabold text-center text-2xl leading-12 mb-4">
            <span className="mr-2 py-2 px-3 h-4 w-4 text-background rounded-md bg-primary">
              is
            </span>
            iservices
          </p>
          <h1 className="text-2xl font-bold text-center leading-0">
            Criar sua conta
          </h1>
          <p className="text-foreground/70 text-center text-sm leading-10">
            Preencha os seus dados abaixo para criar sua conta.
          </p>
          <div className="flex flex-col gap-2 relative">
            <Label>Nome completo</Label>
            <Input placeholder="Seu nome" type="text" className="radius-md h-10" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>E-mail</Label>
            <Input placeholder="seu@email.com" type="email" className="radius-md h-10" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>Senha</Label>
            <Input className="radius-md h-10" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>Confirmar senha</Label>
            <Input className="radius-md h-10" type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button disabled={loading} className="flex-1 font-bold">{loading ? 'Cadastrando...' : 'Cadastrar'}</Button>
          <p className="text-center text-sm">
            Já tem uma conta?{" "}
            <span className="text-primary">
              <a
                href="/login"
                className="hover:text-blue-800 hover:cursor-pointer hover:underline"
              >
                Faça login
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
