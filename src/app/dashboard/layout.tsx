import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "@/components/dashboard/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex xl:flex-row flex-col w-full xl:w-screen xl:h-screen overflow-hidden">
      {/* Aside */}
      <div>
        <Sidebar />
      </div>
      <main className="w-full xl:w-[calc(100vw-271px)] h-screen overflow-hidden mb-10 xl:mb-0">
        <header className="hidden xl:flex flex-col-reverse gap-y-5 xl:flex-row xl:items-end justify-between py-5 xl:py-3.5 px-3 xl:px-5 shadow-md mt-3 xl:mt-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-[inter] font-bold text-black text-3xl xl:text-2xl">
                Hi, Taylor!
              </h1>
              <p className="font-[inter] text-sm font-normal text-chucky-gray-200">
                Let’s check your store today
              </p>
            </div>
            <div className="xl:hidden flex items-center gap-x-3.5">
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
          <div className="flex items-center justify-between xl:justify-start xl:gap-x-8">
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
            <div className="flex items-center xl:gap-x-20">
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
          </div>
        </header>

        {/* For mobile */}
        <header className="xl:hidden flex p-5 w-full">
          <div className="flex flex-col gap-y-3.5 items-start justify-between">
            <div className="xl:hidden flex items-center gap-x-3.5">
              <Image
                src="/images/Avatar.svg"
                alt="icon"
                width={80}
                height={80}
                className="w-[80px] h-[80px] aspect-[80/80] shadow-sm object-contain"
              />
              <h5 className="font-bold font-[inter] text-base hidden xl:block">
                Tynisha Obey
              </h5>
            </div>
            <div>
              <h1 className="font-[inter] font-bold text-black text-3xl xl:text-2xl">
                Hi, Taylor!
              </h1>
              <p className="font-[inter] text-sm font-normal text-chucky-gray-200">
                Let’s check your store today
              </p>
            </div>
          </div>
        </header>
        <ScrollArea className="h-[90vh]">
          <div className="p-3 pb-24 xl:pb-14 bg-[#F8F9FB] w-screen xl:w-full">
            {children}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default layout;
