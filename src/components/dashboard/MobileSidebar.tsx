"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("Sidebar toggled:", !isOpen);
  };

  return (
    <aside className="py-5 px-3 flex xl:hidden items-center gap-x-3 justify-between relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-[#f7f8fa] text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-5 flex flex-col gap-y-4">
          <button
            onClick={toggleSidebar}
            className="text-black self-end text-xl"
          >
            Close
          </button>
          <nav>
            <ul className="flex flex-col gap-y-3">
              <li className="hover:underline cursor-pointer">Menu Item 1</li>
              <li className="hover:underline cursor-pointer">Menu Item 2</li>
              <li className="hover:underline cursor-pointer">Menu Item 3</li>
              <li className="hover:underline cursor-pointer">Menu Item 4</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Toggle Button */}
      <div>
        <button onClick={toggleSidebar} className="z-60">
          <RiMenu3Fill className="flex xl:hidden font-bold text-2xl" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-x-2 border py-2.5 px-5 rounded-xl">
        <p>uer</p>
        <Image src="/images/Search.svg" alt="Search" width={18} height={18} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-transparent"
        />
      </div>

      {/* Notifications and Profile */}
      <div className="flex items-center xl:gap-x-20">
        <div className="flex items-center gap-x-3.5">
          <Image
            src="/images/Notification.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Image src="/images/Message.svg" alt="icon" width={14} height={14} />
        </div>
        <div className="hidden xl:flex items-center gap-x-3.5">
          <Image
            src="/images/Avatar.svg"
            alt="icon"
            width={48}
            height={48}
            className="w-[48px] h-[48px] aspect-[48/48] shadow-sm object-contain"
          />
          <h5 className="font-bold font-[inter] text-base hidden xl:block">
            Tynisha Obey
          </h5>
        </div>
      </div>
    </aside>
  );
};

export default MobileSideBar;
