import { FaEllipsisH } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import CustomerList from "@/components/CustomerList";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function Home() {
  const navMenu = [
    {
      id: crypto.randomUUID(),
      title: "Dashboard",
      path: "",
      icon: (
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-chucky-gray-300 group-hover:text-white transition duration-300 ease-in-out"
        >
          <path
            d="M5.24485 13.7815L8.23799 9.8913L11.6522 12.5732L14.5812 8.79291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="17.9954"
            cy="3.20023"
            r="1.9222"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9245 2.12014H5.65675C2.64531 2.12014 0.77803 4.25286 0.77803 7.2643V15.3467C0.77803 18.3581 2.60869 20.4817 5.65675 20.4817H14.2609C17.2723 20.4817 19.1396 18.3581 19.1396 15.3467V8.30778"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Orders",
      path: "",
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-chucky-gray-300 group-hover:text-white transition duration-300 ease-in-out"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0137 20H5.6659C2.59954 20 0.247137 18.8924 0.915329 14.4348L1.69336 8.39359C2.10526 6.16934 3.52402 5.31808 4.76888 5.31808H14.9474C16.2105 5.31808 17.5469 6.23341 18.0229 8.39359L18.8009 14.4348C19.3684 18.389 17.0801 20 14.0137 20Z"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.151 5.0984C14.151 2.71232 12.2167 0.778031 9.83066 0.778031V0.778031C8.68166 0.773162 7.57805 1.22619 6.76386 2.03695C5.94967 2.8477 5.49198 3.94939 5.49199 5.0984H5.49199"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7963 9.60183H12.7506"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.96567 9.60183H6.91991"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Analytics",
      path: "",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-chucky-gray-300 group-hover:text-white transition duration-300 ease-in-out"
        >
          <path
            d="M6.37143 9.20171V16.0618"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.0381 5.91913V16.0618"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6286 12.8268V16.0618"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Customer",
      path: "",
      icon: (
        <svg
          width="23"
          height="18"
          viewBox="0 0 23 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-chucky-gray-300 group-hover:text-white transition duration-300 ease-in-out"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3867 10.914L11.4996 10.914L11.7522 10.9149C13.6828 10.9276 18.0947 11.1226 18.0947 14.113C18.0947 17.0837 13.8366 17.2775 11.7823 17.2901L11.0212 17.2901C9.09046 17.2774 4.67768 17.0826 4.67768 14.096C4.67768 11.1215 9.09046 10.9275 11.0212 10.9149L11.2738 10.914C11.3129 10.914 11.3506 10.914 11.3867 10.914ZM11.3867 12.414C9.01068 12.414 6.17768 12.706 6.17768 14.096C6.17768 15.4545 8.84158 15.7722 11.1695 15.7902L11.3867 15.791C13.7627 15.791 16.5947 15.5 16.5947 14.113C16.5947 12.709 13.7627 12.414 11.3867 12.414ZM19.3403 10.5082C21.7633 10.8712 22.2723 12.0092 22.2723 12.9002C22.2723 13.4442 22.0583 14.4372 20.6283 14.9822C20.5403 15.0152 20.4503 15.0312 20.3613 15.0312C20.0593 15.0312 19.7743 14.8472 19.6603 14.5482C19.5123 14.1612 19.7073 13.7272 20.0943 13.5802C20.7723 13.3222 20.7723 13.0372 20.7723 12.9002C20.7723 12.4622 20.2153 12.1562 19.1173 11.9922C18.7083 11.9302 18.4253 11.5492 18.4863 11.1382C18.5473 10.7282 18.9273 10.4552 19.3403 10.5082ZM4.28608 11.1382C4.34708 11.5492 4.06408 11.9302 3.65508 11.9922C2.55708 12.1562 2.00008 12.4622 2.00008 12.9002C2.00008 13.0372 2.00008 13.3212 2.67908 13.5802C3.06608 13.7272 3.26108 14.1612 3.11308 14.5482C2.99908 14.8472 2.71408 15.0312 2.41208 15.0312C2.32308 15.0312 2.23308 15.0152 2.14508 14.9822C0.714076 14.4362 0.500076 13.4432 0.500076 12.9002C0.500076 12.0102 1.00908 10.8712 3.43308 10.5082C3.84608 10.4562 4.22408 10.7282 4.28608 11.1382ZM11.3867 0.5C13.9067 0.5 15.9557 2.55 15.9557 5.069C15.9557 7.588 13.9067 9.638 11.3867 9.638H11.3597C10.1397 9.634 8.99668 9.156 8.14068 8.292C7.28268 7.429 6.81368 6.283 6.81864 5.066C6.81864 2.55 8.86768 0.5 11.3867 0.5ZM11.3867 2C9.69468 2 8.31866 3.377 8.31866 5.069C8.31568 5.889 8.62968 6.656 9.20468 7.235C9.77968 7.814 10.5457 8.135 11.3617 8.138L11.3867 8.888V8.138C13.0787 8.138 14.4557 6.762 14.4557 5.069C14.4557 3.377 13.0787 2 11.3867 2ZM17.5757 1.4795C19.3337 1.7685 20.6107 3.2725 20.6107 5.0555C20.6067 6.8505 19.2657 8.3905 17.4907 8.6395C17.4557 8.6445 17.4207 8.6465 17.3867 8.6465C17.0187 8.6465 16.6977 8.3755 16.6447 8.0005C16.5877 7.5895 16.8727 7.2105 17.2837 7.1535C18.3237 7.0075 19.1087 6.1055 19.1107 5.0535C19.1107 4.0105 18.3627 3.1285 17.3317 2.9595C16.9237 2.8925 16.6467 2.5065 16.7137 2.0975C16.7817 1.6885 17.1647 1.4145 17.5757 1.4795ZM6.05968 2.0975C6.12668 2.5065 5.84968 2.8925 5.44168 2.9595C4.41068 3.1285 3.66268 4.0105 3.66268 5.0555C3.66468 6.1055 4.44968 7.0085 5.48868 7.1535C5.89968 7.2105 6.18468 7.5895 6.12768 8.0005C6.07468 8.3755 5.75368 8.6465 5.38568 8.6465C5.35168 8.6465 5.31668 8.6445 5.28168 8.6395C3.50668 8.3905 2.16668 6.8505 2.16268 5.0575C2.16268 3.2725 3.43968 1.7685 5.19768 1.4795C5.61868 1.4135 5.99168 1.6905 6.05968 2.0975Z"
            fill="stroke-current"
          />
        </svg>
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Menu",
      path: "",
      icon: (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-chucky-gray-300 group-hover:text-white transition duration-300 ease-in-out"
        >
          <path
            d="M12.7162 14.2234H5.4962"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7162 10.0369H5.4962"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.2513 5.86008H5.4963"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9086 0.749786C12.9086 0.749786 5.2316 0.753786 5.2196 0.753786C2.4596 0.770786 0.750603 2.58679 0.750603 5.35679V14.5528C0.750603 17.3368 2.4726 19.1598 5.2566 19.1598C5.2566 19.1598 12.9326 19.1568 12.9456 19.1568C15.7056 19.1398 17.4156 17.3228 17.4156 14.5528V5.35679C17.4156 2.57279 15.6926 0.749786 12.9086 0.749786Z"
            stroke="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

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
    <div className="flex xl:flex-row flex-col overflow-hidden">
      {/* Aside */}
      <aside className="min-w-[320px] h-screen py-10 pl-5">
        <div className="flex gap-x-3.5 pb-2">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="w-[49px] h-[49px]"
            priority
          />
          <div>
            <h1 className="text-2xl font-normal">Chucky</h1>
            <h5 className="text-sm font-normal">Admin Dashboard</h5>
          </div>
        </div>
        <ScrollArea className="h-[600px]">
          <nav className="mt-14 flex flex-col gap-y-3.5 h-[400px]  pr-10">
            {navMenu.map((menu) => (
              <Link href={menu.path} key={menu.id}>
                <button className="group flex items-center gap-x-3.5 bg-white hover:bg-chucky-primary active:bg-chucky-primary transition duration-300 ease-in-out rounded-xl p-5 w-full">
                  {menu.icon}
                  <span className="font-[inter] text-chucky-gray-300 group-hover:text-white group-active:text-white font-bold transition ease-in-out">
                    {menu.title}
                  </span>
                </button>
              </Link>
            ))}
          </nav>
          <div className="p-4 flex flex-col gap-y-2 shadow-lg mt-2 mb-10 mr-8 rounded-[10px] bg-[#F8F9FB]">
            <div className=" flex items-end justify-end text-right">
              <Image
                src="/images/close.svg"
                width={20}
                height={20}
                className="w-5 h-5"
                alt="close-icon"
              />
            </div>
            <div>
              <Image
                src="/images/Progress.svg"
                width={58}
                height={58}
                className="w-[58px] h-[58px]"
                alt="icon"
              />
            </div>
            <h5 className="font-[inter] text-sm font-semibold text-chucky-black-300">
              Subscription Plan
            </h5>
            <p className="font-[inter] text-sm max-w-[200px]">
              Your Subscription plan will expire soon please upgrade!
            </p>
            <span className="font-[inter] text-sm text-chucky-primary font-semibold">
              Upgrade
            </span>
          </div>
        </ScrollArea>
      </aside>
      {/* Main bar */}
      <main className="max-w-full w-screen h-screen overflow-y-hidden">
        {/* title */}
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

        {/* Main content */}
        <div>
          <ScrollArea className="h-[90vh]">
            <div className="p-3 pr-5 pb-14 bg-[#F8F9FB] w-full">
              {/* Top cards */}
              <section className="grid grid-cols-4 gap-x-5 my-5">
                <div className="shadow-md p-5 rounded-md flex flex-col gap-y-5 bg-white">
                  <Image
                    src="/images/Paper.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />

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
                  <Image
                    src="/images/Activity.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />

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
                  <Image
                    src="/images/Users.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />

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
                  <Image
                    src="/images/Bag.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />

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

              {/* card */}
              <section className="flex gap-x-5">
                <div className="shadow-md rounded-md basis-2/4 bg-white">
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
                <div className="shadow-md rounded-md basis-2/4 bg-white">
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

              {/* Card */}
              <section className="flex gap-x-5 mt-5">
                <div className="basis-[75%] shadow-md rounded-md">
                  <div className="">
                    <h3 className="font-[inter] text-lg text-[#081735] font-bold border-b p-5">
                      Customer Map
                    </h3>
                  </div>
                  <div className="p-5">
                    <Image
                      src="/images/Map.jpg"
                      alt="map"
                      height={320}
                      width={750}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="basis-[35%] shadow-md rounded-md p-5">
                  <h3 className="font-[inter] font-bold text-lg text-[#081735]">
                    Customers List
                  </h3>
                  <div className="mt-8">
                    <CustomerList />
                  </div>
                </div>
              </section>

              {/* Menu */}
              <section className="w-full min-w-[1200px] shadow-md rounded-md mt-5">
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

                {/* Top menu */}
                <div className="p-5 ">
                  <div className="flex gap-x-5">
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
                          <p
                            className={`font-[inter] font-medium text-sm text-[#1E293B]`}
                          >
                            $69.47
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="basis-[35%] object-contain bg-cover bg-center bg-no-repeat bg-[url('/images/menu2.jpg')] rounded-md min-h-[350px] p-3 flex items-end w-full">
                      <div className="border rounded-md border-white p-3 flex justify-between bg-white/50 backdrop-blur-md border-white/20  shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full">
                        <div>
                          <h5 className="font-[inter] font-medium text-sm text-[#1E293B]">
                            Shaking Beef Tri-Tip
                          </h5>
                          <span className="font-[inter] font-normal text-xs text-chucky-gray-100">
                            456 served
                          </span>
                        </div>
                        <div className="">
                          <p className="font-[inter] font-medium text-sm text-[#1E293B]">
                            $69.47
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overflow menu */}
                <div className="pb-5 pl-5">
                  <div className="w-full overflow-x-scroll carousel_container">
                    <div className="flex gap-x-5">
                      {foodMenu.map((food) => (
                        <div
                          key={food.id}
                          className={`h-[234px] object-contain bg-cover bg-center bg-no-repeat w-[280px] flex items-end flex-shrink-0 rounded-md p-3`}
                          style={{backgroundImage: `url(${food.image})`}}
                        >
                          <div className="border rounded-md border-white p-3 flex justify-between  bg-white/50 backdrop-blur-md border-white/20 shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full">
                            <div>
                              <h5 className="font-[inter] font-medium text-sm text-[#1E293B]">
                                {food.title}
                              </h5>
                              <span className="font-[inter] font-normal text-xs text-chucky-gray-100">
                                {food.served} served
                              </span>
                            </div>
                            <div>
                              <p
                                className={`font-[inter] font-medium text-sm text-[#1E293B]`}
                              >
                                ${food.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
