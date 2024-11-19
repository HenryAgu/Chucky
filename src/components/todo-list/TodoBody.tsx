"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiCheck, FiEdit2, FiTrash2,FiX } from "react-icons/fi";

interface Todo {
  id: string;
  title: string;
}

interface TodoBodyProps {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoBody: React.FC<TodoBodyProps> = ({ todo, setTodo }) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");

  const handleEdit = (id: string, title: string) => {
    setEditId(id);
    setEditTitle(title);
  };

  const saveEdit = (id: string) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, title: editTitle } : item
      )
    );
    setEditId(null);
    setEditTitle("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditTitle("");
  };

  const handleDelete = (id: string) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="mt-5 rounded-lg">
      <div className="flex flex-col gap-y-2">
        {todo.map((item) => (
          <div
            className="border-b border-[#E5E5E5] p-3 flex items-center justify-between"
            key={item.id}
          >
            {editId === item.id ? (
              // Editing Mode
              <div className="flex items-center gap-x-2 flex-1 w-fit">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="p-1 rounded-lg w-[80%]"
                />
                <button
                  onClick={() => saveEdit(item.id)}
                  className="text-green-700 hover:text-green-700"
                >
                  <FiCheck className="text-xl" />
                </button>
                <button
                  onClick={handleCancel}
                  className="text-red-600 hover:text-red-600"
                >
                  <FiX className="text-xl"/>
                </button>
              </div>
            ) : (
              <>
                <p className="text-[13px] font-semibold flex-1">{item.title}</p>
                <div className="flex items-center gap-x-3.5">
                  <button
                    onClick={() => handleEdit(item.id, item.title)}
                    className="text-[#2D2D2D] hover:text-blue-700"
                  >
                    <Image src="/images/todo-edit.svg" alt="delete icon" width={16} height={16}/>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-[#2D2D2D] hover:text-red-700"
                  >
                    <Image src="/images/todo-delete.svg" alt="delete icon" width={16} height={16}/>
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBody;
