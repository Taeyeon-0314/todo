import { Todo } from "@/types/todo";
import { cn } from "@/utils/cn/util";
import { Button } from "../atoms/Button";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { mutate: updateTodo } = useUpdateTodo();
  const toggleCompleted = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };
  return (
    <li
      className={cn(
        "flex justify-between items-center p-3 border rounded",
        !todo.completed && "bg-green-50 text-black border-black"
      )}
    >
      <span className="text-lg">{todo.title}</span>
      <Button
        onClick={toggleCompleted}
        className={cn("text-sm text-green-900 font-bold border border-black", !todo.completed && "text-red-500")}
      >
        {todo.completed ? "완료" : "미완료"}
      </Button>
    </li>
  );
}
