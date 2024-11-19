import Image from "next/image";
import React from "react";

const CardContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-5 md:gap-x-5 my-5 w-full">
      <div className="shadow-md p-5 rounded-md flex flex-col gap-y-5 bg-white">
        <Image src="/images/Paper.svg" alt="icon" width={24} height={24} />

        <div className="mt-5 flex flex-col gap-y-3">
          <span className="text-sm font-normal text-chucky-gray-100 font-[inter]">
            Total Menu
          </span>
          <h1 className="font-semibold font-[inter] text-3xl text-[#1E293B]">
            345
          </h1>
        </div>
      </div>
      <div className="shadow-md p-5 rounded-md flex flex-col gap-y-5 bg-white">
        <Image src="/images/Activity.svg" alt="icon" width={24} height={24} />

        <div className="mt-5 flex flex-col gap-y-1">
          <span className="text-sm font-normal text-chucky-gray-100 font-[inter]">
            Total Revenue
          </span>
          <h1 className="font-semibold font-[inter] text-3xl text-[#1E293B]">
            $37,193.00
          </h1>
        </div>
      </div>
      <div className="shadow-md p-5 rounded-md flex flex-col gap-y-5 bg-white">
        <Image src="/images/Users.svg" alt="icon" width={24} height={24} />

        <div className="mt-5 flex flex-col gap-y-1">
          <span className="text-sm font-normal text-chucky-gray-100 font-[inter]">
            Total Customers
          </span>
          <h1 className="font-semibold font-[inter] text-3xl text-[#1E293B]">
            1349
          </h1>
        </div>
      </div>
      <div className="shadow-md p-5 rounded-md flex flex-col gap-y-5 bg-white">
        <Image src="/images/Bag.svg" alt="icon" width={24} height={24} />

        <div className="mt-5 flex flex-col gap-y-1">
          <span className="text-sm font-normal text-chucky-gray-100 font-[inter]">
            Total Orders
          </span>
          <h1 className="font-semibold font-[inter] text-3xl text-[#1E293B]">
            3,500
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
