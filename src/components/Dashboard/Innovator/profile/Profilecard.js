import React, { useState, useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import pfp from '../../../../Assets/Dashboard/pfp.png';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../../../../firebase/config';
import Socialcard from '../../../../components/Dashboard/Innovator/profile/Socialcard'
import edit from '../../../../Assets/Dashboard/Icons/edit.svg'
function Profilecard() {
  const user = 0;
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [userList, setUserList] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    setSelectedPicture(URL.createObjectURL(file));
  };

  const handleClick = () => {
    // Trigger the file input when the profile picture is clicked
    document.getElementById('profile-picture-input').click();
  };

  const getuserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((doc) => doc.userId === auth.currentUser.uid);
      setUserList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getuserList();
  }, []);

  return (
    <div className='flex h-[30rem] max-w-full ml-[17rem] rounded-xl flex-col !bg-white mr-5 '>
      <div className='bg-[rgb(48,57,114)] h-1/5 w-full rounded-t-xl justify-start flex flex-row gap-x-[35rem]'>
        <div className='h-[8rem] w-[8rem] rounded-full bg-white m-5 items-center justify-center flex z-0'>
          <label htmlFor='profile-picture-input'>
            {user.pfp ? (
              <img
                src={user.pfp}
                className='m-auto h-[6rem] w-[6rem] rounded-full bg-white cursor-pointer'
                alt='Profile Picture'
                onClick={handleClick}
              />
            ) : (
              <img
                src={pfp}
                className='m-auto h-[7.5rem] w-[7.5rem] rounded-full bg-white cursor-pointer z-[15]'
                alt='Profile Picture'
                onClick={handleClick}
              />
            )}
          </label>
          <input
            type='file'
            accept='image/*'
            id='profile-picture-input'
            onChange={handlePictureUpload}
            className='hidden'
          />
        </div>
        <div className='mb-0 flex relative'>
          <div className='w-[10rem] h-[5rem] rounded-b-full bg-[#FCC43E] transform rotate-180 !top-4 left-5 absolute z-10'></div>
          <div className='w-[8rem] h-[4rem] rounded-b-full bg-[#FB7D5B] transform rotate-180  !top-8   absolute z-0'></div>
        </div>
      </div>
      <div className='mt-[4rem] relative'>
        <div className='gap-x-[45rem] flex flex-row '>
          <h2 className='font-bold text-dark-blue ml-5 text-2xl '>Lookman paul</h2>
          {/* <button className='rounded-xl z-[10] border border-blue-950 p-2'>Edit profile</button> */}
          <img src={edit} alt='edit' className='h-20 w-20 cursor-pointer'/>
        </div>
        <h4 className='text-dark-blue ml-5'>Innovator</h4>
        <div className='grid grid-cols-3 grid-rows-2 gap-4 ml-5 mt-2 gap-y-10'>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Country</label>
            <div className='flex flex-row gap-4 mt-3'>
              <GrLocation className='mt-1' fill='FB7D5B' />
              <p className='- text-dark-blue'>Kerala, india</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Phone number</label>
            <div className='flex flex-row gap-4 mt-3'>
              <BsFillTelephoneFill className='mt-1' fill='#FB7D5B' />
              <p className='font-semibold text-dark-blue'>9562784981</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Email id</label>
            <div className='flex flex-row gap-4 mt-3'>
              <MdEmail className='mt-1' fill='#FB7D5B ' size={20} />
              <p className='font-semibold text-dark-blue'>i.dheerajdileep@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Date of birth</label>
            <div className='flex flex-row gap-4 mt-3'>
              <p className='font-semibold text-dark-blue'>25/12/2002</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Address</label>
            <div className='flex flex-row gap-4 mt-3'>
              <p className='font-semibold text-dark-blue'>
                Peringayil, p.o chittissery, pulakkartukara, Kerala
              </p>
            </div>
          </div>
        </div>
        <hr className='bg-black w-full mt-5'></hr>
        <div>
          <div className='flex flex-col ml-5 gap-y-10 mt-5'>
            <div>
              <label className='text-[#A098AE]'>Bio</label>
              <div className='flex flex-row gap-4 mt-3'>
                <p className='font-semibold text-dark-blue'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <hr className='bg-black w-full mt-5'></hr>
            </div>
            <div className='flex flex-row gap-[30rem]'>
              <div className='flex flex-col'>
                <label className='text-[#A098AE]'>Resume</label>
                <div className='flex flex-row gap-4 mt-3 relative'>
                  <input
                    type='file'
                    class='opacity-0 absolute inset-0 z-0 h-15 w-[15rem]'
                  />
                  <div class='h-12 w-[15rem] rounded-lg border border-dotted border-gray-400 bg-transparent flex items-center justify-center'>
                    <span class='text-gray-400'>Click here to Upload</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='text-[#A098AE]'>Interest</label>
                <div className='flex flex-row gap-4 mt-3'>
                  <p className='font-semibold text-dark-blue'>Web3, Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
