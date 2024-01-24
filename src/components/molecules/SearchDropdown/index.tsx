import { ComponentProps, forwardRef, useState, useRef, useEffect} from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { SearchInput } from "../../atoms/SearchInput";

interface Props
  extends Omit<ComponentProps<"div">, "className"> {
  text: string;
  items: any[],
  displayKey: string,
}

export const SearchDropdown = forwardRef<HTMLDivElement, Props>(
  ({ text, items, displayKey, ...rest }, ref) => {
    const dropdownRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    });

    const handleOutsideClick = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    const toggleDropdown = () => {
      setIsOpen((previous) => !previous)
    }

    return (
      <div 
        {...rest}
        ref={ref = dropdownRef}
        className="relative basis-1/2"
      >
        <div className="border-2 rounded-lg border-slate-200 flex justify-between py-2 px-2 cursor-pointer items-center" onClick={toggleDropdown}>
          <span>{text}</span>
          <ChevronDownIcon className="h-4 w-4 font-medium" />
        </div>
        
        {
          isOpen && (
            <div className="absolute w-96 border-2 rounded-lg p-4 border-slate-200 bg-white top-100 z-50 min-h-24 max-h-52 overflow-auto">
              <SearchInput />
                {items.map((item, index) => (
                  <p key={`${index}-${item[displayKey]}`} className="pb-2 font-medium">{item[displayKey]}</p>
                ))}
            </div>
          )
        }
        
      </div>
    );
  }
);