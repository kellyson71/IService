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
  Search,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";

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
      <header className="flex flex-row items-center justify-between top-0 bg-background w-full px-8 py-4 border-1 border-accent">
        <h1>
          <a href="/home">iServices</a>
        </h1>
        <div className="w-full mx-10 relative">
          <div className="absolute h-full flex items-center justify-center pl-2">
            <Search className="opacity-50" />
          </div>
          <Input
            className="rounded-full pl-10"
            placeholder="Buscar prestadora..."
          />
        </div>
        <Button className="rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          <User />
          Perfil
        </Button>
      </header>
      <main className="w-full flex-1 flex flex-col gap-4 p-16 px-32 overflow-y-scroll max-h-[90vh]">
        <h1 className="font-bold text-3xl">Filtrar Prestadores</h1>
        <Separator className="mb-8" />
        <Input
          className="w-full py-4 bg-background rounded-full"
          placeholder="Buscar por nome ou cidade"
        />
        <div className="flex flex-row gap-4">
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

        <div className="grid grid-cols-3 items-center gap-4">
          {providers.map((e, _) => {
            return (
              <Card
                key={_}
                className="w-full border-1 rounded-4xl border-accent shadow-sm flex flex-col p-2 items-center justify-center"
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
