import React from "react";

const MenuContainer = () => {
  const foodMenu = [
    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menu3.jpg",
    },

    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menu4.jpg",
    },
    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menu5.jpg",
    },
    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menu6.jpg",
    },
  ];
  return (
    <section className="shadow-md rounded-md mt-5">
      <div className="flex flex-col gap-y-2 border-b pt-5">
        <h3 className="px-5 font-[inter] text-[#081735] font-bold text-lg">
          Menu
        </h3>
        <div className="flex items-center justify-end px-5">
          <ul className="flex items-center gap-x-5 font-[inter]">
            <li className="cursor-pointer text-chucky-primary font-medium border-b-2 border-chucky-primary pb-3 transition ease-in-out">
              All Categories
            </li>
            <li className="cursor-pointer hover:text-chucky-primary text-chucky-gray-400 font-medium border-b-2 hover:border-chucky-primary pb-3 transition ease-in-out">
              Breakfast
            </li>
            <li className="cursor-pointer hover:text-chucky-primary text-chucky-gray-400 font-medium border-b-2 hover:border-chucky-primary pb-3 transition ease-in-out">
              Lunch
            </li>
            <li className="cursor-pointer hover:text-chucky-primary text-chucky-gray-400 font-medium border-b-2 hover:border-chucky-primary pb-3 transition ease-in-out">
              Dinner
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
