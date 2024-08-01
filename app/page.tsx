"use client";
import { Todo } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get<Todo[]>(`/api/todo`);
        setTodos(response.data);
      } catch (err) {
        setError('Failed to fetch todos');
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      <h1>Todo List</h1>
      <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow my-4">
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Title</div>
          <div>Category</div>
          <div>Status</div>
        </div>
        {todos.map((todo, idx) => (
          <div
            key={todo.toDoId} // Ensure there's a unique id or use idx if no id is available
            className={`${idx === 0 ? "rounded-t-md" : ""} ${todos.length - 1 === idx ? "rounded-b-md" : ""} bg-gray-800 hover:bg-gray-700 flex w-full justify-between p-4 cursor-pointer`}
          >
            <div>{todo.toDoTitle}</div>
            <div>{todo.toDoCategory}</div>
            <div>{todo.toDoCompleted ? "Completed" : "Not Completed"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
