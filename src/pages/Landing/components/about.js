import React from 'react'
import about from '../../../Assets/about.png'
function About() {
  return (
        <div className='flex flex-col bg-[#C2E5FF] pb-20 lg:h-full mt-10 lg:flex-row'>    

         {/* set colour  */}
            <div className='h:1/2 lg:w-1/2 lg:h-full  px-[8%] pt-40'>
                <p className='font-bold text-2xl'>About us </p>
                <p className='font-bold text-dark-blue text-4xl md:text-6xl '>Platform where<br/> Innovators meet<br/> Sponsors</p>
                <p className=' py-5'>Welcome to SponSir, the platform that brings together innovators and sponsors to make impactful projects a reality. Our user-friendly platform connects you with a network of sponsors who are interested in supporting creative ideas across different fields. Whether you have an innovative idea or are looking to support an exciting project, we make it easy for you to collaborate and make a real difference.</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Check Listing</button>
            </div>
            {/* make image responsive */}
            <div className='h:1/2 lg:w-1/2 pt-40 flex items-center lg:h-full'>
                <img src={about} className=' w-636 px-[8%] lg:px-[5%] h-547 '/>

            </div>

        </div>
  )
}

export default About