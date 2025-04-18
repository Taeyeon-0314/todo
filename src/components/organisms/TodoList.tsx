"use client";

import { useTodos } from "@/hooks/useTodos";
import { TodoItem } from "@/components/molecules/TodoItem";
import { cn } from "@/utils/cn/util";
import { Todo } from "@/types/todo";

type Props = {
  filter: "all" | "completion" | "notCompleted";
};

export function TodoList({ filter }: Props) {
  const { data: todos, isLoading, isError } = useTodos();

  if (isLoading) {
    return <div className={cn("p-4 text-gray-500")}>로딩 중...</div>;
  }

  if (isError) {
    return <div className={cn("p-4 text-red-500")}>에러가 발생했습니다.</div>;
  }

  const filteredTodos = todos?.filter((todo: Todo) => {
    if (filter === "completion") return todo.completed;
    if (filter === "notCompleted") return !todo.completed;
    return true;
  });

  if (!filteredTodos || filteredTodos.length === 0) {
    if (filter === "completion") {
      return <div className={cn("p-4 text-gray-400")}>완료된 Todo가 없어요!</div>;
    }
    if (filter === "notCompleted") {
      return <div className={cn("p-4 text-gray-400")}>진행중인 Todo가 없어요!</div>;
    }
    return <div className={cn("p-4 text-gray-400")}>Todo 리스트가 비어있어요!</div>;
  }

  return (
    <ul className={cn("space-y-2")}>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
