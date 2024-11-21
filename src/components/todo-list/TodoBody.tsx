"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck, FiX } from "react-icons/fi";
import { RootState } from "@/applications/store";
import { deleteTodo, editTodo } from "@/applications/todoSlice/todoSlice";
import Image from "next/image";

const TodoBody: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");

  const handleEdit = (id: string, title: string) => {
    setEditId(id);
    setEditTitle(title);
  };

  const saveEdit = (id: string) => {
    if (!editTitle.trim()) return;
    dispatch(editTodo({ id, title: editTitle }));
    setEditId(null);
    setEditTitle("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditTitle("");
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="mt-5 rounded-lg">
      <div className="flex flex-col gap-y-2">
        {todos.map((item) => (
          <div
            className="border-b border-[#E5E5E5] p-3 flex items-center justify-between"
            key={item.id}
          >
            {editId === item.id ? (
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
                  <FiX className="text-xl" />
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
                    <Image
                      src="/images/todo-edit.svg"
                      alt="Add Todo"
                      width={18}
                      height={18}
                    />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-[#2D2D2D] hover:text-red-700"
                  >
                    <Image
                      src="/images/todo-delete.svg"
                      alt="Add Todo"
                      width={18}
                      height={18}
                    />
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
