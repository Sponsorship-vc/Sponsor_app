import React from 'react'
import Header from '../../../components/Dashboard/Header'
import Profilecard from '../../../components/Dashboard/Innovator/profile/Profilecard'
import Socialcard from '../../../components/Dashboard/Innovator/profile/Socialcard'
function InnProfile() {
  return (
    <div className='overflow-x-hidden  flex flex-col relative bg-[#F3F4FF]'>
      <Header />
        <Profilecard />
        <Socialcard />
      </div>
  )
}

export default InnProfile