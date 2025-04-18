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

export const updateTodo = async (todo: Todo) => {
  const response = await fetch(`${API_BASE_URL}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  });
  if (!response.ok) {
    throw new Error("리스트 상태 변경 실패");
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("리스트 상태 변경 실패");
  }
};

export const deleteTodo = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error("리스트 삭제 실패");
  }
};
