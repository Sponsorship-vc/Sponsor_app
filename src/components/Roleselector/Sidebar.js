import React from 'react'
import bgImg from '../../Assets/Roleselector/Bg.png'
import logo from '../../Assets/Roleselector/whitelogo.png'
import Typed from 'react-typed'
function Sidebar() {
  return (
    <div >
        <div className="bg-[#1D263A] w-screen/3 h-screen flex flex-col z-[-1] overflow-hidden">
            <img src={bgImg} className="w-full h-screen" alt="Background Image" />
            <div className="absolute top-[3.75rem] left-[1rem]">
                <img src={logo} alt="Logo" />
                <div className='mt-[100px]'>
                    <Typed
                    className='md:text-2xl sm:text-2xl text-xl font-bold pl-2 text-white break-words '
                    strings={['“Behind every successful person,<br/>there is a generous sponsor who<br/> believed in their potential and <br/>invested in their future “ ']}
                    typeSpeed={120}
                    loop
                    backSpeed={140}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
