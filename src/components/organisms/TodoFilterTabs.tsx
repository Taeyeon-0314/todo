"use client";

import { cn } from "@/utils/cn/util";
import { Button } from "../atoms/Button";

interface Props {
  filter: "all" | "completion" | "notCompleted";
  onChange: (filter: "all" | "completion" | "notCompleted") => void;
}

export function TodoFilterTabs({ filter, onChange }: Props) {
  const filters = [
    { label: "모든 할일", value: "all" },
    { label: "완료한 할일", value: "completion" },
    { label: "진행중인 할일", value: "notCompleted" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => onChange(tab.value as Props["filter"])}
          className={cn(
            "px-4 py-2 rounded-full border text-sm ",
            filter === tab.value
              ? "bg-yellow-200 text-black border-yellow-300 shadow-sm"
              : "bg-white text-gray-700 hover:bg-yellow-50 border-gray-200"
          )}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
