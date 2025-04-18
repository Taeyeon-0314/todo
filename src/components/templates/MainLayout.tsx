"use client";
import { TodoList } from "@/components/organisms/TodoList";
import { cn } from "@/utils/cn/util";
import { TodoForm } from "../molecules/TodoForm";
import { useState } from "react";
import { TodoFilterTabs } from "../organisms/TodoFilterTabs";

export default function MainLayout() {
  const [filter, setFilter] = useState<"all" | "completion" | "notCompleted">("all");

  return (
    <main className={cn("max-w-xl mx-auto p-6")}>
      <h1 className={cn("text-3xl font-bold mb-6 text-center")}>TODO LIST</h1>
      <TodoForm />
      <TodoFilterTabs filter={filter} onChange={setFilter} />
      <TodoList filter={filter} />
    </main>
  );
}
