// src/hooks/useDeleteTodo.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "@/api/Todos";
import { Todo } from "@/types/todo";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      queryClient.setQueryData<Todo[]>(["todos"], (old = []) => {
        return old.filter((todo) => todo.id !== id);
      });

      return { previousTodos, deletedId: id };
    },

    onSuccess: (_data, deletedId) => {
      const currentTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      if (currentTodos) {
        queryClient.setQueryData<Todo[]>(
          ["todos"],
          currentTodos.filter((todo) => todo.id !== deletedId)
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
