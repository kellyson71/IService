"use client";
import { Separator } from "@/components/ui/separator";
import { Check, CheckCircle, CircleDollarSign, Clock } from "lucide-react";
import React, { useState } from "react";
import Header from "@/components/molecules/header";
import { Button } from "@/components/ui/button";

export default function Inbox() {
  const [selected, setSelected] = useState<"new" | "old" | "archived">("new");
  const notifications = [
    {
      type: "payment",
      status: "archived",
      title: "Comprovante disponível",
      content:
        "Baixe o recibo do serviço de limpeza realizado por Marcos Vieira.",
    },
    {
      type: "contract",
      status: "new",
      title: "João Silva quer te contratar",
      content: "Limpeza completa para dia 21/07/2025.",
    },
    {
      type: "payment",
      status: "old",
      title: "Pagamento pendente",
      content: "Serviço de limpeza com Maria Souza aguardando confirmação.",
    },
    {
      type: "contract",
      status: "archived",
      title: "Contrato cancelado",
      content: "Serviço de limpeza com Cláudia Ramos cancelado pelo cliente.",
    },
    {
      type: "service",
      status: "new",
      title: "Faxina residencial",
      content: "Com Pedro Santos em 20/07/2025.",
    },
    {
      type: "contract",
      status: "old",
      title: "Proposta expirada",
      content: "Contrato com Marcos Oliveira não foi aceito.",
    },
    {
      type: "service",
      status: "archived",
      title: "Serviço encerrado",
      content: "Limpeza finalizada em 01/06/2025.",
    },
    {
      type: "payment",
      status: "new",
      title: "Seu dinheiro já está na conta!",
      content: "Serviço de limpeza de João Silva concluído.",
    },
    {
      type: "service",
      status: "old",
      title: "Serviço concluído",
      content: "Limpeza de escritório feita por Luiza Lima em 10/07/2025.",
    },
    {
      type: "payment",
      status: "archived",
      title: "Pagamento reembolsado",
      content: "Cancelamento de limpeza com Felipe Souza.",
    },
    {
      type: "contract",
      status: "new",
      title: "Carlos Pereira enviou uma proposta",
      content: "Limpeza pós-obra para 15/08/2025.",
    },
    {
      type: "service",
      status: "new",
      title: "Faxina completa",
      content: "Com Maria Silva em 22/07/2025.",
    },
    {
      type: "payment",
      status: "old",
      title: "Pagamento liberado",
      content: "Serviço de limpeza realizado por Ana Martins.",
    },
    {
      type: "contract",
      status: "archived",
      title: "Histórico de contratos",
      content: "Você arquivou este contrato de limpeza com João Pereira.",
    },
    {
      type: "service",
      status: "old",
      title: "Limpeza de apartamento",
      content: "Realizada com Paulo Henrique em 05/07/2025.",
    },
    {
      type: "payment",
      status: "new",
      title: "Pagamento aprovado",
      content: "Serviço de limpeza realizado por Pedro Santos.",
    },
  ];

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-start">
      <Header />
      <main className="max-sm:p-4 w-full flex-1 flex flex-col gap-4 p-16 px-32 overflow-y-scroll max-h-[90vh]">
        <div className="flex max-sm:flex-col max-sm: gap-4 justify-between">
          <h1 className="text-lg font-extrabold">Caixa de entrada</h1>
          <div className="flex gap-2">
            <Button
              variant={selected == "new" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelected("new")}
            >
              Novas
            </Button>
            <Button
              variant={selected == "old" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelected("old")}
            >
              Não lidas
            </Button>
            <Button
              variant={selected == "archived" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelected("archived")}
            >
              Arquivadas
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          {notifications
            .filter((e) => e.status == selected)
            .map((item) => (
              <div className="flex gap-4 items-center justify-between bg-card border-1 rounded-lg p-8">
                <div className="flex gap-4">
                  {(() => {
                    switch (item.type) {
                      case "contract":
                        return <Clock className="text-amber-600 w-8 h-auto" />;
                      case "service":
                        return (
                          <CheckCircle className="text-emerald-600 w-8 h-auto" />
                        );
                      case "payment":
                        return (
                          <CircleDollarSign className="text-green-600 w-8 h-auto" />
                        );
                      default:
                        return null;
                    }
                  })()}

                  <div>
                    <h1 className="text-sm font-extrabold">{item.title}</h1>
                    <p className="text-sm">{item.content}</p>
                  </div>
                </div>
                <Button variant="outline" size="icon" className="scale-120">
                  <Check />
                </Button>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
