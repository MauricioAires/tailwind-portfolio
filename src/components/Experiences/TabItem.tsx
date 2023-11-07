'use client'

import * as RTabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export interface TabItemProps {
  title: string
  isSelected?: boolean
}

export function TabItem({ title, isSelected = false }: TabItemProps) {
  return (
    <RTabs.Trigger
      className={twMerge([
        'max-h-16 w-full  dark:text-airs-lightest-slate dark:hover:bg-airs-light-navy  dark:hover:text-airs-green',
        'group relative flex flex-1 items-center px-5  py-5 text-sm font-medium outline-none ',
        'transition-colors data-[state=active]:text-airs-green dark:data-[state=active]:bg-airs-light-navy  dark:data-[state=active]:text-airs-green',
      ])}
      value={title}
    >
      <span className="font-fira-code whitespace-nowrap rounded group-focus-visible:ring-2  group-focus-visible:ring-violet-400  group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="active-tab"
          className="absolute  -left-px top-0 h-full w-0.5  dark:bg-airs-green"
        />
      )}
    </RTabs.Trigger>
  )
}
