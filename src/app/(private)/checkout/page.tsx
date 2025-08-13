"use client";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCardIcon, Smartphone } from "lucide-react";
import React from "react";

export default function Checkout() {
  return (
    <div className="w-screen h-screen bg-accent flex items-center justify-center">
      <header className="fixed top-0 w-screen bg-background flex gap-4 p-4 font-semibold text-foreground/90 border-b-1 text-md items-center">
        <a href="/home">
          <ArrowLeft className="hover:text-neutral-400" />
        </a>
        Pagamento
      </header>
      <main className="p-8 max-sm:w-full max-lg:w-3/5 w-[30vw] mt-[6vh] bg-background border-1 border-accent rounded-2xl shadow-2xl">
        <div className="flex flex-col max-sm: gap-4 justify-between">
          <h1 className="text-lg font-extrabold">Resumo do serviço</h1>
          <div className="flex justify-between w-full">
            <p>Diarista:</p>
            <p className="text-indigo-600">Maria Silva</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Data:</p>
            <p className="text-indigo-600">24/07/2025</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Horário:</p>
            <p className="text-indigo-600">08:00</p>
          </div>
          <Separator />
          <h2>Serviços</h2>
          <div className="flex justify-between w-full">
            <p>Faxina completa:</p>
            <p className="text-indigo-600">R$ 80,00</p>
          </div>
          <Separator />
          <div className="flex justify-between w-full bg-accent p-4 rounded-md">
            <h3>Total:</h3>
            <p className="text-indigo-600 font-extrabold">R$ 80,00</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col max-sm: gap-4 justify-between">
          <h1 className="text-lg font-extrabold">Forma de pagamento</h1>
          <div className="flex gap-4 w-full items-center border-1 bg-accent p-4 rounded-md hover:bg-neutral-200 cursor-pointer hover:scale-102">
            <Smartphone />
            <div className="flex flex-col gap-0">
              <h3 className="font-extrabold">PIX</h3>
              <p className="text-indigo-600 ">Pagamento instantâneo</p>
            </div>
          </div>
          <div className="flex gap-4 w-full items-center border-1 bg-accent p-4 rounded-md hover:bg-neutral-200 cursor-pointer hover:scale-102">
            <CreditCardIcon />
            <div className="flex flex-col gap-0">
              <h3 className="font-extrabold">Cartão de Crédito</h3>
              <p className="text-indigo-600 ">Visa, Mastercard, Elo</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
