import React from 'react'
import Sidebar from '../../components/Roleselector/Sidebar'
import googleImg from '../../Assets/Signup/Google Login.png'

function Innsignup() {
  return (
    <div className='flex w-screen z-[-1] flex-row mr-[-10px]'>
        <div className='z-[-1]'>
        <Sidebar/>
        </div>
        <div className='flex-1 h-screen ml-[-1rem] bg-white rounded-l-2xl flex items-center justify-center'>
          <div className='flex flex-col'>
          <p className='font-abc text-4xl text-center font-semibold py-10'> Register your account as a Innovator </p>
          <div className='flex flex-col gap-2'>
            <input  placeholder='Your name' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
            <input  placeholder='Your company mail' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
            <input  placeholder='Create Password' type='password' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
            <p className='text-gray-400 text-center w-3/4 flex mx-auto'>By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
            <button className='w-[600px] mx-auto my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg'>Register</button>
            <a href='/login/role/innovator'className='text-blue-500 font-bold text-md text-center flex mx-auto'>Already have an SponSir account? Log in</a>
            <p className='text-md text-gray-500 mx-auto'>Or</p>
            <div className='mx-auto'>
            <img src={googleImg}/>
            </div>
          </div>
         </div>
        </div>
      </div>
  )
}

export default Innsignup