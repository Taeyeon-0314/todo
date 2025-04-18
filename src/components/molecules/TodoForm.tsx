"use client";

import { useState } from "react";
import { useCreateTodo } from "@/hooks/useCreateTodo";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/utils/cn/util";
import { Input } from "../atoms/Input";

export function TodoForm() {
  const [title, setTitle] = useState("");
  const { mutate, isPending } = useCreateTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    mutate(title, {
      onSuccess: () => {
        setTitle("");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col sm:flex-row gap-2 mb-6")}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="새 할 일을 입력하세요!!!"
        className="flex-1"
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? "추가 중..." : "추가"}
      </Button>
    </form>
  );
}
