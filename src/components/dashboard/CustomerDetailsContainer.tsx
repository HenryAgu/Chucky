import React from 'react'
import CustomerList from './CustomerList'
import Image from 'next/image'

const CustomerDetailsContainer = () => {
  return (
    <section className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 mt-5 w-full">
    <div className="w-full md:basis-[60%] xl:basis-[75%] shadow-md rounded-md">
      <div className="">
        <h3 className="font-[inter] text-lg text-[#081735] font-bold border-b p-5">
          Customer Map
        </h3>
      </div>
      <div className="p-3 xl:p-5">
        <Image
          src="/images/Map.jpg"
          alt="map"
          height={320}
          width={750}
          className="object-cover xl:object-contain w-full h-[250px] xl:h-full"
        />
      </div>
    </div>
    <div className="w-full md:basis-[40%] xl:basis-[35%] shadow-md rounded-md p-5">
      <h3 className="font-[inter] font-bold text-lg text-[#081735]">
        Customers List
      </h3>
      <div className="mt-8">
        <CustomerList />
      </div>
    </div>
  </section>

  )
}

export default CustomerDetailsContainer
