import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/api/Todos";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos
  });
};
