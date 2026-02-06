import React from 'react'
import Filters from '../components/home/filters'
import Cards from '../components/home/cards'
import WaterLevelChart from '../components/home/chart'
export const Home = () => {
  return (
    <div className='home-page'>
        <Filters/>
        <Cards/>
        <WaterLevelChart/>
    </div>
  )
}

