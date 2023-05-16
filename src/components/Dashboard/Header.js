import React from 'react'
import { FaBell } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import {
    getDocs,
    collection,
  } from "firebase/firestore";
  import { db } from "../../firebase/config";
  import { useEffect, useState } from "react";
  import { getAuth } from "firebase/auth"
  import { app } from '../../firebase/config';




function Header() {

  const location = useLocation();
  const path = location.pathname
  const message = path.split('/').pop();
  const [userList, setuserList] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const auth = getAuth(app);
  const user = userList[0]

  const getuserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).filter((doc) => doc.userId === auth.currentUser.uid);
      setuserList(filteredData);
      console.log(userList)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getuserList();
  }, []);

  

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
