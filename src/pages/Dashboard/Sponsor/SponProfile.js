import React from 'react'
import Header from '../../../components/Dashboard/Header'
import EditProfilecard from '../../../components/Dashboard/Sponsor/profile/EditProfilecard'

function SponProfile() {
  return (
    <div className='overflow-x-hidden  flex flex-col relative bg-[#F3F4FF]'>
        <Header/>
        <EditProfilecard />
    </div>
  )
}

export default SponProfile