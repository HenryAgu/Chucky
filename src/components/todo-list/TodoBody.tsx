import React from "react";
import { FaCircleMinus } from "react-icons/fa6";

const TodoBody = () => {
  const todo = [
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
  ];
  return (
    <div className="mt-3 rounded-lg">
      <div className="flex flex-col gap-y-2">
        {todo.map((todo) => (
          <div className="border p-2 rounded-lg flex items-center justify-between" key={todo.id}>
            <p className="text-xs font-semibold">{todo.title}</p>
            <div>
              <button>
                <FaCircleMinus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBody;
