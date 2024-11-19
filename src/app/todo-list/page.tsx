"use client";
import Header from "@/components/todo-list/Header";
import TodoBody from "@/components/todo-list/TodoBody";
import React, { useState } from "react";

interface Todo {
  id: string;
  title: string;
}

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>([
    {
      id: crypto.randomUUID(),
      title: "Praise the lord",
    },
  ]);

  const addTodo = (title: string) => {
    if (!title.trim()) return; 
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
    };
    setTodo((prev) => [...prev, newTodo]);
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#f8f8f8]">
      <div className="md:max-w-[320px] max-w-full w-[95%] border border-[#f6f6f6] shadow-md rounded-lg p-5 pb-10">
        <Header addTodo={addTodo}/>
        <TodoBody todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default TodoList;
