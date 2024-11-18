import React from "react";

const MenuContainer = () => {
//   const foodMenu = [
//     {
//       id: crypto.randomUUID(),
//       title: "Chicken & Ribs Combo",
//       price: "89.24",
//       served: "496",
//       image: "/images/menu3.jpg",
//     },

//     {
//       id: crypto.randomUUID(),
//       title: "Chicken & Ribs Combo",
//       price: "89.24",
//       served: "496",
//       image: "/images/menu4.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Chicken & Ribs Combo",
//       price: "89.24",
//       served: "496",
//       image: "/images/menu5.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Chicken & Ribs Combo",
//       price: "89.24",
//       served: "496",
//       image: "/images/menu6.jpg",
//     },
//   ];
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
      <div className="p-5 flex gap-x-5">
        <div className="basis-[65%] object-contain bg-cover bg-center bg-no-repeat bg-[url('/images/menu1.jpg')] rounded-md min-h-[350px] p-3 w-full flex items-end">
          <div className="border rounded-md border-white p-3 flex justify-between  bg-white/50 backdrop-blur-md border-white/20 shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full">
            <div>
              <h5 className="font-[inter] font-medium text-sm text-[#1E293B]">
                Shaking Beef Tri-Tip
              </h5>
              <span className="font-[inter] font-normal text-xs text-chucky-gray-100">
                456 served
              </span>
            </div>
            <div>
              <p className={`font-[inter] font-medium text-sm text-[#1E293B]`}>
                $69.47
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[35%] object-contain bg-cover bg-center bg-no-repeat bg-[url('/images/menu2.jpg')] rounded-md min-h-[350px] p-3 flex items-end w-full">
          <div className="border rounded-md border-white p-3 flex justify-between  bg-white/50 backdrop-blur-md border-white/20 shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full">
            <div>
              <h5 className="font-[inter] font-medium text-sm text-[#1E293B]">
                Shaking Beef Tri-Tip
              </h5>
              <span className="font-[inter] font-normal text-xs text-chucky-gray-100">
                456 served
              </span>
            </div>
            <div>
              <p className={`font-[inter] font-medium text-sm text-[#1E293B]`}>
                $69.47
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="pb-5 pl-5">
          <div className="flex gap-x-5 overflow-x-scroll">
            {foodMenu.map((food) => (
              <div className="object-contain bg-cover bg-center bg-no-repeat bg-[url('/images/menu2.jpg')] rounded-md min-h-[240px] p-3 flex items-end w-[280px] flex-shrink-0">
                <div className="border rounded-md border-white p-3 flex justify-between  bg-white/50 backdrop-blur-md border-white/20 shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full">
                  <div>
                    <h5 className="font-[inter] font-medium text-sm text-[#1E293B]">
                      Shaking Beef Tri-Tip
                    </h5>
                    <span className="font-[inter] font-normal text-xs text-chucky-gray-100">
                      456 served
                    </span>
                  </div>
                  <div>
                    <p
                      className={`font-[inter] font-medium text-sm text-[#1E293B]`}
                    >
                      $69.47
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default MenuContainer;
