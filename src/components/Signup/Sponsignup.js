import React from 'react'
import Sidebar from '../../components/Roleselector/Sidebar'
import icon from '../../Assets/Signup/Vector.png'
import { useState } from 'react';

function Sponsignup() {const [fileUploaded, setFileUploaded] = useState(false);
    const [fileName, setFileNames] = useState('');
  
    function handleFileSelect(event) {
      const files = event.target.files;
      if (files.length > 0) {
        const fileNames = [];
        for (let i = 0; i < files.length; i++) {
          fileNames.push(files[i].name);
        }
        setFileUploaded(true);
        setFileNames(fileNames);
        const iconDiv = document.getElementById('iconDiv');
        iconDiv.classList.add('hidden');
      }
    }
  
    return (
      <div className='flex w-screen z-[-1] flex-row mr-[-10px]'>
        <div className='z-[-1]'>
  
        <Sidebar/>
        </div>
        <div className='flex-1 ml-[-1rem] bg-white rounded-l-2xl flex items-center justify-center'>
          <div className='flex flex-col mx-8'>
          <p className='font-abc text-4xl text-center font-semibold py-10'> Register your account as a Sponsor </p>
          <div className='flex flex-col gap-2'>
            <input  placeholder='Your name' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
            <input  placeholder='Your company mail' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
            <input  placeholder='Create Password' type='password' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl'/>
            <label className="w-full mb-6 px-4 py-2 border focus:outline-none rounded-2xl">
              <div id="iconDiv" className="flex flex-col gap-2 py-4">
                <img src={icon} className="flex justify-center mx-auto" />
                <p className="text-gray-400 flex justify-center">Upload your legal documents to verify your sponsorship status</p>
                <p className="text-gray-400 flex justify-center">Click here to upload</p>
              </div>
              {fileUploaded ? (
                <div className="flex flex-wrap justify-center gap-2 py-4">
                {fileName.map((fileName) => (
                <p className="text-gray-400 flex justify-center">{fileName}</p>
                ))}
                </div>
              ) : null}
              <input type="file" id="doc" name="doc" hidden multiple onChange={handleFileSelect}/>
            </label>
            <p className='text-gray-400 text-center w-3/4 flex mx-auto'>By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
            <button className='w-[600px] mx-auto my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg'>Register</button>
            <a href='/login/role/sponsor'className='text-blue-500 font-bold text-md text-center flex mx-auto'>Already have an SponSir account? Log in</a>
          </div>
         </div>
        </div>
      </div>
  )
}

export default Sponsignup