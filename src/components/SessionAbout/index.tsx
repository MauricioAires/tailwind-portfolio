import { SparkleIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

/* eslint-disable @next/next/no-img-element */
export function SessionAbout() {
  return (
    <section id="sobre" className="flex flex-col px-8 pt-24 md:px-24">
      <h2 className="mb-10 text-3xl font-bold text-airs-lightest-slate">
        <span className="mr-1 text-airs-green">01.</span> Sobre
      </h2>

      <div className="flex flex-col items-center gap-20  lg:flex-row lg:items-start">
        <div className="flex  flex-col gap-4 text-sm leading-relaxed  md:text-lg">
          <p>
            Olá, meu nome é Maurício Aires, um desenvolvedor Frontend experiente
            com mais de 4 anos de experiência na indústria. Tenho um forte
            conhecimento de tecnologias modernas, como React, Node.js, NextJS e
            SQL.
          </p>

          <p>
            Sou apaixonado por desenvolvimento de software e sempre busco novas
            oportunidades para aprender e crescer. Tenho um forte senso crítico
            e sou capaz de identificar e resolver problemas de forma eficaz. Sou
            também um comunicador eficaz, tanto oral quanto escrito.
          </p>

          <p>
            Atualmente, trabalho como desenvolvedor Fullstack pleno na DBC
            Company, onde sou responsável pela migração de uma base de dados
            NoSQL MongoDB para uma base relacional PostgreSQL em um sistema
            bancário.
          </p>

          <p>
            Em minha carreira, já tive a oportunidade de trabalhar em projetos
            de grande porte para empresas como a Brisanet Telecomunicações e a
            EVOCORP. Tenho um portfólio diversificado de projetos, incluindo
            SPAs, sistemas de backend, sistemas de notificação em tempo real e
            plataformas de comércio eletrônico.
          </p>
          <p>
            Estou sempre em busca de novas oportunidades para trabalhar em
            projetos desafiadores e contribuir para o desenvolvimento de
            software de alta qualidade.
          </p>

          <ul
            aria-label="Tecnologias com melhor proficiência"
            className={twMerge([
              'grid gap-4 font-fira-code text-xs md:text-base',
              'grid-cols-highlight-skills',
            ])}
          >
            <li className="flex items-center gap-1">
              <SparkleIcon className="h-4 w-4 text-airs-green" />
              React.js
            </li>
            <li className="flex items-center gap-1">
              <SparkleIcon className="h-4 w-4 text-airs-green" />
              Node.js
            </li>
            <li className="flex items-center gap-1">
              <SparkleIcon className="h-4 w-4 text-airs-green" />
              Typescript
            </li>
            <li className="flex items-center gap-1">
              <SparkleIcon className="h-4 w-4 text-airs-green" />
              Next.js
            </li>
            <li className="flex items-center gap-1">
              <SparkleIcon className="h-4 w-4 text-airs-green" />
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-1">
              <SparkleIcon className="h-4 w-4 text-airs-green" />
              GraphQL
            </li>
          </ul>
        </div>
        <div className="group relative flex min-h-[22vh] min-w-[22vw] max-w-[80vw] cursor-pointer items-center justify-center">
          <div className="z-10 h-full w-full overflow-hidden rounded-md shadow-md   transition-all duration-300 group-hover:-ml-3 group-hover:-mt-3">
            <img
              src="https://github.com/MauricioAires.png"
              alt="Mauricio Aires"
              className="flex-1 object-cover"
            />
          </div>
          <div
            className="absolute -bottom-3 -right-3 h-full w-full border-spacing-2 rounded-md border-2 border-airs-green text-airs-green  transition-all duration-300 group-hover:-bottom-5 group-hover:-right-5"
            about="border"
          />
        </div>
      </div>
    </section>
  )
}
