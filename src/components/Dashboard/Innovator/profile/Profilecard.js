import React, { useState, useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import {IoPersonCircleOutline} from 'react-icons/io5'
import { db ,storage} from '../../../../firebase/config';
import edit from '../../../../Assets/Dashboard/Icons/edit.svg'
import { userData } from '../../../../data/Userdata';
import { Link } from 'react-router-dom';
import { ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { doc ,updateDoc,setDoc } from "firebase/firestore";

function SkeletonLoader() {
  return (
    <div className="animate-pulse bg-gray-200 h-5 w-full mr-4 mb-2 rounded-md"></div>
  );
}

function Profilecard() {
  
  const [userList, setuserList] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [add3, setAdd3] = useState("");
  const [add4, setAdd4] = useState("");
  const [pin, setPin] = useState("");
  const [bio, setBio] = useState("");
  const [Id, setId] = useState("");
  const [interest, setInterest] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileNames] = useState('');
  const [fileUpload, setFileUpload] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState("");
  const [loading, setLoading] = useState(true);
  



    useEffect(() => {
      userData.then(
        (value) => {
          setuserList(value)
          // console.log(value);
          setName(value[0].name ? value[0].name : "");
          setCity(value[0].City ? value[0].City : "");
          setPhno(value[0].Phoneno ? value[0].Phoneno : "");
          setEmail(value[0].email ? value[0].email : "");
          setDob(value[0].dob ? value[0].dob : "");
          setAdd1(value[0].add1 ? value[0].add1 : "");
          setAdd2(value[0].add2 ? value[0].add2 : "");
          setAdd3(value[0].add3 ? value[0].add3 : "");
          setAdd4(value[0].add4 ? value[0].add4 : "");
          setPin(value[0].pin ? value[0].pin : "");
          setBio(value[0].bio ? value[0].bio : "");
          setInterest(value[0].interest ? value[0].interest : "");
          setId(value[0].id);
          setSelectedPicture(value[0].photoURL? value[0].photoURL : "")
        },
        (reason) => {
          console.error(reason); // Error!
        }
      );
    }, []);
    const handlePictureUpload = async (event) => {
      const imageFile = event.target.files[0];
    
      try {
        // Create a reference to the image in Firebase Storage
        const imageRef = ref(storage, `${userList[0].userId}/${imageFile.name}`);
        const imgLocRef = ref(storage, `UserImages/${userList[0].userId}/${imageFile.name}`);
    
        // Upload the image to Firebase Storage
        await uploadBytes(imgLocRef, imageFile);
    
        // Get the URL of the uploaded image
        const imageUrl = await getDownloadURL(imgLocRef);
        console.log("pfp success");
    
        // Save the URL of the image in the Firestore document
        await setDoc(doc(db, "users", userList[0].id), {
          photoURL: imageUrl
        }, { merge: true });
    
        setSelectedPicture(URL.createObjectURL(imageFile));
      } catch (error) {
        console.error("Error uploading picture:", error);
      }
    };

  const handleClick = () => {
    // Trigger the file input when the profile picture is clicked
    document.getElementById('profile-picture-input');
  };

  const handleFileSelect = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const fileName = file.name;
      setFileUploaded(true);
      setFileNames([fileName]);
      const iconDiv = document.getElementById('iconDiv');
      iconDiv.classList.add('hidden');
      setFileUpload(file);
      await uploadFile(file);
    }
  };
  
  const uploadFile = async (file) => {
    const filesFolderRef = ref(storage, `Resume/${Id}/${file.name}`);
    try {
      await uploadBytes(filesFolderRef, file);
      const userDoc = doc(db, "users", Id);
        await updateDoc(userDoc, { 
            filepath:`Resume/${Id}/${file.name}`
        });
    } catch (err) {
      console.error(err);
    }
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
  <div className='bg-[rgb(48,57,114)] h-[6rem] w-full rounded-t-xl justify-start flex flex-row gap-x-[35rem] max-w-content'>
    <div className='h-[8rem] w-[8rem] rounded-full bg-white m-5 items-center justify-center flex z-0'>
      <label htmlFor='profile-picture-input'>
        { selectedPicture ? (
          <img
            src={selectedPicture}
            className='m-auto !h-[7.2rem] !w-[7.2rem] rounded-full bg-white cursor-pointer'
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
    <div className='mb-0 flex relative '>
      <div className='w-[10rem] h-[5rem] rounded-b-full bg-[#FCC43E] transform rotate-180 !top-4 left-10 absolute z-25'></div>
      <div className='w-[8rem] h-[4rem] rounded-b-full bg-[#FB7D5B] transform rotate-180 !top-8 absolute z-0'></div>
    </div>
  </div>
  <div className='mt-[4rem] relative h-auto'>
    <div className='flex flex-row justify-between max-h-6 items-start'>
      <h2 className='font-bold text-dark-blue ml-5 text-2xl flex-initial'>{name}</h2>
      <Link to='/dashboard/innovator/profile/edit'>
        <img src={edit} alt='edit' className='h-20 w-20 cursor-pointer mr-4' />
      </Link>
    </div>
    <h4 className='text-gray-500 ml-5 mt-2'>Innovator</h4>
    <div className='grid grid-cols-3 grid-rows-2 gap-4 ml-5 mt-2 gap-y-10'>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Location</label>
            <div className='flex flex-row gap-4 mt-3'>
              <GrLocation className='mt-1' fill='#FB7D5B' />
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p className='- text-dark-blue'>{city ? city : 'Add City'}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Phone number</label>
            <div className='flex flex-row gap-4 mt-3'>
              <BsFillTelephoneFill className='mt-1' fill='#FB7D5B' />
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p className='font-semibold text-dark-blue'>{phno ? phno : 'Add phno'}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Email id</label>
            <div className='flex flex-row gap-4 mt-3'>
              <MdEmail className='mt-1' fill='#FB7D5B ' size={20} />
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p className='font-semibold text-dark-blue'>{email ? email : 'Add email'}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Date of birth</label>
            <div className='flex flex-row gap-4 mt-3'>
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p className='font-semibold text-dark-blue'>{dob ? dob : 'Add Dob'}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Address</label>
            <div className='flex flex-row gap-4 mt-3'>
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p className='font-semibold text-dark-blue'>
                  {add1 ? (
                    <>
                      {add1}
                      {add2}
                      {add3}
                      {add4}
                    </>
                  ) : (
                    'Add address'
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
        <hr className='bg-black w-full mt-5'></hr>
        <div className='flex flex-col ml-5 gap-y-10 mt-5 '>
          <div>
            <label className='text-[#A098AE]'>Bio</label>
            <div className='flex flex-row gap-4 mt-3'>
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p className='font-semibold text-dark-blue'>{bio ? bio : 'Add bio'}</p>
              )}
            </div>
            <hr className='bg-black w-full mt-5'></hr>
          </div>
          <div className='flex flex-row gap-[30rem] mb-5'>
            <div className='flex flex-col'>
              <label className='text-[#A098AE]'>Resume</label>
              <div className='flex flex-row gap-4 mt-3 relative'>
                <label className='h-12 w-[15rem] rounded-lg border border-dotted border-gray-400 bg-transparent flex items-center justify-center'>
                  <div id='iconDiv' className='flex flex-col gap-2'>
                    <p className='text-gray-400 flex justify-center'>Click here to upload</p>
                  </div>
                  {fileUploaded ? (
                    <div className='flex flex-wrap justify-center gap-2 py-4'>
                      <p className='text-gray-400 flex justify-center'>{fileName}</p>
                    </div>
                  ) : null}
                  <input type='file' id='doc' name='doc' hidden onChange={handleFileSelect} />
                </label>
              </div>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#A098AE]'>Interest</label>
              <div className='flex flex-row gap-2 mt-3'>
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  interest.length > 0 &&
                  interest.map((content, index) => (
                    <p key={index} className="font-semibold text-dark-blue">
                      {content}
                      {index !== interest.length - 1 && ' , '}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
