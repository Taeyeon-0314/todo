import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn/util";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-xl bg-yellow-100 text-black font-bold hover:bg-yellow-200 cursor-pointer",
        className
      )}
      {...props}
    />
  );
}
