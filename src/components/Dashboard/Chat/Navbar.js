import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../../firebase/config'
import { AuthContext } from '../../../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='flex items-center bg-white h-[50px] p-[10px] justify-between text-dark-blue  font-bold'>
      <span>Messages</span>
    </div>
  )
}

export default Navbar