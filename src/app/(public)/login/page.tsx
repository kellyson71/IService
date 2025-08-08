"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, User } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
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
            Entrar na sua conta
          </h1>
          <p className="text-foreground/70 text-center text-sm leading-10">
            Insira suas credenciais para entrar na plataforma.
          </p>
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
            <Label className="text-primary absolute right-0 top-0 hover:text-blue-800 hover:cursor-pointer">
              Esqueceu sua senha?
            </Label>
            <Input className="radius-md h-10" type="password" />
          </div>
          <Button className="flex-1 font-bold">Entrar</Button>
          <p className="text-center font-light text-sm">OU</p>
          <div className="flex flex-col gap-2">
            <p className="text-center text-foreground/60 text-md">
              Deseja se cadastrar como?
            </p>
            <div className="flex flex-1 flex-row gap-2 items-center justify-between">
              <Button
                type="button"
                onClick={() => redirect("/register/client")}
                className="flex-1 p-2 py-6 bg-background border-1 border-primary rounded-md text-primary hover:text-background hover:cursor-pointer"
              >
                <User />
                Cliente
              </Button>
              <Button
                type="button"
                onClick={() => redirect("/register/provider")}
                className="flex-1 p-2 py-6 bg-background border-1 border-emerald-600 rounded-md text-emerald-600 hover:bg-emerald-600 hover:text-background hover:cursor-pointer"
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
