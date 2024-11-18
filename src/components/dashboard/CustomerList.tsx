import Image from "next/image";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";

const customerList = [
  {
    id: crypto.randomUUID(),
    firstName: "Ana",
    lastName: "Black",
    email: "ana@gmail.com",
    avatar: "/images/Avatar1.svg",
  },
  {
    id: crypto.randomUUID(),
    firstName: "George",
    lastName: "Litz",
    email: "georgelitz@gmail.com",
    avatar: "/images/Avatar2.svg",
  },
  {
    id: crypto.randomUUID(),
    firstName: "John",
    lastName: "Miller",
    email: "jmiller@gmail.com",
    avatar: "/images/Avatar3.svg",
  },
  {
    id: crypto.randomUUID(),
    firstName: "Jane",
    lastName: "Johnson",
    email: "jj@gmail.com",
    avatar: "/images/Avatar4.svg",
  },
  {
    id: crypto.randomUUID(),
    firstName: "Mezei",
    lastName: "Ágnes",
    email: "fefekartika@gmail.com",
    avatar: "/images/Avatar5.svg",
  },
  {
    id: crypto.randomUUID(),
    firstName: "Katona",
    lastName: "Beatrix",
    email: "edobram@gmail.com",
    avatar: "/images/Avatar6.svg",
  },
  {
    id: crypto.randomUUID(),
    firstName: "Halász",
    lastName: "Emese",
    email: "jiloputri@yahoo.com",
    avatar: "/images/Avatar7.svg",
  },
];

const CustomerList = () => {
  return (
    <div className="">
      <ScrollArea className="h-[300px]">
        {customerList.map((customer) => (
          <div className="flex items-center gap-x-3 mb-5" key={customer.id}>
            <Image
              src={customer.avatar}
              alt="Avatar"
              width={40}
              height={40}
              className="object-contain aspect-[40/40] w-[40px] h-[40px]"
            />
            <div className="flex flex-col">
              <h6 className="font-[inter] text-[#1E293B] text-sm font-bold">
                {`${customer.firstName} ${customer.lastName}`}
              </h6>
              <span className="font-[inter] font-normal text-sm text-chucky-gray-100">
                {customer.email}
              </span>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default CustomerList;
