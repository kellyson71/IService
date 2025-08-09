import { Inbox, Search, User } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
      <Button size="icon" variant="outline" className="rounded-full">
        <Inbox />
      </Button>
      <Button className="hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
        <User />
        Perfil
      </Button>
    </header>
  );
}
