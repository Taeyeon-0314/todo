// src/hooks/useUpdateTodo.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "@/api/Todos";
import { Todo } from "@/types/todo";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo: Todo) => updateTodo(todo),
    onMutate: async (updatedTodo: Todo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      queryClient.setQueryData<Todo[]>(["todos"], (old = []) => {
        return old.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
      });

      return { previousTodos };
    },

    onSuccess: (updatedTodo) => {
      const currentTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      if (currentTodos) {
        queryClient.setQueryData<Todo[]>(
          ["todos"],
          currentTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
        );
      }

      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

    onError: (_error, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
    }
  });
};
