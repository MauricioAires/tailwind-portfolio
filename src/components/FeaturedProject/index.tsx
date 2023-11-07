/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'

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
  direction,
  coverUrl,
}: FeaturedProjectProps) {
  return (
    <div
      className={`relative flex   ${
        direction === 'right' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className="hidden  w-[40vw] lg:flex">
        <a href={deployUrl} target="_blank">
          <img
            className="w-[40vw] rounded-sm transition-all hover:saturate-150"
            src={coverUrl}
            alt=""
          />
        </a>
      </div>
      <div
        className={`lg:absolute  ${
          direction === 'right'
            ? 'left-0  text-left lg:left-auto lg:right-0 lg:text-right'
            : 'left-0 text-left'
        }  max-w-[100%] flex-1 lg:w-[60vw] `}
      >
        <p className="font-fira-code my-3 text-sm text-airs-green">
          Projeto em destaque
        </p>
        <h3>
          <a
            className="text-3xl font-bold text-airs-lightest-slate "
            href={deployUrl}
          >
            {title}
          </a>
        </h3>
        <div className="my-8 overflow-hidden rounded-md bg-airs-light-navy p-8">
          <p className="leading-7 text-airs-light-slate">{description}</p>
        </div>

        <ul
          className={`
        flex text-airs-light-slate  ${
          direction === 'right'
            ? 'justify-start lg:justify-end'
            : 'justify-start'
        }  gap-5`}
        >
          {usedTechnologies.map((technology) => (
            <li
              className="max-w-[20%] truncate whitespace-nowrap"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>

        <div
          className={`mt-3 flex ${
            direction === 'right' ? 'justify-end' : 'justify-start'
          }  `}
        >
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
    </div>
  )
}
