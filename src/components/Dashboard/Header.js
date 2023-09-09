import React, { useState,useEffect, useContext} from 'react';
// import { FaBell } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { useLocation,useNavigate } from 'react-router-dom';
import { userData } from '../../data/Userdata';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const message = path.split('/').pop();
  const capitalizedMessage = message.charAt(0).toUpperCase() + message.slice(1);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate()
  const [userList, setuserList] = useState([]);
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;

  useEffect(()=>{
    userData.then(
      (value) => {
        setuserList(value);
      },
      (reason) => {
        console.error(reason);
      }
    );
  },[])
  

  const toggleDropdown = () => {
    // e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOutFunc = () => {
    signOut(auth).then(() => {
      console.log('signout')
    }).catch((error) => {
      // An error happened.
    });
    
  };


  const handleDeleteAccount = () => {
    setShowConfirmation(true);
  };

  const confirmDeleteAccount = () => {
    // Perform delete account logic here
    // ...

    // After successfully deleting the account, you can redirect the user or perform any other actions
  };

  const cancelDeleteAccount = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="flex-1 flex flex-row px-8 justify-between ml-64 py-4 items-center">
      <div>
        <p className="font-bold text-2xl text-dark-blue">{capitalizedMessage}</p>
      </div>
      <div className="flex flex-row gap-x-8">
        {/* <div className="h-12 w-12 rounded-full flex bg-white">
          <FaBell className="m-auto" />
        </div> */}

        {userList &&
          userList.map((user) => (
            <div key={user.id}>
              <p className="font-bold text-dark-blue">{user.name}</p>
              <p className="text-sm text-gray-500 ">{user.role}</p>
            </div>
          ))}

        <div className="relative">
          <div
            className="h-12 w-12 rounded-full flex bg-white cursor-pointer"
            onClick={()=>toggleDropdown()}
          >
            <FiUser className="m-auto" />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-30">
              <div className="py-2">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleSignOutFunc}
                >
                  Sign Out
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {showConfirmation && (
        <div className="relative inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-40">
          <div className="bg-white rounded-lg p-6">
            <p className="text-xl font-bold mb-4">Delete Account</p>
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                onClick={confirmDeleteAccount}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={cancelDeleteAccount}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;