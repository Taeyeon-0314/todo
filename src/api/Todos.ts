import { Todo } from "@/types/todo";

const API_BASE_URL = process.env.NEXT_PUBLIC_PROD_URL;

export const getTodos = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) {
    throw new Error("Todo 목록을 가져오는데 실패했습니다.");
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Todo 목록을 가져오는데 실패했습니다.");
  }
};
