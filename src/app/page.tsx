/* eslint-disable @next/next/no-img-element */
import { Experiences } from '@/components/Experiences'
import { FeaturedProject } from '@/components/FeaturedProject'
import { Sidebar } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { SocialMedia } from '@/components/SocialMedia'
import { MouseIcon, SparkleIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 hidden h-20 w-full items-center justify-between overflow-hidden bg-airs-navy px-10 md:flex">
        <span>
          <a href="#hero">
            <img className="w-28" src="/ares.png" alt="Logo Ares" />
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

      <Sidebar />

      <div
        aria-orientation="vertical"
        className="fixed bottom-0 left-0 z-20  hidden w-min items-center px-2  md:flex"
      >
        <ul className="flex flex-col items-center bg-airs-navy after:mt-8 after:h-24 after:w-px after:bg-airs-light-slate">
          <SocialMedia />
        </ul>
      </div>
      <div
        aria-orientation="vertical"
        className="fixed bottom-0 right-0 z-20  hidden w-min items-center px-2 md:flex"
      >
        <ul className="flex flex-col items-center bg-airs-navy after:mt-8 after:h-24 after:w-px after:bg-airs-light-slate">
          <li className="flex items-center">
            <a
              style={{
                writingMode: 'vertical-rl',
              }}
              target="_blank"
              href="mailto:mauricioaires015@gmail.com"
              className="px-6 py-4 text-sm tracking-widest transition-all  duration-300 hover:-translate-y-2 hover:text-airs-green"
            >
              mauricioaires015@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="flex max-w-[1600px] flex-col items-center">
        <section id="hero" className="flex flex-col px-10 pt-24 md:px-24">
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

        <section id="sobre" className="flex flex-col px-10 pt-24 md:px-24">
          <h2 className="mb-10 text-3xl font-bold text-airs-lightest-slate">
            <span className="mr-1 text-airs-green">01.</span> Sobre
          </h2>

          <div className="flex flex-col items-center gap-20  lg:flex-row lg:items-start">
            <div className="flex flex-col gap-4">
              <p className="text-lg">
                Olá, meu nome é Maurício Aires, um desenvolvedor Frontend
                experiente com mais de 4 anos de experiência na indústria. Tenho
                um forte conhecimento de tecnologias modernas, como React,
                Node.js, NextJS e SQL.
              </p>

              <p className="text-lg ">
                Sou apaixonado por desenvolvimento de software e sempre busco
                novas oportunidades para aprender e crescer. Tenho um forte
                senso crítico e sou capaz de identificar e resolver problemas de
                forma eficaz. Sou também um comunicador eficaz, tanto oral
                quanto escrito.
              </p>

              <p className="text-lg ">
                Atualmente, trabalho como desenvolvedor Fullstack pleno na DBC
                Company, onde sou responsável pela migração de uma base de dados
                NoSQL MongoDB para uma base relacional PostgreSQL em um sistema
                bancário.
              </p>

              <p className="text-lg ">
                Em minha carreira, já tive a oportunidade de trabalhar em
                projetos de grande porte para empresas como a Brisanet
                Telecomunicações e a EVOCORP. Tenho um portfólio diversificado
                de projetos, incluindo SPAs, sistemas de backend, sistemas de
                notificação em tempo real e plataformas de comércio eletrônico.
              </p>
              <p className="text-lg ">
                Estou sempre em busca de novas oportunidades para trabalhar em
                projetos desafiadores e contribuir para o desenvolvimento de
                software de alta qualidade.
              </p>

              <ul
                className={twMerge([
                  'grid gap-4 font-fira-code text-base',
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

        <section id="experiencias" className="mt-40 px-10  pt-24 md:px-24">
          <h2 className="mb-10 text-3xl font-bold text-airs-lightest-slate">
            <span className="mr-1 text-airs-green">02.</span> Experiencias
          </h2>

          <Experiences />
        </section>

        <section
          id="projetos"
          className="flex w-full flex-col items-start px-10 pt-24 md:px-24"
        >
          <h2 className="mb-10 text-3xl font-bold text-airs-lightest-slate">
            <span className="mr-1 text-airs-green">03.</span> Projetos
          </h2>

          <div className="flex flex-col gap-10">
            <FeaturedProject
              title="Upload Airs"
              coverUrl="https://www.rocketseat.com.br/nlw/_next/image?url=%2Fnlw%2F_next%2Fstatic%2Fmedia%2Fproject.45bfb56c.png&w=1920&q=100"
              description="O projeto upload.airs é uma ferramenta que utiliza o ChatGPT para
          gerar sugestões de títulos e descrições de vídeo. A temperatura é um
          parâmetro que controla o nível de criatividade da IA. Quanto maior a
          temperatura, mais criativas serão as sugestões, mas também menos
          precisas."
              deployUrl="https://upload-airs-web.vercel.app/"
              repositoryUrl="https://github.com/MauricioAires/upload-airs-web"
              usedTechnologies={[
                'React.js',
                'Typescript',
                'Vite',
                'Axios',
                'Tailwindcss',
              ]}
              direction="left"
            />
            <FeaturedProject
              coverUrl="https://camo.githubusercontent.com/65cc1476931e025e26ba0cfebb76df15b8b81bec9a3489f9ce66434ec9c8bcba/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f76696c6d6172626174697374612f696d6167652f75706c6f61642f76313637313533393833372f446576656c6f706d656e742f49676e6974652f636f666665652d64656c69766572795f636477776f362e706e67"
              title="Coffee Delivery Airs"
              description="Que tal receber no aconchego da sua casa um café quentinho e com aquele sabor direto da fazenda?

            Coffee Delivery é uma aplicação de encomendas/delivery de cafés, desenvolvida do zero utilizando ReactJS utilizando Vite e TypeScript."
              deployUrl="https://coffee-delivery-airs.vercel.app/"
              repositoryUrl="https://github.com/MauricioAires/coffee-delivery-airs"
              usedTechnologies={[
                'React Router',
                'Typescript',
                'Styled Components',
                'React Hook Form',
                'Google Place Autocomplete',
              ]}
              direction="right"
            />
            <FeaturedProject
              coverUrl="https://images.prismic.io/victorsantss-portfolio/28bdd6e5-e946-412a-84a1-aea63f0bbbbe_ignews.png?auto=compress,format"
              title="Ignews"
              description="O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura. O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo de todo o blog. "
              deployUrl="https://ignews-airs.vercel.app/"
              repositoryUrl="https://github.com/MauricioAires/ignews"
              usedTechnologies={[
                'Next.js',
                'Stripe',
                'Prismic CMS',
                'Fauna DB',
              ]}
              direction="left"
            />
          </div>
        </section>

        <Projects />

        <section
          id="contato"
          className="mt-40 flex min-h-[80vh] flex-col items-center justify-center px-10  pt-24 md:px-24"
        >
          <h2 className="mb-10 font-fira-code text-sm font-bold text-airs-lightest-slate">
            <span className="mr-1 text-airs-green">04. Contatos</span>
          </h2>
          <h2 className="mb-10 text-3xl font-bold text-airs-lightest-slate">
            Entre em contato
          </h2>

          <p className="max-w-3xl text-center">
            Embora atualmente não esteja em busca de novas oportunidades, minha
            caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou
            apenas quiser dizer oi, farei o possível para entrar em contato com
            você!
          </p>

          <a
            className={twMerge([
              'mt-10  cursor-pointer rounded-md border-2 border-airs-green px-6 py-5 font-fira-code text-airs-green drop-shadow-lg transition-transform  duration-300',
              'hover:-translate-x-2 hover:-translate-y-2 hover:shadow-md hover:shadow-airs-green ',
            ])}
            type="button"
            href="mailto:mauricioaires015@gmail.com"
          >
            Diga Olá
          </a>
        </section>

        <footer className="mt-40 flex  flex-col items-center justify-center px-10  pt-24 md:px-24">
          <ul className="flex md:hidden">
            <SocialMedia />
          </ul>

          <span className="font-fira-code hover:text-airs-green">
            Designed & Built by Mauricio Aires
          </span>
        </footer>
      </div>
    </>
  )
}
