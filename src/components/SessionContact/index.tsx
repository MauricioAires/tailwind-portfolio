import { twMerge } from 'tailwind-merge'

export function SessionContact() {
  return (
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
  )
}
