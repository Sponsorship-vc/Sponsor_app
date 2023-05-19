import React , {  useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { userData } from '../../data/Userdata';



function Header() {

  const location = useLocation();
  const path = location.pathname
  const message = path.split('/').pop();
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

    <div className='flex-1 flex flex-row px-8 justify-between ml-64 py-4'>
    <div>
      <p>{message}</p>
    </div>
    <div className='flex flex-row gap-x-8'>
        <div class="h-12 w-12 rounded-full flex bg-gray-400">
            <FaBell className='  m-auto' />
        </div>

        {userList.map((user) => (
            <div>
                <p>{user.name}</p>
                <p>{user.role}</p>
            </div>
            
        ))}
        <div class="h-12 w-12 rounded-full flex bg-gray-400">
            <FiUser className='m-auto'/>
        </div>
    </div>


    </div>

  )
}

export default Header
