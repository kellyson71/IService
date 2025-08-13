"use client";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";
import React, { useState } from "react";
import Header from "@/components/molecules/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Agenda() {
  const [selected, setSelected] = useState<
    "pending" | "finished" | "cancelled" | "all"
  >("all");

  const upcoming = [
    {
      date: new Date("08/14/2025"),
      client: "João Silva",
      services: ["organização", "passar roupa"],
      value: "R$ 150,00",
    },
    {
      date: new Date("08/17/2025"),
      client: "Maria Joana",
      services: ["organização", "passar roupa"],
      value: "R$ 120,00",
    },
  ];

  const services = [
    {
      date: new Date("08/14/2025"),
      client: "João Silva",
      services: ["organização", "passar roupa"],
      value: "R$ 150,00",
      status: "pendente",
    },
    {
      date: new Date("08/17/2025"),
      client: "Maria Joana",
      services: ["organização", "passar roupa"],
      value: "R$ 120,00",
      status: "pendente",
    },
    {
      date: new Date("08/14/2025"),
      client: "João Silva",
      services: ["organização", "passar roupa"],
      value: "R$ 150,00",
      status: "concluído",
    },
    {
      date: new Date("08/17/2025"),
      client: "Maria Joana",
      services: ["organização", "passar roupa"],
      value: "R$ 120,00",
      status: "cancelado",
    },
    {
      date: new Date("08/14/2025"),
      client: "João Silva",
      services: ["organização", "passar roupa"],
      value: "R$ 150,00",
      status: "cancelado",
    },
    {
      date: new Date("08/17/2025"),
      client: "Maria Joana",
      services: ["organização", "passar roupa"],
      value: "R$ 120,00",
      status: "concluído",
    },
    {
      date: new Date("08/14/2025"),
      client: "João Silva",
      services: ["organização", "passar roupa"],
      value: "R$ 150,00",
      status: "pendente",
    },
    {
      date: new Date("08/17/2025"),
      client: "Maria Joana",
      services: ["organização", "passar roupa"],
      value: "R$ 120,00",
      status: "pendente",
    },
  ];

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-start">
      <Header />
      <main className="max-sm:p-4 w-full flex-1 flex flex-col gap-4 p-16 px-32 overflow-y-scroll max-h-[90vh]">
        <div className="bg-accent rounded-2xl max-sm:p-4 p-12">
          <div className="flex max-sm:flex-col max-sm: gap-4 justify-between">
            <h1 className="text-lg font-extrabold">Próximos serviços</h1>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-row gap-4 max-sm:flex-col">
            {upcoming.map((item) => (
              <Card
                key={item.client}
                className="flex-1 relative flex gap-4 items-center justify-between bg-card border-1 rounded-lg p-4"
              >
                <div className="absolute -top-4">
                  <Badge variant="outline" className="bg-accent">
                    {" "}
                    {Math.floor(
                      (item.date.getTime() - new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    dias
                  </Badge>
                </div>
                <div className="flex-1 w-full max-sm:flex-col max-sm:gap-4 flex justify-between">
                  <div className="flex flex-1 w-full gap-4">
                    <Clock className="text-red-600 w-12 h-auto max-sm:hidden" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-sm font-extrabold">
                        Rua 15 de Novembro
                      </h1>
                      <p className="text-sm">
                        Serviço completo com {item.client}.
                      </p>
                      <div className="flex gap-2">
                        {item.services.map((e) => (
                          <Badge key={e} variant="outline">
                            {e}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-md max-sm:shadow-lg">
                    {item.value}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="bg-accent rounded-2xl max-sm:p-4 p-12">
          <div className="mb-4 flex max-sm:flex-col max-sm: gap-4 justify-between">
            <h1 className="text-lg font-extrabold">Lista de serviços</h1>
            <div className="flex gap-2 max-sm:overflow-y-auto">
              <Button
                variant={selected == "all" ? "purple" : "outline"}
                className="rounded-full"
                onClick={() => setSelected("all")}
              >
                Todos
              </Button>
              <Button
                variant={selected == "pending" ? "purple" : "outline"}
                className="rounded-full"
                onClick={() => setSelected("pending")}
              >
                Pendentes
              </Button>
              <Button
                variant={selected == "finished" ? "purple" : "outline"}
                className="rounded-full"
                onClick={() => setSelected("finished")}
              >
                Concluídos
              </Button>
              <Button
                variant={selected == "cancelled" ? "purple" : "outline"}
                className="rounded-full"
                onClick={() => setSelected("cancelled")}
              >
                Cancelados
              </Button>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col gap-4">
            {services.map((item) => (
              <Card
                key={item.client + 10}
                className="flex-1 relative flex gap-4 items-center justify-between bg-card border-1 rounded-lg p-4"
              >
                <div className="absolute -top-3 flex gap-4 items-center">
                  <Badge variant="outline" className="bg-accent">
                    {" "}
                    {Math.floor(
                      (item.date.getTime() - new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    dias
                  </Badge>
                  {(() => {
                    switch (item.status) {
                      case "pendente":
                        return <Badge className="bg-amber-600">pendente</Badge>;
                      case "concluído":
                        return (
                          <Badge className="bg-emerald-600">concluído</Badge>
                        );
                      case "cancelado":
                        return <Badge className="bg-red-600">cancelado</Badge>;
                      default:
                        return null;
                    }
                  })()}
                </div>
                <div className="flex-1 w-full max-sm:flex-col max-sm:gap-4 flex justify-between">
                  <div className="flex flex-1 w-full gap-4">
                    <Clock className="text-neutral-700 w-12 h-auto max-sm:hidden" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-sm font-extrabold">
                        Rua 15 de Novembro
                      </h1>
                      <p className="text-sm">
                        Serviço completo com {item.client}.
                      </p>
                      <div className="flex gap-2">
                        {item.services.map((e) => (
                          <Badge key={e} variant="outline">
                            {e}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-md max-sm:shadow-lg">
                    {item.value}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
