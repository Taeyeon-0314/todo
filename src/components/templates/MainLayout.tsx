import { TodoList } from "@/components/organisms/TodoList";
import { cn } from "@/utils/cn/util";

export default function MainLayout() {
  return (
    <main className={cn("max-w-xl mx-auto p-6")}>
      <h1 className={cn("text-3xl font-bold mb-6 text-center")}>TODO LIST</h1>
      <TodoList />
    </main>
  );
}
