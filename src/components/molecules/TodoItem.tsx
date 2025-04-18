import { Todo } from "@/types/todo";
import { cn } from "@/utils/cn/util";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <li
      className={cn(
        "flex justify-between items-center p-3 border rounded",
        !todo.completed && "bg-green-50 text-black border-black"
      )}
    >
      <span className="text-lg">{todo.title}</span>
      <span className={cn("text-sm text-gray-500", !todo.completed && "text-red-500")}>
        {todo.completed ? "완료" : "미완료"}
      </span>
    </li>
  );
}
