import React from 'react'
import bgImg from '../../Assets/Roleselector/Bg.png'
import logo from '../../Assets/Roleselector/whitelogo.png'
import Typed from 'react-typed'
import {useNavigate} from 'react-router-dom'
import {IoArrowBackCircle} from 'react-icons/io5'
function Sidebar() {
  const navigate = useNavigate()
  const handleLogoClick =()=>{
      navigate('/')
  }

  return (
    <div onClick={handleLogoClick}  className=' z-[-1] '>
        <div className="bg-[#1D263A] max-w-full/3 h-screen flex flex-col  overflow-hidden !z-4">
            <img src={bgImg} className="w-full h-full" alt="Background Image" />
              <div className="absolute top-[3.75rem] left-[1rem]">
                <div className='flex flex-row gap-5 justify-start items-center !z-5'>
                    <IoArrowBackCircle  className="text-white cursor-pointer" size={30}/>
                    <img src={logo} alt="Logo" className='cursor-pointer' onClick={handleLogoClick}/>
                </div>
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
