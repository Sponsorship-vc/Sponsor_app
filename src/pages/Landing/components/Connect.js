import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
function Connect() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#C2E5FF] h-screen'>
       <div class="flex items-center justify-center flex-col">
            <h1 class="font-bold text-dark-blue text-4xl">Have Doubts? Connect with us</h1>
            <p class="mt-2 text-dark-blue">Don't wanna miss something? Subscribe right now and get special promotion and monthly newsletter</p>
            <input type='email' placeholder='  Enter your email address' className='w-[670px] h-[40px] mt-5 focus:outline-none rounded-lg pl-2'/>
            <input type="text" placeholder="Type your message" className="rounded-lg focus:outline-none mt-5 w-[670px] h-[200px] pl-2 pb-[150px] placeholder-top"/>
            <button className=' bg-dark-blue text-white w-[160px] h-[60px] rounded-lg mt-5'>Mail Us</button>
            <div className='flex flex-row justify-evenly gap-[200px] font-bold text-dark-blue mt-10'>
                <h3>©SponSir</h3>
                <div className='flex flex-row justify-evenly gap-5'>
                    <h3>Discover</h3>
                    <h3>Innovations</h3>
                    <h3>Sponsors</h3>
                    <h3>About Us</h3>
                </div>
                <div className='flex flex-row justify-evenly gap-5'>
                <FaInstagram className="w-6 h-6 text-dark-blue" />
                <FaFacebook className="w-6 h-6 text-dark-blue" />
                <FaTwitter className="w-6 h-6 text-dark-blue" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect
