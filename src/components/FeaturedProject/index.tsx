/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export interface FeaturedProjectProps {
  title: string
  description: string
  deployUrl: string
  repositoryUrl: string
  usedTechnologies: string[]
  coverUrl: string
  direction: 'left' | 'right'
}

export function FeaturedProject({
  title,
  description,
  deployUrl,
  repositoryUrl,
  usedTechnologies,
  coverUrl,
}: FeaturedProjectProps) {
  return (
    <div
      className={twMerge([
        'grid  items-start gap-3',
        'lg:items-center',
        'grid-cols-featured-project grid-rows-featured-project',
      ])}
    >
      <div
        className={twMerge([
          'relative z-10  grid p-4 md:p-10',
          'lg:col-span-1-7  lg:p-0',
          'col-span-1-1 row-span-1-1',
        ])}
      >
        <p className="mb-1 font-fira-code text-xs  text-airs-green md:text-sm">
          Projeto em destaque
        </p>
        <h3>
          <a
            className="text-2xl font-bold text-airs-lightest-slate md:text-3xl "
            href={deployUrl}
          >
            {title}
          </a>
        </h3>

        <div className={twMerge(['text-sm'])}>
          <p
            className={twMerge([
              'my-8 rounded-md bg-transparent px-0 py-6 text-airs-light-slate',
              'lg:bg-airs-light-navy lg:p-5',
            ])}
          >
            {description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {usedTechnologies.map((technology) => (
              <li className=" truncate whitespace-nowrap" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <a
            target="_blank"
            className="p-4  transition-colors hover:text-airs-green"
            href={repositoryUrl}
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            className="p-4 pr-0 transition-colors hover:text-airs-green"
            href={deployUrl}
          >
            <ExternalLinkIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'linear-gradient(0.4turn, #64ffda, #64ff8d)',
        }}
        className={twMerge([
          'relative grid h-full w-auto   overflow-hidden rounded-md  bg-airs-green  opacity-20',
          'lg:col-span-6-1  lg:opacity-100',
          'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:rounded-md before:bg-[#0a192f] before:mix-blend-screen',
          'col-span-1-1 row-span-1-1',
        ])}
      >
        <a href={deployUrl} target="_blank">
          <img
            className={twMerge([
              'relative h-full w-full  cursor-pointer object-cover mix-blend-multiply contrast-100 grayscale transition-all ',
              'hover:mix-blend-normal hover:contrast-125 hover:grayscale-0',
            ])}
            src={coverUrl}
            alt=""
          />
        </a>
      </div>
    </div>
  )
}
