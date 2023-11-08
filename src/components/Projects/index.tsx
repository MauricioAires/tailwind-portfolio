'use client'

import { ExternalLinkIcon, Folder, GithubIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Project {
  id: string
  name: string
  description: string
  topics: string[]
  topics_count: number
  html_url: string
  homepage: string
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  useEffect(() => {
    fetch(
      'https://api.github.com/users/MauricioAires/repos?per_page=9&sort=author-date-asc',
    )
      .then((response) => response.json())
      .then((data: Project[]) => {
        setProjects(
          data.map((project) => {
            const d = project.description?.split(' ').splice(0, 20)

            return {
              ...project,
              topics_count:
                project.topics.length > 3 ? project.topics.length - 3 : 0,
              topics: project.topics.splice(0, 3),
              name: project.name.replace(/-/g, ' '),
              description: d?.join('  '),
            }
          }),
        )
      })
  }, [])

  return (
    <section className="mt-40 flex flex-col items-center px-8 pt-24 md:px-24">
      <div className="mb-10 flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold text-airs-lightest-slate">
          Outros projetos
        </h2>

        <a
          className="text-sm text-airs-green transition-all hover:underline"
          href="https://github.com/MauricioAires?tab=repositories"
          target="_blank"
        >
          Veja todos os projetos
        </a>
      </div>

      <div className="grid grid-cols-projects gap-5">
        {projects?.map((project) => {
          return (
            <div
              key={project.id}
              className="rounded-sm bg-airs-light-navy p-8 shadow-airs transition-all hover:-translate-y-4"
            >
              <header className="flex flex-col">
                <div className="mb-10 flex w-full justify-between">
                  <Folder
                    strokeWidth={1.2}
                    className="h-10 w-10 font-light text-airs-green"
                  />
                  <div className="flex gap-3">
                    {project.homepage && (
                      <a href={project.homepage} target="_blank">
                        <ExternalLinkIcon className="h-6 w-6 transition-colors hover:text-airs-green" />
                      </a>
                    )}

                    <a href={project.html_url} target="_blank">
                      <GithubIcon className="h-6 w-6 transition-colors hover:text-airs-green" />
                    </a>
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold capitalize text-airs-lightest-slate transition-colors hover:text-airs-green ">
                  <a target="_blank" href={project.html_url}>
                    {project.name}
                  </a>
                </h3>
              </header>

              <div>
                <p>{project.description}</p>
              </div>

              <footer className="mt-10 flex items-center gap-2">
                <ul className="flex gap-2 truncate">
                  {project.topics.map((topic) => (
                    <li
                      className="max-w-3/4 truncate whitespace-nowrap text-xs capitalize text-airs-light-slate"
                      key={topic}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
                {!!project.topics_count && (
                  <span className="truncate whitespace-nowrap text-xs text-airs-light-slate">
                    +{project.topics_count}
                  </span>
                )}
              </footer>
            </div>
          )
        })}
      </div>
    </section>
  )
}
