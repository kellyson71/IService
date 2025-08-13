"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error || "Falha no login");
        return;
      }
      router.push("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }
  async function handleMock(role: 'client' | 'provider') {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/auth/mock-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error || 'Falha no login mock');
        return;
      }
      router.push('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-screen h-screen bg-indigo-900 flex items-center justify-center">
      <div className="p-8 bg-background border-1 border-accent rounded-2xl shadow-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <p className="font-extrabold text-center text-2xl leading-12 mb-4">
            <span className="mr-2 py-2 px-3 h-4 w-4 text-background rounded-md bg-indigo-600">
              is
            </span>
            iServices
          </p>
          <h1 className="text-2xl max-sm:leading-8 font-bold text-center leading-0">
            Entrar na sua conta
          </h1>
          <p className="text-foreground/70 text-center max-sm:leading-4 text-sm leading-10">
            Insira suas credenciais para entrar na plataforma.
          </p>
          <div className="flex flex-col gap-2 relative">
            <Label>E-mail</Label>
            <Input
              placeholder="seu@email.com"
              type="email"
              className="radius-md h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>Senha</Label>
            <Label className="text-indigo-600 absolute right-0 top-0 hover:text-indigo-800 hover:cursor-pointer">
              Esqueceu sua senha?
            </Label>
            <Input
              className="radius-md h-10"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button
            disabled={loading}
            className="flex-1 font-bold bg-indigo-600 hover:bg-indigo-800"
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
          <p className="text-center font-light text-sm">OU</p>
          <div className="flex flex-col gap-2">
            <p className="text-center text-foreground/60 text-md">
              Deseja se cadastrar como?
            </p>
            <div className="flex flex-1 flex-row gap-2 items-center justify-between">
              <Button
                type="button"
                onClick={() => handleMock('client')}
                className="flex-1 p-2 py-6 bg-background border-1 border-indigo-600 hover:bg-indigo-600 rounded-2xl text-indigo-600 hover:text-background hover:cursor-pointer"
              >
                <User />
                Cliente
              </Button>
              <Button
                type="button"
                onClick={() => handleMock('provider')}
                className="flex-1 p-2 py-6 bg-background border-1 border-pink-600 rounded-2xl text-pink-600 hover:bg-pink-600 hover:text-background hover:cursor-pointer"
              >
                <Briefcase />
                Provedor
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
