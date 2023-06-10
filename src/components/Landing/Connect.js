import React,{useState} from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
function Connect() {

  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  console.log(email,message)
  const handleMailSend =(e)=>{
    e.preventDefault()
    emailjs.send("service_y7aybwi","template_zb2ijke",{
      message: message,
      toEmail: email,
      },"63EkXHr_zHJVHSj20")
      .then((result) => {
        console.log(result);
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log(error);
      });
      setEmail('')
      setMessage('')
  }

  return (
    <div className='flex flex-col justify-center items-center bg-[#C2E5FF] min-h-screen'>
       <div className="flex items-center justify-center flex-col w-full px-4">
            <h1 className="font-bold text-dark-blue text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center my-8 md:my-12 lg:my-16 xl:my-10">Have Doubts? Connect with us</h1>
            <p className="text-dark-blue text-center mb-6 md:mb-8 lg:mb-8 xl:mb-8">Don't wanna miss something? Subscribe right now and get special promotion and monthly newsletter</p>
            <form className="w-full max-w-lg mx-auto flex flex-col">
              <input type='email' placeholder='Enter your email address' className='w-full mb-6 px-4 py-2 focus:outline-none rounded-lg' onChange={(e)=>setEmail(e.target.value)}/>
              <textarea placeholder="Type your message" className="w-full mb-6 px-4 py-2 focus:outline-none rounded-lg resize-none h-48 placeholder-top" onChange={(e)=>setMessage(e.target.value)}/>
              <button className='bg-dark-blue text-white w-full py-3 rounded-lg' onClick={handleMailSend}>Mail Us</button>
            </form>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center font-bold text-dark-blue mt-10 md:gap-[10rem]'>
                <h3>©SponSir</h3>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mt-4 md:mt-0'>
                    <h3>Discover</h3>
                    <h3>Innovations</h3>
                    <h3>Sponsors</h3>
                    <h3>About Us</h3>
                </div>
                <div className='flex flex-row justify-center items-center gap-5 mt-4 md:mt-0'>
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
