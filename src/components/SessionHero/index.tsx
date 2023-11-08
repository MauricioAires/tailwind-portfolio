import { MouseIcon } from 'lucide-react'

export function SessionHero() {
  return (
    <section id="hero" className="flex flex-col px-8 pt-24 md:px-24">
      <h1 className="mb-7 font-fira-code text-base text-airs-green  md:text-lg">
        Oi, meu nome é
      </h1>
      <h2 className="mb-10  text-4xl font-bold text-airs-lightest-slate lg:text-7xl">
        Mauricio Aires.
      </h2>
      <h3 className="text-2xl  font-bold leading-tight text-airs-slate  md:text-6xl">
        Construindo interfaces que deixam uma primeira impressão memorável.
      </h3>
      <p className="mt-10  leading-snug  md:text-xl">
        Sou um engenheiro de software frontend (e ocasionalmente fullstack)
        especializado em construir experiências digitais excepcionais.
        Atualmente, estou focado na construção de produtos na
        <a
          href="https://www.dbccompany.com.br/en/homepage/"
          target="_blank"
          className="ml-2 text-airs-green"
        >
          DBC Company
        </a>
        .
      </p>

      <button className="mt-[20vh] animate-slideDownAndFade self-center">
        <a href="#sobre">
          <MouseIcon className="h-6 w-6 text-airs-green" />
        </a>
      </button>
    </section>
  )
}
