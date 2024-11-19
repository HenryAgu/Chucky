"use client"
import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const TodoBody = () => {
  const [todo, setTodo] = useState([
    {
      id: crypto.randomUUID(),
      title: "Praise the lord",
    },
    {
      id: crypto.randomUUID(),
      title: "Break the law",
    },
    {
      id: crypto.randomUUID(),
      title: "Take what's mine",
    },
    {
      id: crypto.randomUUID(),
      title: "Take some more",
    },
  ]);
  return (
    <div className="mt-5 rounded-lg">
      <div className="flex flex-col gap-y-2">
        {todo.map((todo) => (
          <div
            className="border p-3 rounded-lg flex items-center justify-between"
            key={todo.id}
          >
            <p className="text-sm font-semibold">{todo.title}</p>
            <div className="flex items-center gap-x-3.5">
              <button>
                <FiEdit2 className="text-xl" />
              </button>
              <button>
                <FiTrash2 className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBody;
