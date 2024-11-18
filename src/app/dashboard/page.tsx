import React from 'react'
import CardContainer from '../../components/dashboard/CardContainer'
import GraphContainer from '../../components/dashboard/GraphContainer'
import MenuContainer from '@/components/dashboard/MenuContainer'

const page = () => {
  return (
    <div>
      <CardContainer/>
      <GraphContainer/>
      <MenuContainer/>
    </div>
  )
}

export default page