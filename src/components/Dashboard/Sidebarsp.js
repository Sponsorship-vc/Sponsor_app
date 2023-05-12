import React from 'react'
import logo from '../../Assets/Roleselector/whitelogo.png'
import Icon1 from '../../Assets/Dashboard/Icons/Icon1.png'
import Icon2 from '../../Assets/Dashboard/Icons/Icon2.png'
import Icon3 from '../../Assets/Dashboard/Icons/Icon3.png'
import Icon4 from '../../Assets/Dashboard/Icons/Icon4.png'
import Icon5 from '../../Assets/Dashboard/Icons/Icon5.png'
import Icon6 from '../../Assets/Dashboard/Icons/Icon6.png'
import Icon7 from '../../Assets/Dashboard/Icons/Icon7.png'
import Icon8 from '../../Assets/Dashboard/Icons/Icon8.png'
import {Link , Outlet} from 'react-router-dom'

const Sidebar = (props) => {
  return (
   
<div>


<div id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 translate-x-0" aria-label="Sidebar">
   <div class="h-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
     <a href="https://flowbite.com/" class="flex text-center items-center justify-center p-5  mb-5">
         <img src={logo} class="h-8 mr-3  sm:h-7" alt="Flowbite Logo" />
        
      </a>
      <ul class=" flex-grow p-2 font-medium">
          <li class='ml-5'>
            <Link to="/dashboard/sponsor" class="flex text-xs items-center p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
               <img src={Icon1} class="h-4 mr-3 sm:h-7"/>
               <span class="ml-3">Dashboard</span>
            </Link>
         </li> 
              
         <li class='ml-5'>
            <Link to="idea" class="flex text-xs items-center p-2 text-gray-400 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={Icon2} class="h-6 mr-3 sm:h-7"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Sponsorship details</span>
            </Link>  
            
         </li>
         <li class='ml-5'>
            <a href="#" class="flex text-xs items-center p-2 text-gray-400 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={Icon3} class="h-6 mr-3 sm:h-7"/>
               <span class="flex-1 ml-3 whitespace-nowrap">{props.title3}</span>
            </a>
         </li>
         
         <li class='ml-5'>
            <a href="#" class="flex text-xs  items-center p-2 text-gray-400 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={Icon4} class="h-6 mr-3 sm:h-7"/>
               <span class="flex-1 ml-3 whitespace-nowrap">{props.title4}</span>
            </a>
         </li>
         <li class='ml-5'>
            <a href="#" class="flex text-xs items-center p-2 text-gray-400 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={Icon5} class="h-6 mr-3 sm:h-7"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Chat</span>
               <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Premium</span>
            </a>
         </li>
         <li class='ml-5'>
            <a href="#" class="flex  text-xs items-center p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={Icon6} class="h-6 mr-3 sm:h-7"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Notifications</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li class='ml-5'>
            <a href="#" class="flex text-xs items-center p-2 text-gray-400 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={Icon7} class="h-6 mr-3 sm:h-7"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Account Settings</span>
            </a>
         </li>
         <li class='ml-5'>
            <a href="#" class="flex text-xs items-center p-2 text-gray-400 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={Icon8} class="h-6 mr-3 sm:h-7"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Help Center</span>
            </a>
         </li>
      </ul>

      <div class='text-white justify-center mt-auto flex items-center text-xs text-center gap-2'><img class='h-3' src={logo}/>- Innovators Dashboard</div>
   </div>
</div>
<Outlet/>
</div>
  )
}

export default Sidebar