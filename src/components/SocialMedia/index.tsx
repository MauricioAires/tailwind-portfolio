import {
  CodepenIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

export function SocialMedia() {
  return (
    <>
      <li className="flex items-center">
        <a
          target="_blank"
          href="https://github.com/MauricioAires"
          className=" px-6 py-4 transition-all duration-300  hover:-translate-y-1 hover:text-airs-green"
        >
          <GithubIcon className="h-6 w-6" />
        </a>
      </li>
      <li className="flex items-center">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mauricioairs/"
          className=" px-6 py-4 transition-all duration-300  hover:-translate-y-1 hover:text-airs-green"
        >
          <LinkedinIcon className="h-6 w-6" />
        </a>
      </li>
      <li className="flex items-center">
        <a
          target="_blank"
          href="https://codepen.io/iammauricio"
          className=" px-6 py-4 transition-all duration-300  hover:-translate-y-1 hover:text-airs-green"
        >
          <CodepenIcon className="h-6 w-6" />
        </a>
      </li>
      <li className="flex items-center">
        <a
          target="_blank"
          href="https://twitter.com/MauricioAirs"
          className=" px-6 py-4 transition-all duration-300  hover:-translate-y-1 hover:text-airs-green"
        >
          <TwitterIcon className="h-6 w-6" />
        </a>
      </li>
    </>
  )
}
