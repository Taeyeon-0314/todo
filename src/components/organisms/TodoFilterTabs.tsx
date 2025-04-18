"use client";

import { cn } from "@/utils/cn/util";
import { Button } from "../atoms/Button";

interface Props {
  filter: "all" | "completion" | "notCompleted";
  onChange: (filter: "all" | "completion" | "notCompleted") => void;
}

export function TodoFilterTabs({ filter, onChange }: Props) {
  const filters = [
    { label: "전체", value: "all" },
    { label: "완료", value: "completion" },
    { label: "미완료", value: "notCompleted" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => onChange(tab.value as Props["filter"])}
          className={cn(
            "px-3 py-1 rounded border text-sm",
            filter === tab.value ? "bg-yellow-200 text-black" : "bg-white text-gray-700 hover:bg-yellow-100"
          )}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
