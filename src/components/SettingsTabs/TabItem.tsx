'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({value, title, isSelected}: TabItemProps) {
  return (
    <Tabs.Trigger value={value} className='relative group px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-teal-700 data-[state=active]:text-teal-700 outline-none'>
      <span className='whitespace-nowrap group-focus-visible:ring-2 group-focus-visible:text-teal-400 group-focus-visible:ring-offset-4 rounded'>{title}</span>

    {isSelected && (
      <motion.div layoutId="activeTab" className='absolute -bottom-px left-0 right-0 h-0.5 bg-teal-700'/>
    )}
    </Tabs.Trigger>
  )
}