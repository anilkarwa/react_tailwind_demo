
import { ComponentProps, forwardRef} from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface Props
  extends Omit<ComponentProps<"input">, "className"> {
}

export const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({...rest }, ref) => {
  return (
    <div className="border-2 rounded-lg border-slate-200 py-2 px-2 mb-2 flex pl-4">
      <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      <input {...rest} ref={ref} type="search" className="ml-3 w-full h-max focus:outline-none" placeholder='Search' />
    </div>
  )
});