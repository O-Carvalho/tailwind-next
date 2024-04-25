export function UsedSpaceWidget() {
  return(
    <div className="flex flex-col gap-4 rounded-lg bg-teal-50 px-4 py-5 dark:bg-zinc-800">
          <div className="space-y-1">
            <span className="text-sm/5 font-medium text-teal-700 dark:text-zinc-100">Used space</span>
            <p className="text-sm/5 text-teal-700 dark:text-zinc-400">
              Your team has used 80% of your available space. Need More?
            </p>
          </div>

          <div className="h-2 rounded-full bg-teal-100 dark:bg-zinc-600">
            <div className="h-2 w-4/5 rounded-full bg-teal-600 dark:bg-teal-400" />
          </div>

          <div className="space-x-3">
            <button type="button" className="text-sm font-medium text-teal-500 hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200">Dismiss</button>
            <button type="button" className="text-sm font-medium text-teal-700 hover:text-teal-900 dark:text-zinc-300 dark:hover:text-zinc-100">Upgrade Plan</button>
          </div>
        </div>
  )
}