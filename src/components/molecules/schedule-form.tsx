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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export default function ScheduleForm() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 relative">
        <Label className="px-1">Descrição do serviço</Label>
        <Textarea
          placeholder="Explique o que espera do serviço..."
          className="radius-md h-10"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="date-picker" className="px-1">
            Data
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="flex-1 w-full">
              <Button
                variant="outline"
                id="date-picker"
                className="flex-1 w-full justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Escolha..."}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="time-picker" className="px-1">
            Horário
          </Label>
          <Input
            type="time"
            id="time-picker"
            step="1"
            defaultValue="10:30:00"
            className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          />
        </div>
      </div>

      <ToggleGroup className="flex-col gap-2 w-full flex-1" type="multiple">
        <ToggleGroupItem
          className="flex justify-between text-sm p-2 border-1 rounded-sm w-full flex-1"
          value="a"
        >
          Faxina completa
          <Badge
            variant="outline"
            className="bg-background text-md text-indigo-600"
          >
            R$ 90,00
          </Badge>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex justify-between text-sm p-2 border-1 rounded-sm w-full flex-1"
          value="b"
        >
          Organização
          <Badge variant="outline" className="bg-background text-md">
            R$ 40,00
          </Badge>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex justify-between text-sm p-2 border-1 rounded-sm w-full flex-1"
          value="c"
        >
          Passar roupa
          <Badge variant="outline" className="bg-background text-md">
            R$ 50,00
          </Badge>
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator className="my-4" />
      <Button className="flex justify-between flex-1 text-center hover:scale-105 hover:from-indigo-600 hover:cursor-pointer hover:via-purple-600 hover:to-pink-600 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
        Agendar
        <span>R$ 500,00</span>
      </Button>
    </form>
  );
}
