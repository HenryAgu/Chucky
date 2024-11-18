import React from 'react'
import CardContainer from '../../components/dashboard/CardContainer'
import GraphContainer from '../../components/dashboard/GraphContainer'
import MenuContainer from '@/components/dashboard/MenuContainer'
import CustomerDetailsContainer from '@/components/dashboard/CustomerDetailsContainer'

const page = () => {
  return (
    <div>
      <CardContainer/>
      <GraphContainer/>
      <CustomerDetailsContainer/>
      <MenuContainer/>
    </div>
  )
}

export default page