import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Camera,
  Clock,
  DollarSign,
  FileText,
  MapPin,
  Plus,
  ScrollText,
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
                <Label>Telefone</Label>
                <Input
                  className="radius-md h-10 relative"
                  placeholder="(11) 99999-9999"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Descrição profissional</Label>
              <Textarea
                className="radius-md h-10 relative"
                placeholder="Trabalho com faxina há 5 anos e tenho experiência em limpeza residencial e comercial. Sou pontual, dedicada e sempre
busco deixar tudo impecável."
              />
            </div>
          </Card>
          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" />{" "}
              <h1 className="text-xl font-bold">
                Localização e Área de Atendimento
              </h1>
            </div>
            <div className="w-full max-sm:flex-col flex flex-1 flex-row gap-4 justify-between">
              <div className="flex-1 flex flex-col gap-2">
                <Label>Cidade</Label>
                <Input
                  className="radius-md h-10 relative"
                  placeholder="São Paulo"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label>Bairro</Label>
                <Input
                  className="radius-md h-10 relative"
                  placeholder="Vila Madalena"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label>Raio de Atendimento</Label>
                <Input
                  className="radius-md h-10 relative"
                  placeholder="10 km"
                  type="text"
                />
              </div>
            </div>
          </Card>
          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-4">
                <DollarSign className="text-indigo-600" />{" "}
                <h1 className="text-xl font-bold">Serviços e Preços</h1>
              </div>
              <Button
                variant="purple"
                className="flex gap-2 items-center justify-center"
              >
                <Plus />
                Adicionar serviço
              </Button>
            </div>
            <div className="border-1 p-8 flex flex-col gap-8 rounded-sm">
              <div className="w-full flex justify-between">
                <h2>Serviço #1</h2>
                <Trash2 className="text-red-600 hover:text-red-800 hover:scale-110 cursor-pointer transition-all" />
              </div>
              <div className="w-full max-sm:flex-col flex flex-1 flex-row gap-4 justify-between">
                <div className="flex-1 flex flex-col gap-2">
                  <Label>Nome do serviço</Label>
                  <Input
                    className="radius-md h-10 relative"
                    placeholder="Limpeza completa"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <Label>Preço (R$)</Label>
                  <Input
                    className="radius-md h-10 relative"
                    placeholder="R$ 120,00"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 -mt-4">
                <Label>Descrição</Label>
                <Textarea
                  className="radius-md h-10 relative"
                  placeholder="Passar roupas e organizar."
                />
              </div>
            </div>
            <div className="border-1 p-8 flex flex-col gap-8 rounded-sm">
              <div className="w-full flex justify-between">
                <h2>Serviço #2</h2>
                <Trash2 className="text-red-600 hover:text-red-800 hover:scale-110 cursor-pointer transition-all" />
              </div>
              <div className="w-full max-sm:flex-col flex flex-1 flex-row gap-4 justify-between">
                <div className="flex-1 flex flex-col gap-2">
                  <Label>Nome do serviço</Label>
                  <Input
                    className="radius-md h-10 relative"
                    placeholder="Passar roupa"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <Label>Preço (R$)</Label>
                  <Input
                    className="radius-md h-10 relative"
                    placeholder="R$ 120,00"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 -mt-4">
                <Label>Descrição</Label>
                <Textarea
                  className="radius-md h-10 relative"
                  placeholder="Passar roupas e organizar."
                />
              </div>
            </div>
          </Card>
          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <Clock className="text-indigo-600" />{" "}
              <h1 className="text-xl font-bold">Disponibilidade</h1>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="monday"
                className="flex justify-between  hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Checkbox id="monday" />
                  <span>Domingo</span>
                </div>

                <div className="flex gap-4 items-center">
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  às
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </label>
              <label
                htmlFor="monday"
                className="flex justify-between  hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Checkbox id="monday" />
                  <span>Segunda-feira</span>
                </div>

                <div className="flex gap-4 items-center">
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  às
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </label>
              <label
                htmlFor="tuesday"
                className="flex justify-between  hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Checkbox id="tuesday" />
                  <span>Terça-feira</span>
                </div>

                <div className="flex gap-4 items-center">
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  às
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </label>

              <label
                htmlFor="wednesday"
                className="flex justify-between  hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Checkbox id="wednesday" />
                  <span>Quarta-feira</span>
                </div>

                <div className="flex gap-4 items-center">
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  às
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </label>

              <label
                htmlFor="thursday"
                className="flex justify-between  hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Checkbox id="thursday" />
                  <span>Quinta-feira</span>
                </div>

                <div className="flex gap-4 items-center">
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  às
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </label>

              <label
                htmlFor="friday"
                className="flex justify-between  hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Checkbox id="friday" />
                  <span>Sexta-feira</span>
                </div>

                <div className="flex gap-4 items-center">
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  às
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </label>

              <label
                htmlFor="saturday"
                className="flex justify-between  hover:bg-accent hover:scale-103 transition-all items-center w-full p-4 border rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Checkbox id="saturday" />
                  <span>Sábado</span>
                </div>

                <div className="flex gap-4 items-center">
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  às
                  <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </label>
            </div>
          </Card>

          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <ScrollText className="text-indigo-600" />{" "}
              <h1 className="text-xl font-bold">Documentos</h1>
            </div>
            <div className="w-full max-sm:flex-col flex flex-1 flex-row gap-4 justify-between">
              <Card className="shadow-none border-dashed flex-1 flex flex-col gap-1 items-center text-neutral-700">
                <FileText />
                RG ou CNH
                <Button variant={"outline"}>Enviar documento</Button>
              </Card>
              <Card className="shadow-none border-dashed flex-1 flex flex-col gap-1 items-center text-neutral-700">
                <FileText />
                Comprovante de residência
                <Button variant={"outline"}>Enviar documento</Button>
              </Card>
            </div>
            <h2 className="p-4 bg-indigo-50 rounded-lg">
              <strong className="text-indigo-600">Importante: </strong>Os
              documentos são necessários para verificação de identidade e
              aumentam a confiança dos clientes.
            </h2>
          </Card>

          <Card className="p-8 max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <Star className="text-indigo-600" />{" "}
              <h1 className="text-xl font-bold">Suas estatísticas</h1>
            </div>
            <div className="w-full max-sm:flex-col flex flex-1 flex-row gap-4 justify-between text-neutral-700 text-sm">
              <div className="flex flex-col items-center gap-2 border-1 p-4 rounded-lg flex-1">
                <h2 className="text-4xl text-indigo-600 font-black">4.8</h2>
                Avaliação média
              </div>
              <div className="flex flex-col items-center gap-2 border-1 p-4 rounded-lg flex-1">
                <h2 className="text-4xl text-indigo-600 font-black">127</h2>
                Serviços realizados
              </div>
              <div className="flex flex-col items-center gap-2 border-1 p-4 rounded-lg flex-1">
                <h2 className="text-4xl text-indigo-600 font-black">98%</h2>
                Taxa de aprovação
              </div>
            </div>
          </Card>

          <Card className="p-8 flex gap-2 flex-row max-sm:w-full w-[60vw] bg-background border-1 border-accent rounded-2xl shadow-2xl">
            <Button variant="purple" className="flex-1">
              Salvar alterações
            </Button>
            <Button variant={"outline"}>Perfil Público</Button>
          </Card>
        </form>
      </main>
    </div>
  );
}
