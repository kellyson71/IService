"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function RegisterClient() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#eff6ff] to-[#f0fdf4] flex items-center justify-center">
      <div className="p-8 bg-background border-1 border-accent rounded-2xl shadow-2xl">
        <form action="" className="flex flex-col gap-5">
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
            <Input
              placeholder="Seu nome"
              type="name"
              className="radius-md h-10"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>E-mail</Label>
            <Input
              placeholder="seu@email.com"
              type="email"
              className="radius-md h-10"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>Senha</Label>
            <Input className="radius-md h-10" type="password" />
          </div>
          <div className="flex flex-col gap-2 relative">
            <Label>Confirmar senha</Label>
            <Input className="radius-md h-10" type="password" />
          </div>
          <Button className="flex-1 font-bold">Cadastrar</Button>
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
