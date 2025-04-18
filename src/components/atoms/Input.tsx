import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn/util";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "px-3 py-2 border rounded text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
}
