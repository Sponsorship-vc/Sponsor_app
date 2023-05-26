import React from 'react'
import Filterideas from '../../../components/Dashboard/Sponsor/ideafeed/Filter/Filterideas'
import Header from '../../../components/Dashboard/Header'
import Ideas from '../../../components/Dashboard/Sponsor/ideafeed/ideas'
function Ideafeed() {
  return (
    <div className='bg-[#F3F4FF] h-screen overflow-scroll '>
      <Header/>
      <div className='flex flex-row gap-x-5'>
        <Filterideas/>
        <Ideas/>
      </div>
    </div>
  )
}

export default Ideafeed
