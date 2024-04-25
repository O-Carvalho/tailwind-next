import { ComponentProps } from "react"


export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea 
    className="min-h-[120px] resize-y w-full rounded-lg border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-teal-300 focus:ring-4 focus:ring-teal-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-teal-500 dark:focus:ring-teal-500/20 dark:placeholderbg-zinc-400 dark:text-zinc-100" 
    {...props}
    />
  )
}