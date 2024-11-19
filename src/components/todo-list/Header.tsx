import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center gap-x-2 border py-4 px-2  rounded-lg">
      <input type="text" placeholder="Enter Todo..." className="w-full outline-transparent text-xs font-medium" />
      <button>
        <FiPlusCircle className="text-xl"/>
      </button>
    </div>
  );
};

export default Header;
