import { createTodo } from "@/api/Todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] })
  });
};
