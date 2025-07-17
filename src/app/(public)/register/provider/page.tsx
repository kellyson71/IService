'use client'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'

export default function RegisterProvider() {
  return (
    <div className='w-screen h-screen bg-gradient-to-br from-[#eff6ff] to-[#f0fdf4] flex items-center justify-center'>
      <div className='p-8 bg-background border-1 border-accent rounded-2xl shadow-2xl'>
        <form action="" className='flex flex-col gap-5 overflow-y-scroll max-h-[70vh]'>
          <p className='font-extrabold text-center text-2xl leading-12 mb-4'><span className='mr-2 py-2 px-3 h-4 w-4 text-background rounded-md bg-primary'>is</span>iservices</p>
          <h1 className='text-2xl font-bold text-center leading-0'>Criar sua conta</h1>
          <p className='text-foreground/70 text-center text-sm leading-10'>Preencha os seus dados abaixo para criar sua conta.</p>
          <div className='flex flex-col gap-2 relative'>
            <Label>Nome completo</Label>
            <Input placeholder='Seu nome' type='name' className='radius-md h-10'/>
          </div>
          <div className='flex flex-col gap-2 relative'>
            <Label>E-mail</Label>
            <Input placeholder='seu@email.com' type='email' className='radius-md h-10'/>
          </div>
          <div className='flex flex-row gap-4 justify-between'>
            <div className='flex flex-col gap-2 relative'>
              <Label>Senha</Label>
              <Input className='radius-md h-10' type='password'/>
            </div>
            <div className='flex flex-col gap-2 relative'>
              <Label>Confirmar senha</Label>
              <Input className='radius-md h-10' type='password'/>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <Avatar className='h-24 w-auto'>
              <AvatarImage className='h-full' src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className='h-full'>US</AvatarFallback>
            </Avatar>
            <div className='flex flex-col items-start justify-center'>
              <h1>Foto de Perfil</h1>
              <p className='text-foreground/70'>Adicione uma foto para seu perfil de prestador.</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 relative'>
            <Label>Sobre você (bio)</Label>
            <Textarea className='radius-md h-10'/>
          </div>
          <div className='flex flex-row gap-4 justify-between'>
            <div className='flex w-full flex-1 flex-col gap-2 relative'>
              <Label>Tipo de Serviço Principal</Label>
              <Select>
                <SelectTrigger className="radius-md w-full flex-1">
                  <SelectValue placeholder="Selecione um tipo." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Serviços</SelectLabel>
                    <SelectItem value="heavy">Limpeza pesada</SelectItem>
                    <SelectItem value="fast">Limpeza rápida</SelectItem>
                    <SelectItem value="monthly">Serviço mensal</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col gap-2 relative'>
              <Label>Preço</Label>
              <Input className='radius-md h-10 relative' placeholder='R$ 120,00' type='text' />
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-between'>
            <div className='flex flex-col gap-2 relative'>
              <Label>Cidade</Label>
              <Input className='radius-md h-10' placeholder='Pau dos Ferros' type='text'/>
            </div>
            <div className='flex flex-col gap-2 relative'>
              <Label>Bairro</Label>
              <Input className='radius-md h-10' placeholder='Nações Unidas' type='text'/>
            </div>
          </div>
          <Button className='flex-1 font-bold'>Cadastrar como prestador</Button>
          <p className='text-center text-sm'>Já tem uma conta? <span className='text-primary'><a href='/login' className='hover:text-blue-800 hover:cursor-pointer hover:underline'>Faça login</a></span></p>
        </form>
      </div>
    </div>
  )
}
