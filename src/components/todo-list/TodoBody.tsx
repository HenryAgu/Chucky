"use client";
import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface Todo {
  id: string;
  title: string;
}

interface TodoBodyProps {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoBody: React.FC<TodoBodyProps> = ({ todo, setTodo }) => {
  const handleDelete = (id: string) => {
    setTodo((prev) => prev.filter((item) => item.id !== id)); // Remove the todo by ID
  };
  return (
    <div className="mt-5 rounded-lg">
      <div className="flex flex-col gap-y-2">
        {todo.map((item) => (
          <div
            className="border-2  p-3 rounded-lg flex items-center justify-between"
            key={item.id}
          >
            <p className="text-sm font-semibold text-[#2D2D2D]">{item.title}</p>
            <div className="flex items-center gap-x-3.5">
              <button>
                <FiEdit2 className="text-base text-[#2D2D2D]" />
              </button>
              <button onClick={() => handleDelete(item.id)}>
                <FiTrash2 className="text-base text-[#2D2D2D]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBody;
