"use client";
import Header from "@/components/todo-list/Header";
import TodoBody from "@/components/todo-list/TodoBody";
import React, { useState } from "react";

interface Todo {
  id: string;
  title: string;
}

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    if (!title.trim()) {
      console.error("Todo title cannot be empty");
      return;
    }
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
    };
    setTodo((prev) => [...prev, newTodo]);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#F8F8F8]">
      <div className="md:max-w-[400px] max-w-full w-[95%] border border-[#E5E5E5] shadow-md bg-white rounded-2xl p-5 pb-10">
        <Header addTodo={addTodo} />
        <TodoBody todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default TodoList;
