/* eslint-disable @next/next/no-img-element */
import { Experiences } from '@/components/Experiences'
import { FeaturedProject } from '@/components/FeaturedProject'
import { Sidebar } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { SessionAbout } from '@/components/SessionAbout'
import { SessionContact } from '@/components/SessionContact'
import { SessionExperiences } from '@/components/SessionExperiences'
import { SessionHero } from '@/components/SessionHero'
import { SessionProjects } from '@/components/SessionProjects'
import { SocialMedia } from '@/components/SocialMedia'

export default function Home() {
  return (
    <>
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
        <SessionHero />
        <SessionAbout />
        <SessionExperiences />
        <SessionProjects />
        <SessionContact />
        <footer className="mt-40 flex  flex-col items-center justify-center px-10 py-10  pt-24 md:px-24">
          <ul className="flex md:hidden">
            <SocialMedia />
          </ul>

          <span className="font-fira-code text-sm  hover:text-airs-green">
            Designed & Built by Mauricio Aires
          </span>
        </footer>
      </div>
    </>
  )
}
