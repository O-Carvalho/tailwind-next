import { LogOut } from "lucide-react";

export function Profile() {
  return(
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src="https://github.com/O-Carvalho.png" className="w-10 h-10 rounded-full" alt=""/>
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Matheus Carvalho</span>
        <span className="text-sm text-zinc-500 truncate">matheus@siliconmeadow.com</span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-200">
      <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}