import React from 'react'
import Card from '../../components/Roleselector/Card'
import grp1 from '../../Assets/Roleselector/Group1.png'
import grp2 from '../../Assets/Roleselector/Group2.png'

const roleselector = () => {
  return (
    <div className='h-screen bg-[#F8F8F8]'>
      <div className=' text-center py-16' >
        <p className='font-abc text-4xl  font-semibold'> Choose Your Account Type </p>
      </div>
      <div className='flex justify-center gap-20 px-10 flex-wrap '>
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
  )
}

export default roleselector



