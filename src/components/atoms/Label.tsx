import { ComponentProps, forwardRef} from "react";

interface Props
  extends Omit<ComponentProps<"div">, "className"> {
  text: string;
  fontSize?: string;
  color?: string;
  inline?: boolean;
}

export const Label = forwardRef<HTMLDivElement, Props>(
  ({ text, fontSize, color, inline, ...rest }, ref) => {
    return (
      <span 
        {...rest}
        ref={ref}
        className={`font-medium ${fontSize} ${color} ${inline ? 'inline-block' : 'block'}`}
      >
        {text}
      </span>
    );
  }
);