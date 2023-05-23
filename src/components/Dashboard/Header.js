import React , {  useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { userData } from '../../data/Userdata';



function Header() {

  const location = useLocation();
  const path = location.pathname
  const message = path.split('/').pop();
  const capitalizedMessage = message.charAt(0).toUpperCase() + message.slice(1);

  const [userList, setuserList] = useState([]);

  userData.then(
    (value) => {
      setuserList(value)
      // console.log(value); // Success!
    },
    (reason) => {
      console.error(reason); // Error!
    },
  );

  return (

    <div className='flex-1 flex flex-row px-8 justify-between ml-64 py-4 items-center '>
    <div>
      <p className='font-bold text-2xl text-dark-blue'>{capitalizedMessage}</p>
    </div>
    <div className='flex flex-row gap-x-8'>
        <div class="h-12 w-12 rounded-full flex bg-white">
            <FaBell className='  m-auto' />
        </div>

        {userList && userList.map((user) => (
            <div>
                <p className='font-bold text-dark-blue'>{user.name}</p>
                <p className='text-sm text-gray-500 ml-3'>{user.role}</p>
            </div>
            
        ))}
        <div class="h-12 w-12 rounded-full flex bg-white">
            <FiUser className='m-auto'/>
        </div>
    </div>


    </div>

  )
}

export default Header
