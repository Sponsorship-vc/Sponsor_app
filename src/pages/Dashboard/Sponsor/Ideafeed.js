import React from 'react'
import Filterideas from '../../../components/Dashboard/Sponsor/ideafeed/Filter/Filterideas'
import Header from '../../../components/Dashboard/Header'
import Ideas from '../../../components/Dashboard/Sponsor/ideafeed/ideas'
import { OptionsProvider } from '../../../context/optionContext'

function Ideafeed() {
  return (
    <div className='bg-[#F3F4FF] h-screen overflow-scroll '>
      <Header/>
      <div className='flex flex-row gap-3 items-start'>
      <OptionsProvider>
        
        <Filterideas/>
        <Ideas/>
      </OptionsProvider>
      </div>
    </div>
  )
}

export default Ideafeed
