import BarChart from "@/components/dashboard/BarChart";
import PieChart from "@/components/dashboard/PieChart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const GraphContainer = () => {
  return (
    <section className="flex md:flex-row flex-col gap-y-5 md:gap-x-5 w-full">
      <div className="shadow-md rounded-md w-full xl:basis-2/4 bg-white">
        <div className="flex items-end justify-between p-5 border-b h-[80px]">
          <h3 className="font-[inter] text-[#081735] font-bold text-lg">
            Revenue
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="outline-transparent">
                <FaEllipsisH className="text-chucky-gray-300 font-normal" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[150px] p-3 flex flex-col gap-y-3.5">
              <button className="flex items-center gap-x-3">
                <Image
                  src="/images/View.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
                <span className="text-chucky-gray-300 text-sm font-[inter] ">
                  View
                </span>
              </button>
              <button className="flex items-center gap-x-3">
                <Image
                  src="/images/Export.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
                <span className="text-chucky-gray-300 text-sm font-[inter] ">
                  Export
                </span>
              </button>
              <button className="flex items-center gap-x-3">
                <Image
                  src="/images/Thrash.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
                <span className="text-[#FF754C] text-sm font-[inter] ">
                  Remove
                </span>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-5">
          <BarChart />
        </div>
      </div>
      <div className="shadow-md rounded-md w-full xl:basis-2/4 bg-white">
        <div className="flex items-end justify-between p-5 border-b h-[80px]">
          <div>
            <h3 className="font-[inter] text-[#081735] font-bold text-lg">
              Customers
            </h3>
            <span className="text-xs font-[inter] font-normal text-chucky-gray-300">
              Customers that buy our products
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="outline-transparent">
                <FaEllipsisH className="text-chucky-gray-300 font-normal" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[150px] p-3 flex flex-col gap-y-3.5">
              <button className="flex items-center gap-x-3">
                <Image
                  src="/images/View.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
                <span className="text-chucky-gray-300 text-sm font-[inter] ">
                  View
                </span>
              </button>
              <button className="flex items-center gap-x-3">
                <Image
                  src="/images/Export.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
                <span className="text-chucky-gray-300 text-sm font-[inter] ">
                  Export
                </span>
              </button>
              <button className="flex items-center gap-x-3">
                <Image
                  src="/images/Thrash.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
                <span className="text-[#FF754C] text-sm font-[inter] ">
                  Remove
                </span>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-5">
          <PieChart />
        </div>
      </div>
    </section>
  );
};

export default GraphContainer;
