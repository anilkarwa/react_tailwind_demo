import { ComponentProps, forwardRef, useState} from "react";

interface Props
  extends Omit<ComponentProps<"div">, "className"> {
  text: string;
  checked: boolean;
}

export const ToggleButton = forwardRef<HTMLDivElement, Props>(
  ({ text, checked, ...rest }, ref) => {

  const [active, setActive] = useState(checked || false);

  const toggleBtn = () => {
    setActive((prev) => !prev);
  }

  return (
    <div ref={ref} {...rest} className="flex flex-row justify-center items-center cursor-pointer"  onClick={toggleBtn}>
      <div className={`${active ? 'bg-orange-600 justify-end' : 'bg-gray-200' } h-8 w-16 rounded-3xl flex items-center px-1`}>
        <div className="h-6 w-6 rounded-full bg-white"></div>
      </div>
      <span className="text-lg ml-3">{text}</span>
    </div>
  )
});