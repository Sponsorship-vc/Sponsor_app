import React from 'react'
import Card from '../../components/Roleselector/Card'
import grp1 from '../../Assets/Roleselector/Group1.png'
import grp2 from '../../Assets/Roleselector/Group2.png'
import Sidebar from '../../components/Roleselector/Sidebar'
function Roleselector() {
  return (
    <div className='flex w-screen flex-row'>
      <div className='z-[-1]'>
        <Sidebar/>
      </div>
      {/* need to make responsive */}
      <div className='flex-1  ml-[-1rem] bg-white rounded-l-2xl '>
        <div className='w-full text-center py-16'>
        <p className='font-abc text-4xl  font-semibold'> Choose Your Account Type </p>
      </div>
      <div className='flex w-full justify-center gap-20 px-10 flex-row mx-auto '>
        <div className=''>
                <Card
                 img={grp2}
                 title="Innovator" 
                 button="Continue as Innovator" />
        </div>
        <div className=''>
                <Card
                 img={grp1} 
                 title="Sponsor"
                 button="Continue as Sponsor" /> 
        </div>            
        </div> 
      </div>
    </div>
  )
}

export default Roleselector


