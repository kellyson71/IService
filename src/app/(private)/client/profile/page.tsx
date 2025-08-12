import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Camera,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  MapPin,
  Plus,
  Save,
  ScrollText,
  Shield,
  Star,
  Trash,
  Trash2,
  User,
} from "lucide-react";
import React from "react";

export default function ProviderProfile() {
  return (
    <div className="w-screen min-h-screen overflow-y-auto bg-accent flex items-start justify-center">
      <header className="fixed top-0 w-screen bg-background flex gap-4 p-4 font-semibold text-foreground/90 border-b-1 text-md items-center">
        <a href="/home">
          <ArrowLeft className="hover:text-neutral-400" />
        </a>
        Perfil Prestador
      </header>
      <main className="mt-30 my-20">
        <form className=" flex flex-col gap-8">
          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <User className="text-indigo-600" />{" "}
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
                  className="bg-indigo-500 absolute rounded-full w-4 h-4 p-4 right-0 bottom-0"
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
                <Label>Email</Label>
                <Input
                  className="radius-md h-10 relative"
                  placeholder="joão.silva@email.com"
                  type="email"
                />
              </div>
            </div>
            <div className="w-full flex flex-1 flex-row gap-4 justify-between">
              <div className="flex-1 flex flex-col gap-2">
                <Label>CEP</Label>
                <Input
                  className="radius-md h-10 relative"
                  placeholder="00000-000"
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
            <div className="flex-1 flex flex-col gap-2">
              <Label>Endereço completo</Label>
              <Input
                className="radius-md h-10 relative"
                placeholder="Rua das Flores, 123 - São Paulo, SP"
                type="text"
              />
            </div>
            <Button variant={"outline"}>
              <Save />
              Salvar
            </Button>
          </Card>
          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <CreditCard className="text-indigo-600" />{" "}
              <h1 className="text-xl font-bold">Formas de pagamento</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer">
                <div className="flex items-center gap-4">
                  <h2 className="px-2 py-1 bg-blue-800 text-white">VISA</h2>
                  <div>
                    <h2>**** **** **** 1234</h2>
                    <label className="text-sm text-neutral-500">
                      Expira em 12/06
                    </label>
                  </div>
                </div>
                <Badge variant={"secondary"}>Principal</Badge>
              </div>
              <Button variant={"outline"}>
                <CreditCard />
                Adicionar cartão
              </Button>
            </div>
          </Card>
          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <CreditCard className="text-indigo-600" />{" "}
              <h1 className="text-xl font-bold">Formas de pagamento</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between hover:bg-accent hover:scale-103 transition-all items-center w-full cursor-pointer">
                <div>
                  <h2>Notificações por push-up</h2>
                  <label className="text-sm text-neutral-500">
                    Receber atualizações sobre seus agendamentos
                  </label>
                </div>
                <Button />
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between hover:bg-accent hover:scale-103 transition-all items-center w-full cursor-pointer">
                <div>
                  <h2>Notificações por push-up</h2>
                  <label className="text-sm text-neutral-500">
                    Receber atualizações sobre seus agendamentos
                  </label>
                </div>
                <Button />
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between hover:bg-accent hover:scale-103 transition-all items-center w-full cursor-pointer">
                <div>
                  <h2>Notificações por push-up</h2>
                  <label className="text-sm text-neutral-500">
                    Receber atualizações sobre seus agendamentos
                  </label>
                </div>
                <Button />
              </div>
            </div>
          </Card>
          <Card className="p-8 max-sm:w-full gap-2 w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="text-indigo-600" />{" "}
              <h1 className="text-xl font-bold">Segurança</h1>
            </div>
            <div className="flex w-full gap-4">
              <Button variant={"outline"} className="flex-1">
                Alterar Senha
              </Button>
              <Button variant={"outline"} className="flex-1">
                Autenticação 2 fatores
              </Button>
            </div>
            <Button variant={"destructive"} className="flex-1">
              Excluir conta
            </Button>
          </Card>
        </form>
      </main>
    </div>
  );
}
