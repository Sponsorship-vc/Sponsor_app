import React from 'react'
import Header from '../../../components/Dashboard/Header'
import LikedIdeas from '../../../components/Dashboard/Sponsor/ideafeed/liked'
import { OptionsProvider } from '../../../context/optionContext'

function Liked() {
  return (
    <div className='bg-[#F3F4FF] ml-64 h-screen overflow-scroll '>
    <Header/>
    <div className='flex flex-row gap-3 items-start'>
    <OptionsProvider>
    <LikedIdeas />
      
      {/* <Filterideas/> */}
      
    </OptionsProvider>
    </div>
  </div>
  )
}

export default Liked