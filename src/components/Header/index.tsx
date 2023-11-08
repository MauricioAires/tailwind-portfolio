/* eslint-disable @next/next/no-img-element */
'use client'

import { Menu, X } from 'lucide-react'
import * as PrimitiveCollapsible from '@radix-ui/react-collapsible'
import { createContext, useContext, useState } from 'react'

interface SidebarContextData {
  closeMenu: () => void
}

const SidebarContext = createContext({} as SidebarContextData)

const useSidebarContext = () => useContext(SidebarContext)

export function Sidebar() {
  const [state, setState] = useState(false)

  const closeMenu = () => {
    setState(false)
  }

  const openMenu = () => {
    setState(true)
  }
  return (
    <SidebarContext.Provider value={{ closeMenu }}>
      <PrimitiveCollapsible.Root
        open={state}
        className="group fixed top-0 z-30 h-[100dvh] w-full items-center justify-center  data-[state=closed]:h-auto"
      >
        <div className="flex h-20 w-full items-center justify-between px-10 group-data-[state=open]:bg-airs-navy group-data-[state=closed]:backdrop-blur-lg">
          <span>
            <a href="#hero">
              <img className="w-28" src="/ares.png" alt="Logo Ares" />
            </a>
          </span>

          <PrimitiveCollapsible.Trigger asChild>
            <button type="button" onClick={state ? closeMenu : openMenu}>
              <Menu className="h-6 w-6 group-data-[state=open]:hidden" />
              <X className="hidden h-6 w-6 group-data-[state=open]:block" />
            </button>
          </PrimitiveCollapsible.Trigger>
        </div>

        <PrimitiveCollapsible.Content
          forceMount
          className="relative flex h-[100dvh] flex-1 items-start justify-end  gap-6 overflow-y-auto  data-[state=closed]:hidden"
        >
          <div
            id="background"
            className="absolute inset-0  h-full w-full  backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="z-10 flex h-full w-2/3 items-center  justify-center bg-airs-navy">
            <nav className="flex  flex-col items-center justify-between gap-6  font-fira-code  text-xs">
              <MenuItem index="01" href="sobre" title="Sobre" />
              <MenuItem index="02" href="experiencias" title="Experiencias" />
              <MenuItem index="03" href="projetos" title="Projetos" />
              <MenuItem index="04" href="contato" title="Contato" />
            </nav>
          </div>
        </PrimitiveCollapsible.Content>
      </PrimitiveCollapsible.Root>
    </SidebarContext.Provider>
  )
}

interface MenuItemProps {
  index: string
  href: string
  title: string
}
export function MenuItem({ index, href, title }: MenuItemProps) {
  const { closeMenu } = useSidebarContext()
  return (
    <a
      href={`#${href}`}
      className="flex w-full flex-col items-center justify-center gap-2 text-lg text-airs-lightest-slate"
      onClick={closeMenu}
    >
      <span className="mr-1 text-airs-green">{index}.</span>
      {title}
    </a>
  )
}

// Adicionar um contexto para fechar o menu quando seleiconar um item
// e quando clicar no backdorp
