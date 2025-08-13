"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <form className="flex flex-col gap-4 items-center overflow-hidden">
      <div className="flex flex-col gap-3 relative w-full">
        <Label className="px-1">Descrição do serviço</Label>
        <Textarea
          placeholder="Explique o que espera do serviço..."
          className="radius-md h-10 w-"
        />
      </div>
      <div className="flex gap-1 w-full">
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
      <a href="/checkout">
        <Button
          variant="purple"
          type="button"
          className="flex justify-between flex-1 text-center hover:scale-105"
        >
          Agendar
          <span>R$ 500,00</span>
        </Button>
      </a>
    </form>
  );
}
