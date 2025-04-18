// src/components/organisms/TodoList.tsx
"use client";

import { useTodos } from "@/hooks/useTodos";
import { TodoItem } from "@/components/molecules/TodoItem";
import { cn } from "@/utils/cn/util";
import { Todo } from "@/types/todo";
export function TodoList() {
  const { data: todos, isLoading, isError } = useTodos();

  if (isLoading) {
    return <div className={cn("p-4 text-gray-500")}>로딩 중...</div>;
  }

  if (isError) {
    return <div className={cn("p-4 text-red-500")}>에러가 발생했습니다.</div>;
  }

  if (!todos || todos.length === 0) {
    return <div className={cn("p-4 text-gray-400")}>할 일이 없어요!</div>;
  }

  return (
    <ul className={cn("space-y-2")}>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
