"use client";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import {
  Award,
  Calendar,
  ChevronDownIcon,
  Clock,
  Heart,
  Inbox,
  Search,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Header from "@/components/molecules/header";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ScheduleForm from "@/components/molecules/schedule-form";

export default function UserPage() {
  const user = {
    name: "Maria Silva",
    role: "faxineira",
    rating: 4.8,
    price: 65,
    customers: 50,
    services: ["Passar Roupa", "Limpeza Pesada", "Organização"],
    about:
      "Trabalho com faxina há 5 anos e tenho experiência em limpeza residencial e comercial. Sou pontual, dedicada e sempre busco deixar tudo impecável. Tenho disponibilidade flexível e trabalho com produtos próprios ou do cliente.",
    availability: {
      days: "Segunda a Sexta",
      time: "08h às 18h",
    },
    comments: [
      {
        username: "Ana Costa",
        content:
          "Excelente profissional! Muito caprichosa e pontual. Recomendo!",
        date: new Date("2025-08-05T03:24:00"),
      },
      {
        username: "Ana Costa",
        content:
          "Excelente profissional! Muito caprichosa e pontual. Recomendo!",
        date: new Date("2025-08-05T03:24:00"),
      },
      {
        username: "Ana Costa",
        content:
          "Excelente profissional! Muito caprichosa e pontual. Recomendo!",
        date: new Date("2025-08-05T03:24:00"),
      },
    ],
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-start">
      <Header />
      <main className="max-sm:p-4 w-full flex-1 flex flex-col gap-4 p-8 px-32 overflow-y-scroll max-h-[90vh]">
        <div className="bg-neutral-200 p-8 rounded-3xl">
          <div className="min-md:grid min-md:grid-cols-3 items-center gap-4">
            <Card className="w-full border-1 rounded-4xl border-accent shadow-sm flex flex-col p-2 items-center justify-center">
              <div className="w-full relative">
                <div className="relative">
                  <Image
                    src="https://i.pinimg.com/564x/84/3f/b1/843fb1ef384a0a97c99250d2dcf0e5a1.jpg"
                    alt="teste"
                    width={1742}
                    height={980}
                    className="w-full h-30 rounded-3xl object-cover "
                  />
                  <div className="w-full absolute -top-12 flex items-center justify-center">
                    <Avatar className="h-48 w-48">
                      <AvatarImage
                        className=" object-cover"
                        src="https://i.pinimg.com/564x/84/3f/b1/843fb1ef384a0a97c99250d2dcf0e5a1.jpg"
                        alt="@shadcn"
                      />
                      <AvatarFallback className="">US</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h1 className="text-left w-full font-semibold text-2xl">
                      {user.name}
                    </h1>
                    <p>{user.role}</p>
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Heart />
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-between gap-4 h-12 py-2 px-4 mt-2">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row font-semibold gap-1">
                      <Star className="text-foreground fill-foreground w-4" />{" "}
                      {user.rating}
                    </div>
                    <p className="text-sm text-foreground/70">Avaliação</p>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row font-semibold gap-1">
                      <Award className="text-foreground w-4" /> {user.customers}
                      +
                    </div>
                    <p className="text-sm text-foreground/70">Clientes</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="max-sm:p-4 max-sm:mt-8 w-full h-full border-1 col-start-2 col-end-4 rounded-4xl border-accent shadow-sm flex flex-col p-16 items-center justify-center">
              <h1 className="text-lg font-bold text-left w-full">Sobre</h1>
              <p>{user.about}</p>
            </Card>
          </div>
        </div>
        <div className="bg-neutral-200 p-8 rounded-3xl">
          <div className="min-md:grid min-md:grid-cols-3 items-center gap-4">
            <Card className="w-full h-full relative border-1 gap-0 rounded-4xl border-accent shadow-sm flex flex-col p-2 items-center justify-center">
              <div className="absolute w-full flex items-center justify-center max-sm:-top-5 -top-3">
                <h1 className="max-sm:shadow-lg px-4 py-2 bg-background rounded-full">
                  Serviços oferecidos
                </h1>
              </div>
              <div className="flex flex-col gap-4 w-full p-6">
                <Badge className="hover:scale-105 transition-all text-lg w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Faxina Completa
                </Badge>
                {user.services.map((item) => (
                  <Badge
                    variant="outline"
                    className="hover:scale-105 transition-all text-lg w-full"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              <h1 className="flex items-center justify-center gap-2 rounded-full">
                <Clock />
                Disponibilidade
              </h1>
              <div className="flex flex-col gap-4 w-full p-6">
                <Badge
                  variant="outline"
                  className="hover:scale-105 transition-all text-lg w-full"
                >
                  {user.availability.days}
                </Badge>
                <Badge
                  variant="outline"
                  className="hover:scale-105 transition-all text-lg w-full"
                >
                  {user.availability.time}
                </Badge>
              </div>
            </Card>
            <Card className="max-md:p-4 max-md:mt-8 w-full h-full border-1 col-start-2 col-end-4 rounded-4xl border-accent shadow-sm flex flex-col p-16 items-center justify-center">
              <div className="w-full flex flex-col">
                {user.comments.map((comment, _) => (
                  <>
                    {_ == 0 ? "" : <Separator className="my-4" />}
                    <div className="flex gap-4">
                      <Avatar className="h-16 w-16 m-auto max-sm:hidden">
                        <AvatarImage
                          className=" object-cover"
                          src="https://i.pinimg.com/564x/84/3f/b1/843fb1ef384a0a97c99250d2dcf0e5a1.jpg"
                          alt="@shadcn"
                        />
                        <AvatarFallback className="">US</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex max-md:flex-col max-md:gap-1 flex-row gap-4">
                          <h1>{comment.username}</h1>
                          <div className="flex flex-row gap-2">
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <Star className="text-yellow-400 fill-yellow-400" />
                          </div>
                          <span className="opacity-70">
                            Há{" "}
                            {Math.floor(
                              (new Date().getTime() - comment.date.getTime()) /
                                (1000 * 60 * 60 * 24)
                            )}{" "}
                            dias
                          </span>
                        </div>
                        <p className="max-md:text-balance">
                          Excelente profissional! Muito caprichosa e pontual.
                          Recomendo!
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Card>
          </div>
        </div>
        <div className="flex gap-4 w-full max-sm:flex-col">
          <Button
            variant="outline"
            className="flex-1 hover:scale-105 hover:cursor-pointer rounded-full"
          >
            Entrar em contato agora.
          </Button>
          <Dialog>
            <DialogTrigger className="flex-1">
              <Button className="flex-1 hover:scale-105 hover:from-indigo-600 hover:cursor-pointer hover:via-purple-600 hover:to-pink-600 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                Contratar
              </Button>
            </DialogTrigger>
            <DialogOverlay className="backdrop-blur-sm" />
            <DialogContent className="w-90">
              <ScheduleForm />
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
