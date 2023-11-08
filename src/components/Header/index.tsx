/* eslint-disable @next/next/no-img-element */
'use client'

import { Menu } from 'lucide-react'

import * as RCollapsible from '@radix-ui/react-collapsible'

export function Sidebar() {
  return (
    <RCollapsible.Root className="fixed top-0 z-30 h-[100dvh] w-full items-center justify-center bg-airs-navy px-10 px-10   py-4 data-[state=closed]:h-auto">
      <div className="flex w-full items-center justify-between">
        <span>
          <a href="#hero">
            <img className="w-28" src="/ares.png" alt="Logo Ares" />
          </a>
        </span>

        <RCollapsible.Trigger className="md:hidden" asChild>
          <button>
            <Menu className="h-6 w-6" />
          </button>
        </RCollapsible.Trigger>
      </div>

      <RCollapsible.Content
        forceMount
        className=" flex h-[100%] flex-1  items-start gap-6 overflow-y-auto  data-[state=closed]:hidden"
      >
        <nav className="z-20 flex w-full flex-col items-center justify-between gap-6 font-fira-code  text-xs">
          <a href="#sobre" className="hover:text-airs-green">
            <span className="mr-1 text-airs-green">01.</span>
            Sobre
          </a>
          <a href="#experiencias">
            <span className="mr-1 text-airs-green">02.</span>
            Experiencias
          </a>
          <a href="#projetos">
            <span className="mr-1 text-airs-green">03.</span>
            Projetos
          </a>
          <a href="#contato">
            <span className="mr-1 text-airs-green">04.</span>
            Contato
          </a>
        </nav>
      </RCollapsible.Content>
    </RCollapsible.Root>
  )
}
