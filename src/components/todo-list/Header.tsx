"use client";
import Image from "next/image";
import React, { useState } from "react";

interface HeaderProps {
  addTodo: (title: string) => void;
}

const Header: React.FC<HeaderProps> = ({ addTodo }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form
      className="flex flex-col items-start gap-x-2 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="font-bold text-2xl">Add New Task</h3>
      <div className="border-2 border-[#E5E5E5] bg-white flex items-center gap-x-2 justify-between w-full my-5 py-4 px-6 rounded-3xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full outline-transparent text-[13px] font-medium text-[#999999] bg-transparent"
          placeholder="Add a new task..."
        />
        <button type="submit">
          <Image src="/images/add.svg" alt="Add Todo" width={18} height={18} />
        </button>
      </div>
    </form>
  );
};

export default Header;
