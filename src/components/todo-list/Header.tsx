"use client";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

interface HeaderProps {
  addTodo: (title: string) => void;
}

const Header: React.FC<HeaderProps> = ({ addTodo }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
    addTodo(input);
  };
  return (
    <form
      className="flex items-center gap-x-2 border-2 border-[#EFEFEF]  py-4 px-2  rounded-lg"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full outline-transparent text-xs font-medium text-[#2D2D2D] bg-transparent"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button>
        <FiPlusCircle className="text-xl" />
      </button>
    </form>
  );
};

export default Header;
