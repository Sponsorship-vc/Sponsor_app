import React from 'react'
import Sidebar from '../Roleselector/Sidebar'
import googleImg from '../../Assets/Signup/Google Login.png'

function Innlogin() {
  return (
    <div className='flex w-screen z-[-1] flex-row mr-[-10px]'>
    <div className='z-[-1]'>
        <Sidebar/>
    </div>
    <div className='flex-1 ml-[-1rem] bg-white rounded-l-2xl flex items-center justify-center'>
        <div className='flex flex-col'>
            <p className='font-abc text-4xl text-center font-semibold py-10'> Login to your Innovator account </p>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <input  placeholder='Enter your company mail' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
                <input  placeholder='Enter your Password' type='password' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
                <p className='text-xs text-gray-500 r'>By signing up, you confirm that you’ve read <br/>and accepted our <a className='text-blue-500 cursor-pointer'  href="https://www.example.com/user-notice">User Notice</a> and <a className='text-blue-500 cursor-pointer' href="https://www.example.com/privacy-policy">Privacy Policy</a>.</p>
                {/* <a href='/dashboard/innovator'><button className=' w-full my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg'>Login</button> </a> */}
                <a href='/dashboard/innovator' className='w-full text-center my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg'>Login</a>

                <p className='text-blue-500 cursor-pointer text-sm text-center flex mx-auto'>Don’t  have an SponSir account? Register</p>
                <p className='text-md text-gray-500'>Or</p>
                <img src={googleImg}/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Innlogin
