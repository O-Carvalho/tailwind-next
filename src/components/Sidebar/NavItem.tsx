import { ChevronDown} from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({title, icon: Icon}: NavItemProps){
  return(
    <a href="" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-teal-50 dark:hover:bg-zinc-800">
    <Icon className="h-5 w-5 text-zinc-500" />
    <span className="font-medium text-zinc-700 group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-300">{title}</span>
    <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-teal-300 dark:text-zinc-600" />
    </a>
  )
}