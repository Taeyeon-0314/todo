import { Todo } from "@/types/todo";
import { cn } from "@/utils/cn/util";
import { Button } from "../atoms/Button";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const toggleCompleted = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하실건가요?")) {
      deleteTodo(todo.id);
    }
  };

  return (
    <li
      className={cn(
        "flex justify-between items-center p-3 border rounded",
        !todo.completed && "bg-green-50 text-black border-black"
      )}
    >
      <div>
        <span className="text-lg">{todo.title}</span>
      </div>
      <div className={cn("flex gap-2")}>
        <Button
          onClick={toggleCompleted}
          className={cn("text-sm text-green-900 font-bold border border-black", !todo.completed && "text-black")}
        >
          {todo.completed ? "완료" : "미완료"}
        </Button>
        <Button className={cn("text-sm px-3 py-1 bg-red-500 text-black hover:bg-red-600 ")} onClick={handleDelete}>
          삭제
        </Button>
      </div>
    </li>
  );
}
