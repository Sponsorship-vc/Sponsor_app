import React from 'react'
import Sidebar from '../../components/Roleselector/Sidebar'
import icon from '../../Assets/Signup/Vector.png'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { ref, uploadBytes } from "firebase/storage";
import { app } from '../../firebase/config';
import {  storage } from "../../firebase/config";
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from 'react-router-dom';


function Sponsignup() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [fileName, setFileNames] = useState('');
    const [fileUpload, setFileUpload] = useState(null);
    const usersCollectionRef = collection(db, "users");
    const auth = getAuth(app);
    const [userList, setuserList] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate()

  
    function handleFileSelect(event) {
      const files = event.target.files;
      if (files.length > 0) {
        const fileNames = [];
        fileNames.push(files[0].name);
        setFileUploaded(true);
        setFileNames(fileNames);
        const iconDiv = document.getElementById('iconDiv');
        iconDiv.classList.add('hidden');
        setFileUpload(event.target.files[0])
        // console.log(files)
      }
    }

    const uploadFile = async () => {
      if (!fileUpload) return;
      const filesFolderRef = ref(storage, `Authentication/${name}/${fileUpload.name}`);
      try {
        await uploadBytes(filesFolderRef, fileUpload);
      } catch (err) {
        console.error(err);
      }
    }

    const onSubmituser = async () => {
      try {
        await addDoc(usersCollectionRef, {
          name: name,
          email: auth.currentUser.email,
          role:"sponsor",
          filepath:`Authentication/${name}/${fileName}`,
          userId: auth.currentUser.uid,
          verify:false,
          likedIdeas: [],
        });
        navigate('/sponsor/verify')
      } catch (err) {
        console.error(err);
      }
    };

  

    const handleRegister=()=>{
      createUserWithEmailAndPassword(auth,email, password)
        .then(function(user) {
          // User is signed up
          onSubmituser();
          uploadFile();
          setError(null);
          setName(user.displayName);

          // console.log(user.displayName)
        })
        .catch(function(error) {
          // Error signing up user
          setError(error.message);
        });
    }
  
    return (
      <div className='flex w-screen z-[-1] flex-row mr-[-10px] overflow-hidden h-screen'>
        <div className='z-[-1] h-full'>
        <Sidebar/>
        </div>
        <div className='flex-1 ml-[-1rem] bg-white rounded-l-2xl flex pt-6 pb-10  justify-center overflow-x-hidden'>
          <div className='flex flex-col mx-8'>
          <p className='font-abc text-4xl text-center font-semibold py-10'> Register your account as a Sponsor </p>
          <div className='flex flex-col gap-2'>
            <input  placeholder='Your name' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'  onChange={(e) => setName(e.target.value)}/>
            <input  placeholder='Your company mail' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2x' type='email'    onChange={(e) => setEmail(e.target.value)}/>
            <input  placeholder='Create Password' type='password' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'onChange={(e) => setPassword(e.target.value)}/>
            <label className="w-full mb-6 px-4 py-2 border focus:outline-none rounded-2xl">
              <div id="iconDiv" className="flex flex-col gap-2 py-4">
                <img src={icon} className="flex justify-center mx-auto" />
                <p className="text-gray-400 flex justify-center">Upload your legal documents to verify your sponsorship status</p>
                <p className="text-gray-400 flex justify-center">Click here to upload</p>
              </div>
              {fileUploaded ? (
                <div className="flex flex-wrap justify-center gap-2 py-4">
                  <p className="text-gray-400 flex justify-center">{fileName}</p>
                </div>
              ) : null}
              <input type="file" id="doc" name="doc" hidden onChange={handleFileSelect}/>
            </label>
            <p className='text-gray-400 text-center w-3/4 flex mx-auto'>By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
            <button className='w-[600px] mx-auto my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg'onClick={handleRegister}>Register</button>
            <a href='/login/role/sponsor'className='text-blue-500  text-md text-center flex mx-auto mb-5'>Already have an SponSir account? Log in</a>
          </div>
         </div>
        </div>
      </div>
  )
}

export default Sponsignup