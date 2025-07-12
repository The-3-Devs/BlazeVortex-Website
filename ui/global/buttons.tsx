import { MouseEventHandler } from "react";

export interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    text?: string
}

export function PrimaryButton({ onClick, Icon, text }: ButtonProps) {
  return (
    <button
      type="button"
      className="rounded-full border border-solid border-transparent transition-all duration-300 inline-flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      onClick={onClick}
    >
      {Icon && <Icon width={24} />} {text}
    </button>
  );
}
