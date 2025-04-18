import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn/util";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button className={cn("px-4 py-2 rounded-xl bg-gray-500 text-white hover:bg-gray-600", className)} {...props} />
  );
}
