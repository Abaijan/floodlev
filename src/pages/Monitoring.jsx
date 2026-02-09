import React from 'react'
import Filters from '../components/monitoring/filters'
import Cards from '../components/monitoring/cards'
import WaterLevelChart from '../components/monitoring/chart'
export const Monitoring = () => {
  return (
    <div className='monitoring-page'>
        <Filters/>
        {/* <Cards/> */}
        {/* <WaterLevelChart/> */}
    </div>
  )
}

