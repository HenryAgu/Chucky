import Header from "@/components/todo-list/Header";
import TodoBody from "@/components/todo-list/TodoBody";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Todo List | Welcome To Todo List",
  description: "...",
};

const TodoList = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="md:max-w-[320px] max-w-full w-[95%] shadow-md rounded-lg p-5 pb-10">
        <Header />
        <TodoBody />
      </div>
    </div>
  );
};

export default TodoList;
