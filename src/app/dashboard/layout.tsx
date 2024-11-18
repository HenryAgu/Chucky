import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex xl:flex-row flex-col w-full overflow-hidden">
      {/* Aside */}
      <Sidebar />
      {/* Main bar */}
      <main className="grow basis-9/12 h-screen overflow-y-hidden">
        <header className="flex items-end justify-between py-3.5 px-5 shadow-md">
          <div>
            <h1 className="font-[inter] font-bold text-black text-2xl">
              Hi, Taylor!
            </h1>
            <p className="font-[inter] text-sm font-normal text-chucky-gray-200">
              Let’s check your store today
            </p>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-2 border py-2.5 px-5 rounded-xl">
              <Image
                src="/images/Search.svg"
                alt="Search"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="outline-transparent"
              />
            </div>
            <div className="flex items-center gap-x-20">
              <div className="flex items-center gap-x-3.5">
                <Image
                  src="/images/Notification.svg"
                  alt="icon"
                  width={14}
                  height={14}
                />
                <Image
                  src="/images/Message.svg"
                  alt="icon"
                  width={14}
                  height={14}
                />
              </div>
              <div className="flex items-center gap-x-3.5">
                <Image
                  src="/images/Avatar.svg"
                  alt="icon"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] aspect-[48/48] object-contain"
                />
                <h5 className="font-bold font-[inter] text-base">
                  Tynisha Obey
                </h5>
              </div>
            </div>
          </div>
        </header>
        <ScrollArea className="h-[90vh]">
          <div className="p-3 pr-5 pb-14 bg-[#F8F9FB]">{children}</div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default layout;
