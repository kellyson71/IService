import { CheckCircle, Clock, Inbox, Search, User } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between top-0 bg-background w-full px-8 py-4 border-1 border-accent gap-2">
      <h1>
        <a href="/home">iServices</a>
      </h1>
      <div className="w-full relative mx-2 max-sm:hidden">
        <div className="absolute h-full flex items-center justify-center pl-2">
          <Search className="opacity-50" />
        </div>
        <Input
          className="rounded-full pl-10"
          placeholder="Buscar prestadora..."
        />
      </div>
      <Popover>
        <PopoverTrigger>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full max-sm:-mr-12"
          >
            <Inbox />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-100 mr-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-start">
              <Clock className="text-amber-600 w-8 h-auto" />
              <div>
                <h1 className="text-sm font-extrabold">
                  João Silva quer te contratar
                </h1>
                <p className="text-sm">
                  Serviço de limpeza completa para dia 21/07/2025.{" "}
                  <span className="text-indigo-600 border-b-2 border-indigo-600 cursor-pointer hover:text-indigo-800 hover:border-indigo-800">
                    Ver mais.
                  </span>
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex gap-4 items-center justify-start">
              <CheckCircle className="text-emerald-600" />
              <div>
                <h1 className="text-sm font-extrabold">Faxina completa</h1>
                <p className="text-sm">Com Maria Silva em 20/07/2025</p>
              </div>
            </div>
            <Separator />
            <a
              href="/inbox"
              className="text-sm text-center text-indigo-600 hover:scale-105 hover:text-indigo-800 hover:cursor-pointer"
            >
              Exibir tudo
            </a>
          </div>
        </PopoverContent>
      </Popover>
      <a href="/provider/profile">
        <Button className="hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          <User />
          Perfil
        </Button>
      </a>
    </header>
  );
}
