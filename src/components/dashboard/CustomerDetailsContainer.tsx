import React from 'react'
import CustomerList from './CustomerList'
import Image from 'next/image'

const CustomerDetailsContainer = () => {
  return (
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

  )
}

export default CustomerDetailsContainer
