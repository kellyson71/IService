import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import {
  Award,
  DollarSign,
  Filter,
  Heart,
  MapPin,
  Plane,
  PlaneTakeoff,
  Search,
  Send,
  Star,
  StarOff,
  User,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/molecules/header";

export default function Home() {
  const providers = [
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
    {
      name: "Maria Silva",
      role: "faxineira",
      rating: 4.8,
      price: 65,
      customers: 50,
      services: ["Limpeza Pesada", "Limpeza profunda"],
    },
  ];
  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-start">
      <Header />
      <main className="max-sm:p-4 w-full flex-1 flex flex-col gap-4 p-16 px-32 overflow-y-scroll max-h-[90vh]">
        <h1 className="font-bold text-3xl">Filtrar Prestadores</h1>
        <Separator className="mb-2" />
        <Dialog>
          <DialogTrigger>
            <Card className="p-4 mb-6 border-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-background hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all">
              <h1>
                Seu serviço com{" "}
                <span className="font-extrabold border-b-2">Maria Silva</span>{" "}
                foi concluído. Avalie agora e ganhe um <span>desconto</span> em
                sua próxima compra!
              </h1>
            </Card>
          </DialogTrigger>
          <DialogOverlay className="backdrop-blur-sm" />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Avalie seu serviço com <span>Maria Silva.</span>
              </DialogTitle>
              <DialogDescription>
                Ajude-nos a melhorar Deixe sua avaliação para o serviço de{" "}
                <strong>Faxina Completa</strong> com{" "}
                <strong>Maria Silva</strong> em <strong>20/07/2025.</strong>
              </DialogDescription>
            </DialogHeader>
            <h1 className="text-center">Sua nota</h1>
            <div className="flex gap-2 m-auto">
              <Star className="stroke-1 fill-indigo-500 text-indigo-700  w-12 h-auto" />
              <Star className="stroke-1 fill-indigo-500 text-indigo-700 w-12 h-auto" />
              <Star className="stroke-1 fill-indigo-500 text-indigo-700 w-12 h-auto" />
              <Star className="stroke-1 fill-indigo-500 text-indigo-700 w-12 h-auto" />
              <Star className="stroke-1 w-12 h-auto" />
            </div>
            <div>
              <Label htmlFor="" className="mb-4">
                Comentário <span className="opacity-70">(opcional)</span>
              </Label>
              <Textarea placeholder="Compartilhe sua experiência com o serviço..." />
            </div>
            <Button className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
              <Send />
              Enviar Avaliação
            </Button>
          </DialogContent>
        </Dialog>
        <Input
          className="w-full py-4 bg-background rounded-full"
          placeholder="Buscar por nome ou cidade"
        />
        <div className="flex flex-row gap-4 max-sm:hidden">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Star />
            <Input
              type="text"
              placeholder="Nota"
              className="rounded-full bg-background"
            />
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-row gap-2 items-center justify-center">
            <DollarSign />
            <Input
              type="text"
              placeholder="Preço"
              className="rounded-full bg-background"
            />
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-row gap-2 items-center justify-center">
            <MapPin />
            <Input
              type="text"
              placeholder="Distância"
              className="rounded-full bg-background"
            />
          </div>
          <Separator orientation="vertical" />
          <Button className="rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Filter />
            Filtrar
          </Button>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] items-center gap-4">
          {providers.map((e, _) => {
            return (
              <Card
                key={_}
                className="w-full overflow-hidden border-1 rounded-4xl border-accent shadow-sm flex flex-col p-2 items-center justify-center"
              >
                <div className="w-full relative">
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/020/933/072/non_2x/abstract-blur-gradient-background-vector.jpg"
                    alt={String(_)}
                    width={1742}
                    height={980}
                    className="w-full h-30 object-cover rounded-3xl"
                  />
                  <Avatar className="h-24 w-24 absolute -bottom-6 left-6">
                    <AvatarImage
                      className="object-cover"
                      src="https://i.pinimg.com/564x/84/3f/b1/843fb1ef384a0a97c99250d2dcf0e5a1.jpg"
                      alt="@shadcn"
                    />
                    <AvatarFallback className="">US</AvatarFallback>
                  </Avatar>
                </div>
                <div className="p-4 w-full">
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <h1 className="text-left w-full font-semibold text-2xl">
                        {e.name}
                      </h1>
                      <p>Faxineira</p>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                    >
                      <Heart />
                    </Button>
                  </div>
                  <div className="w-full flex flex-row gap-2 mt-2">
                    {e.services.map((item) => (
                      <Badge
                        variant="outline"
                        className="py-2 px-4 rounded-full font-normal"
                      >
                        {item}
                      </Badge>
                    ))}
                    <Badge
                      variant="outline"
                      className="py-2 px-4 rounded-full font-normal"
                    >
                      +2
                    </Badge>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-4 h-12 py-2 px-4 mt-2">
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row font-semibold gap-1">
                        <Star className="text-foreground fill-foreground w-4" />{" "}
                        {e.rating}
                      </div>
                      <p className="text-sm text-foreground/70">Avaliação</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row font-semibold gap-1">
                        <Award className="text-foreground w-4" /> {e.customers}+
                      </div>
                      <p className="text-sm text-foreground/70">Clientes</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row font-semibold gap-1">
                        {e.rating}
                      </div>
                      <p className="text-sm text-foreground/70">Rate</p>
                    </div>
                  </div>
                  <a href="/username">
                    <Button className="bg-foreground w-full rounded-3xl mt-4 hover:bg-foreground hover:bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Conhecer
                    </Button>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
