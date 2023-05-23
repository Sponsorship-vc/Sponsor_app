import React from 'react'
import Sidebar from '../Roleselector/Sidebar'
import tick from '../../Assets/verify/tick.png'
function Verify() {
  return (
    <div className='flex w-screen z-[-1] flex-row mr-[-10px]'>
        <div className='z-[-1]'>
        <Sidebar/>
        </div>
        <div className='flex-1 h-screen ml-[-1rem] bg-white rounded-l-2xl flex items-center justify-center '>
            <div className='flex flex-col  justify-center items-center text-center'>
                <h1 className='font-bold text-4xl '>Thank you!</h1>
                <p className='text-[#434343] text-xl mt-7'>Thank you for registering on SponSir.Please wait till<br/> we finish our verification process</p>
                <img src={tick} alt='tick' className='h-[9rem] w-[9rem] mt-10'/>
                <h1 className='font-bold text-2xl mt-10'>Keep an eye on your email</h1>
                <p className='text-[#434343] text-xl mt-7'>Once the verification is over , you’ll get a mail from us</p>
            </div>
        </div>
    </div>
  )
}

export default Verify
