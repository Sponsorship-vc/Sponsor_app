import React from 'react'
import Heroimg from '../../../Assets/heroimg.png'
import Brands from '../../../Assets/Brands.png'
function Hero() {
  return (
    <div>
        <div className='flex md:flex-row mt-[110px] ml-[8%] flex-col h-full w-full'>
            <div className='mt-[-25px]'>
                <h1 className='font-bold text-dark-blue text-6xl '>Transform<br/>Your ideas<br/>into reality</h1>
                <p className='font-semibold mt-5 text-gray-600'>Connecting Sponsors and Creative Thinkers to Drive<br/> Impactful Projects</p>
                <div>
            <div className="bg-white shadow-2xl rounded-lg p-4 w-[680px] h-[75px]  flex-row hidden md:flex">
                    <div className="flex flex-col ">
                        <h2 className="text-lg font-semibold text-gray-800">Innovation categories</h2>
                        <p className='text-gray-600 text-sm'>What kind of innovative ideas do you want to sponsor ?</p>
                    </div>
                    <button className="bg-blue-950 text-white font-bold py-2 px-8 rounded ml-[9.5rem] text-sm">
                        Explore now
                    </button>
                </div>
                <p className='font-semibold mt-4'>Popular Search:  Electric Vehicles , Green Energy, Education </p>
                </div>
            </div>
            <div className='!m-[-75px] !ml-[-355px] z-[-1] '>
                <img src={Heroimg} alt='heroimg'  className="object-contain w-[750px] h-[750px] ml-[200px] mt-[-70px]"/>
            </div>
        </div>
        <img src={Brands}/>
    </div>
  )
}

export default Hero
