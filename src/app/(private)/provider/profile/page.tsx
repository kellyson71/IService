import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, User } from "lucide-react";
import React from "react";

export default function ProviderProfile() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#eff6ff] to-[#f0fdf4] flex items-center justify-center">
      <header className="fixed top-0 w-screen bg-background flex gap-4 p-4 font-semibold text-foreground/90 border-b-1 text-md items-center">
        <a href="/home">
          <ArrowLeft className="hover:text-neutral-400" />
        </a>
        Perfil Prestador
      </header>
      <main className="p-8 w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
        <form action="" className=" flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <User className="text-primary" />{" "}
            <h1 className="text-xl font-bold">Informações Básicas</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-foreground/90">
            <div className="h-24 w-24 relative">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  className="object-cover"
                  src="https://i.pinimg.com/564x/84/3f/b1/843fb1ef384a0a97c99250d2dcf0e5a1.jpg"
                  alt="@shadcn"
                />
                <AvatarFallback className="">US</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute rounded-full w-4 h-4 p-4 right-0 bottom-0"
              >
                <Camera />
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              Sua foto de perfil será exibida para os clientes
              <Button variant="outline" className="w-min">
                Alterar Foto
              </Button>
            </div>
          </div>
          <div className="w-full flex flex-1 flex-row gap-4 justify-between">
            <div className="flex-1 flex flex-col gap-2">
              <Label>Nome completo</Label>
              <Input
                className="radius-md h-10 relative"
                placeholder="Maria Silva"
                type="text"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Label>Telefone</Label>
              <Input
                className="radius-md h-10 relative"
                placeholder="(11) 99999-9999"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 -mt-4">
            <Label>Descrição profissional</Label>
            <Textarea
              className="radius-md h-10 relative"
              placeholder="Trabalho com faxina há 5 anos e tenho experiência em limpeza residencial e comercial. Sou pontual, dedicada e sempre
busco deixar tudo impecável."
            />
          </div>
        </form>
      </main>
    </div>
  );
}
