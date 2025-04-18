import { cn } from "@/utils/cn/util";
import { Loader2 } from "lucide-react";

export function Spinner({ className }: { className?: string }) {
  return <Loader2 className={cn("animate-spin text-yellow-500", className)} size={24} />;
}
