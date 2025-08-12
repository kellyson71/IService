"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AvatarFallback } from "@radix-ui/react-avatar";
import React, { useState } from "react";

export default function RegisterProvider() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Senhas não conferem");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          display_name: name,
          role: "provider",
          bio,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error || "Falha no cadastro");
        return;
      }
      window.location.href = "/login";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-screen h-screen bg-indigo-900 flex items-center justify-center">
      <div className="p-8 bg-background border-1 border-accent rounded-2xl shadow-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 overflow-y-scroll max-h-[70vh]"
        >
          <p className="font-extrabold text-center text-2xl leading-12 mb-4">
            <span className="mr-2 py-2 px-3 h-4 w-4 text-background rounded-md bg-indigo-600">
              is
            </span>
            iServices
          </p>
          <h1 className="text-2xl font-bold text-center leading-0">
            Criar sua conta
          </h1>
          <p className="text-foreground/70 text-center text-sm leading-4">
            Preencha os seus dados abaixo para criar sua conta.
          </p>
          <div className="flex flex-col gap-2 relative">
            <Label>Nome completo</Label>
            <Input
              placeholder="Seu nome"
              type="text"
              className="radius-md h-10"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-col gap-2 relative">
              <Label>Senha</Label>
              <Input
                className="radius-md h-10"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <Label>Confirmar senha</Label>
              <Input
                className="radius-md h-10"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Avatar className="h-24 w-auto">
              <AvatarImage
                className="h-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback className="h-full">US</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-center">
              <h1>Foto de Perfil</h1>
              <p className="text-foreground/70">
                Adicione uma foto para seu perfil de prestador.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>Sobre você (bio)</Label>
            <Textarea
              className="radius-md h-10"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex w-full flex-1 flex-col gap-2 relative">
              <Label>Tipo de Serviço Principal</Label>
              <Select>
                <SelectTrigger className="radius-md w-full flex-1">
                  <SelectValue placeholder="Selecione um tipo." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Serviços</SelectLabel>
                    <SelectItem value="heavy">Limpeza pesada</SelectItem>
                    <SelectItem value="fast">Limpeza rápida</SelectItem>
                    <SelectItem value="monthly">Serviço mensal</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 relative">
              <Label>Preço</Label>
              <Input
                className="radius-md h-10 relative"
                placeholder="R$ 120,00"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-col gap-2 relative">
              <Label>Cidade</Label>
              <Input
                className="radius-md h-10"
                placeholder="Pau dos Ferros"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <Label>Bairro</Label>
              <Input
                className="radius-md h-10"
                placeholder="Nações Unidas"
                type="text"
              />
            </div>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button
            disabled={loading}
            className="flex-1 bg-indigo-600 hover:bg-indigo-800 font-bold"
          >
            {loading ? "Cadastrando..." : "Cadastrar como prestador"}
          </Button>
          <p className="text-center text-sm">
            Já tem uma conta?{" "}
            <span className="text-indigo-600">
              <a
                href="/login"
                className="hover:text-indigo-800 hover:cursor-pointer hover:underline"
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
