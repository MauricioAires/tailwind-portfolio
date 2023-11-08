/* eslint-disable @next/next/no-img-element */
'use client'

import { Menu, X } from 'lucide-react'
import * as PrimitiveCollapsible from '@radix-ui/react-collapsible'
import { createContext, useContext, useEffect, useState } from 'react'

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(
        '\n%c \ud83d\udc40 \n%c Oi! Al\u00e9m de dar uma olhadinha no meu console, que tal dar uma passadinha pra ver meu Linkedin e Github? \n%c Linkedin: https://www.linkedin.com/in/mauricioairs/ \n%c Github:https://github.com/MauricioAires \n',
        'font-family: sans-serif;font-weight: bold; font-size: 50px; text-shadow: 3px 3px 0 red; text-shadow: 3px 3px 0 #f28000, 6px 6px 0 #8ce563',
        'font-size: 16px;color: #f28000;',
        'font-size: 14px;color: #00c8ff;',
        'font-size: 14px;color: #ac63ff;',
      )
    }
  }, [])

  if (typeof window !== 'undefined') {
    document.addEventListener('keydown', function (event) {
      switch (event.key) {
        case '1':
          this.location.href = '/#sobre'
          return
        case '2':
          this.location.href = '/#experiencias'
          return
        case '3':
          this.location.href = '/#projetos'
          return
        case '4':
          this.location.href = '/#contato'
      }
    })
  }

  return (
    <>
      <header className="sticky top-0 z-20 hidden h-20 w-full items-center justify-between overflow-hidden bg-airs-navy px-10 md:flex">
        <span>
          <a href="#hero">
            <img className="w-28" src="/logo-ares.svg" alt="Logo Ares" />
          </a>
        </span>

        <nav className="flex items-center justify-between gap-6 font-fira-code text-xs">
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
      </header>

      <SidebarContext.Provider value={{ closeMenu }}>
        <PrimitiveCollapsible.Root
          open={state}
          className="group fixed top-0 z-30 h-[100dvh] w-full items-center justify-center data-[state=closed]:h-auto  md:hidden"
        >
          <div className="flex h-20 w-full items-center justify-between px-10 group-data-[state=open]:bg-airs-navy group-data-[state=closed]:backdrop-blur-lg">
            <span>
              <a href="#hero">
                {/* <img className="w-28" src="/ares.png" alt="Logo Ares" /> */}
                <img className="w-28" src="/logo-ares.svg" alt="Logo Ares" />
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
    </>
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
