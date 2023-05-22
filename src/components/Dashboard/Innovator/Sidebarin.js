import React from 'react'
import logo from '../../../Assets/Roleselector/whitelogo.png'
import Icon1 from '../../../Assets/Dashboard/Icons/Icon1.png'
import Icon2 from '../../../Assets/Dashboard/Icons/Icon2.png'
import Icon3 from '../../../Assets/Dashboard/Icons/Icon3.png'
import Icon4 from '../../../Assets/Dashboard/Icons/Icon4.png'
import Icon5 from '../../../Assets/Dashboard/Icons/Icon5.png'

import Icon8 from '../../../Assets/Dashboard/Icons/Icon8.png'
import { NavLink,  Outlet} from 'react-router-dom'


const Sidebarin = () => {

   
   

  return (
   
<div>
<div id="logo-sidebar" className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0 translate-x-0" aria-label="Sidebar">
   <div className="h-full flex flex-col  py-4 overflow-none bg-gray-50 dark:bg-gray-800 !w-full">
     <a href="https://youtu.be/9bZkp7q19f0" className="flex text-center items-center justify-center p-5  mb-5">
         <img src={logo} className="h-8 mr-3  sm:h-7" alt="Flowbite Logo" />
        
      </a>
      <ul className=" flex-grow  font-medium w-full">

           <li className=' ml-5  mb-2 '>
            <NavLink to="/dashboard/innovator/profile"  className={({ isActive }) =>             
              isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-full hover:text-black' : ' text-gray-400 flex p-3 text-sm font-thin'
              
               }>
               <img src={Icon1} className="h-4  mr-3 contrast-0 sm:h-7"/>
               <span className="ml-3">Profile</span>
            </NavLink>
           </li> 
          
              
         <li className='ml-5 mb-2'>
            <NavLink to="ideasubmission"  className={({ isActive }) =>
               isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-full hover:text-black' : 'text-gray-400 flex p-3 text-sm font-thin'
                }>
                     <img src={Icon2} className="h-6 mr-3 contrast-0 sm:h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Idea Submission</span>
            </NavLink>  
            
         </li>
         <li className='ml-5 mb-2'>
            <NavLink to="sponsor"  className={({ isActive }) =>
               isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-full hover:text-black' : 'text-gray-400 flex p-3 text-sm'
                }>
                <img src={Icon3} className="h-6 mr-3 contrast-0 sm:h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Sponsors</span>
               </NavLink>  
         </li>
         
         <li className='ml-5 mb-2'>
            <NavLink to="myideas"  className={({ isActive }) =>
              isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-full hover:text-black' : 'text-gray-400 flex p-3 text-sm font-thin'
                }>
                <img src={Icon4} className="h-6 mr-3 contrast-0 sm:h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">My Ideas</span>
            </NavLink>
         </li>

         <li className='ml-5 mb-2'>
             <NavLink to="chat"  className={({ isActive }) =>
                isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-full hover:text-black' : 'text-gray-400 flex p-3 text-sm font-thin'
                }>
                <img src={Icon5} className="h-6 mr-3 contrast-0  sm:h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Chat</span>

               </NavLink>
         </li>
        
        
         <li className='ml-5 mb-2'>
               <NavLink to="help"  className={({ isActive }) =>
                   isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-full hover:text-black' : 'text-gray-400 flex p-3 text-sm font-thin'
                }>
                <img src={Icon8} className="h-6 mr-3 contrast-0 sm:h-7"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Help Center</span>
               </NavLink>
         </li>
      </ul>

      <div className='text-white justify-center mt-auto flex items-center text-xs text-center gap-2'><img className='h-3' src={logo}/>- Innovators Dashboard</div>
   </div>
</div>
<Outlet/>
</div>
  )
}

export default Sidebarin