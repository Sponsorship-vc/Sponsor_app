import React, { useState, useEffect } from 'react';
import { GrLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { userData } from '../../../../data/Userdata';
import { db, storage } from '../../../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import edit from '../../../../Assets/Dashboard/Icons/edit.svg';

function SkeletonLoader() {
  return (
    <div className='animate-pulse bg-gray-200 h-5 w-3/4 mr-4 mb-2 rounded-md'></div>
  );
}

function Profilecard() {
  const [userList, setuserList] = useState([]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [add3, setAdd3] = useState('');
  const [add4, setAdd4] = useState('');
  const [pin, setPin] = useState('');
  const [bio, setBio] = useState('');
  const [Id, setId] = useState('');
  const [iname, setIname] = useState('');
  const [web, setWeb] = useState('');
  const [selectedPicture, setSelectedPicture] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userData.then(
      (value) => {
        setuserList(value);
        setIname(value[0].iname ? value[0].iname : '');
        setWeb(value[0].website ? value[0].website : '');
        setName(value[0].name ? value[0].name : '');
        setCity(value[0].City ? value[0].City : '');
        setPhno(value[0].Phoneno ? value[0].Phoneno : '');
        setEmail(value[0].email ? value[0].email : '');
        setAdd1(value[0].add1 ? value[0].add1 : '');
        setAdd2(value[0].add2 ? value[0].add2 : '');
        setAdd3(value[0].add3 ? value[0].add3 : '');
        setAdd4(value[0].add4 ? value[0].add4 : '');
        setPin(value[0].pin ? value[0].pin : '');
        setBio(value[0].bio ? value[0].bio : '');
        setId(value[0].id);
        setSelectedPicture(value[0].photoURL ? value[0].photoURL : '');
      },
      (reason) => {
        console.error(reason);
      }
    );
  }, []);

  const handlePictureUpload = async (event) => {
    const imageFile = event.target.files[0];

    try {
      const imageRef = ref(storage, `${userList[0].userId}/${imageFile.name}`);
      const imgLocRef = ref(storage, `UserImages/${userList[0].userId}/${imageFile.name}`);
      await uploadBytes(imgLocRef, imageFile);
      const imageUrl = await getDownloadURL(imgLocRef);
      console.log('pfp success');
      await setDoc(doc(db, 'users', userList[0].id), {
        photoURL: imageUrl,
      }, { merge: true });
      setSelectedPicture(URL.createObjectURL(imageFile));
    } catch (error) {
      console.error('Error uploading picture:', error);
    }
  };

  const handleClick = () => {
    document.getElementById('profile-picture-input').click();
  };

  useEffect(() => {
    let isTimerExpired = false;
    let isDataLoaded = false;

    const checkLoadingState = () => {
      if (isTimerExpired && isDataLoaded) {
        setLoading(false);
      }
    };

    if (name) {
      isDataLoaded = true;
      checkLoadingState();
    }

    const timer = setTimeout(() => {
      isTimerExpired = true;
      checkLoadingState();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [name]);

  return (
    <div className='flex max-w-full ml-[17rem] rounded-xl flex-col bg-white mr-5'>
      <div className='bg-[rgb(48,57,114)] h-[6rem] w-full rounded-t-xl justify-start flex flex-row gap-x-[35rem]'>
        <div className='h-[8rem] w-[8rem] rounded-full bg-white m-5 items-center justify-center flex z-0'>
          <label htmlFor='profile-picture-input'>
            {selectedPicture ? (
              <img
                src={selectedPicture}
                className='m-auto h-[7.2rem] w-[7.2rem] rounded-full bg-white cursor-pointer'
                alt='Profile Picture'
                onClick={handleClick}
              />
            ) : (
              <IoPersonCircleOutline className='m-auto h-[8rem] w-[8rem] rounded-full bg-white cursor-pointer' fill='#303972'/>
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
          <div className='w-[10rem] h-[5rem] rounded-b-full bg-[#FCC43E] transform rotate-180 !top-4 left-10 absolute z-10'></div>
          <div className='w-[8rem] h-[4rem] rounded-b-full bg-[#FB7D5B] transform rotate-180  !top-8   absolute z-0'></div>
        </div>
      </div>
      <div className='my-[4rem] relative h-auto'>
        <div className='flex flex-row justify-between max-h-6 items-start'>
          <h2 className='font-bold text-dark-blue ml-5 text-2xl flex-initial'>{name}</h2>
          <Link to='/dashboard/sponsor/profile/edit'>
            <img src={edit} alt='edit' className='h-20 w-20 cursor-pointer mr-4' />
          </Link>
        </div>
        <h4 className='text-gray-500 ml-5 mt-2'>Admin</h4>
        <hr className='bg-black w-full mt-5'></hr>
        <div className='gap-44 ml-5 mt-4 gap-y-10'>
          <div className='grid grid-cols-4 gap-20'>
            <div className='flex flex-col'>
              <label className='text-[#A098AE]'>Phone</label>
              <div className='flex flex-row gap-4 mt-3'>
                <BsFillTelephoneFill className='flex my-auto' fill='#FB7D5B' />
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    {phno ? (
                      <p className='- text-dark-blue'>{phno}</p>
                    ) : (
                      <p className='- text-dark-blue'>Add Phone no.</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#A098AE]'>Email</label>
              <div className='flex flex-row gap-4 mt-3'>
                <MdEmail className='flex my-auto' fill='#FB7D5B ' size={20} />
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    {email ? (
                      <p className='- text-dark-blue'>{email}</p>
                    ) : (
                      <p className='- text-dark-blue'>Add Email</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#A098AE]'>Website</label>
              <div className='flex flex-row gap-4 mt-3'>
                <MdEmail className='flex my-auto' fill='#FB7D5B ' size={20} />
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    {web ? (
                      <p className='- text-dark-blue'>{web}</p>
                    ) : (
                      <p className='- text-dark-blue'>Add Website</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <hr className='bg-black w-full mt-5'></hr>
          <div className='grid grid-cols-4 mt-4 gap-20'>
            <div className='col-start-1 col-end-2'>
              <label className='text-[#A098AE]'>Industry</label>
              <div className='flex flex-row gap-4 mt-3'>
                <GrLocation className='flex my-auto' fill='#FB7D5B' />
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    {iname ? (
                      <p className='- text-dark-blue'>{iname}</p>
                    ) : (
                      <p className='- text-dark-blue'>Add Industry Name</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className='col-start-2 col-end-3'>
              <label className='text-[#A098AE]'>Registration Certificate</label>
              <div className='flex flex-row gap-4 mt-3 relative'>
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    <input
                      type='file'
                      className='opacity-0 absolute inset-0 z-0 h-15 w-[15rem]'
                    />
                    <div className='h-12 w-[15rem] rounded-lg border border-dotted border-gray-400 bg-transparent flex items-center justify-center'>
                      <span className='text-gray-400'>Click here to Upload</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className='col-start-3 col-end-4'>
                <label className='text-[#A098AE]'>GST Certificate</label>
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
              
            <div className='col-start-1 col-span-2'>
              <label className='text-[#A098AE]'>Office Address</label>
              <div className='flex flex-row gap-4 mt-3'>
                <GrLocation className='flex my-auto' fill='#FB7D5B' />
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    {add1 ? (
                      <p className='- text-dark-blue'>{add1}</p>
                    ) : (
                      <p className='- text-dark-blue'>Add Address</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <hr className='bg-black w-full mt-5'></hr>

          <div className='grid grid-cols-4 mt-4 gap-10'>
            <label className='text-[#A098AE]'>Company Description</label>
            <div className='col-start-1 col-end-5'>
              {loading ? (
                <SkeletonLoader />
              ) : (
                <>
                  {bio ? (
                    <p className='- text-dark-blue'>{bio}</p>
                  ) : (
                    <p className='- text-dark-blue'>Add Company Description</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className='bg-black w-full mt-5'></hr>
    </div>
  );
}

export default Profilecard;
