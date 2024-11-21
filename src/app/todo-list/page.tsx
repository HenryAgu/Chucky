"use client";
import React from "react";
import { useDispatch } from "react-redux";
import Header from "@/components/todo-list/Header";
import TodoBody from "@/components/todo-list/TodoBody";
import { addTodo } from "@/applications/todoSlice/todoSlice";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (title: string) => {
    if (!title.trim()) return;
    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        title,
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#F8F8F8]">
      <div className="md:max-w-[400px] max-w-full w-[95%] border border-[#E5E5E5]  shadow-md bg-white rounded-2xl p-5 pb-10">
        <Header addTodo={handleAddTodo} />
        <TodoBody />
      </div>
    </div>
  );
};

export default TodoList;
