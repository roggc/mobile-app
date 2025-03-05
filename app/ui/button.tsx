import { PropsWithChildren, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isFilled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  isFilled = false,
  onClick,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`w-full h-12 px-[7px] py-[5px] ${
        isFilled ? "bg-black" : "bg-[#F3F2F2]"
      } flex items-center justify-center`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
