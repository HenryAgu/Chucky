import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex items-center gap-x-2 border py-4 px-2  rounded-lg">
      <input type="text" placeholder="Enter Todo..." className="w-full outline-transparent text-xs font-medium" />
      <button>
        <FaCirclePlus />
      </button>
    </div>
  );
};

export default Header;
