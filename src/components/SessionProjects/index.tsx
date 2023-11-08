import { FeaturedProject } from '../FeaturedProject'
import { Projects } from '../Projects'

export function SessionProjects() {
  return (
    <>
      <section
        id="projetos"
        className="flex w-full flex-col items-start px-8 pt-24 md:px-24"
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
            usedTechnologies={['Next.js', 'Stripe', 'Prismic CMS', 'Fauna DB']}
            direction="left"
          />
        </div>
      </section>

      <Projects />
    </>
  )
}
