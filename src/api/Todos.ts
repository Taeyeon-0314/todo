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

export const createTodo = async (title: string) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, completed: false })
  });
  if (!response.ok) {
    throw new Error("Todo를 추가하는데 실패했습니다.");
  }
  return response.json();
};
