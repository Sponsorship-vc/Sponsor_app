import React from 'react'
import Heroimg from '../../Assets/Landing/heroimg.png'
import Brands from '../../Assets/Landing/Brands.png'
import {Link} from 'react-router-dom'
function Hero() {
  return (
    <div>
        <div className='flex md:flex-row flex-col h-full w-full'>
            <div className=' mx-auto md:mx-0 pt-[85px] md:pl-[12%]'>
                <h1 className='font-bold text-dark-blue text-4xl sm:text-6xl '>Transform<br/>Your ideas<br/>into reality</h1>
                <p className='font-semibold mt-5 text-gray-600'>Connecting Sponsors and Creative Thinkers to Drive<br/> Impactful Projects</p>
                <div>
            <div className="bg-white shadow-2xl rounded-lg p-4 w-[680px] h-[75px] flex justify-between flex-row hidden md:flex">
                    <div className="flex flex-col ">
                        <h2 className="text-lg font-semibold text-gray-800">Innovation categories</h2>
                        <p className='text-gray-600 text-sm'>What kind of innovative ideas do you want to sponsor ?</p>
                    </div>
                    <Link to='/login/role'>
                    <button className="bg-blue-950 text-white font-bold py-2 px-8 rounded text-sm">
                        Explore now
                    </button>
                    </Link>
                </div>
                <p className='font-semibold mt-4'>Popular Search:  Electric Vehicles , Green Energy, Education </p>
                </div>
            </div>
            <div className='md:ml-[-250px] md:mt-[0px] mt-[-140px] z-[-1] '>
                <img src={Heroimg} alt='heroimg'  className="object-contain w-[750px] h-[750px]"/>
            </div>
        </div>
        <img src={Brands}/>
    </div>
  )
}

export default Hero
