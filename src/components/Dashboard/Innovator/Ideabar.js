import React from 'react' 
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import {  storage , db , auth } from "../../../firebase/config";
import {
  collection,
  addDoc,
} from "firebase/firestore";

const Ideabar = () => {
  const [fileName, setFileNames] = useState('');
    const [fileUploaded, setFileUploaded] = useState(false);
    const [fileUpload, setFileUpload] = useState(null);
    const ideaCollectionRef = collection(db, "Ideas");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const [a, seta] = useState("");
    const [b, setb] = useState("");
    const [c, setc] = useState("");
    const [d, setd] = useState("");
    const [e, sete] = useState("");
    const [f, setf] = useState("");
    const [g, setg] = useState("");
    const [h, seth] = useState("");

    

    
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
    const filesFolderRef = ref(storage, `Ideas/${auth.currentUser.uid}/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmituser = async () => {
    try {
      await addDoc(ideaCollectionRef, {
        title: a,
        Problem: b,
        fundingRequirement:c,
        category:d,
        Solution:e,
        model: f,
        property:g,
        teamDetails:h,
        filepath:"need to set",
        userId:auth.currentUser.uid,
        date:formattedDate,
      });
      uploadFile();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='ml-64'>
      <div className='mx-8  rounded-xl border-2'>
        <div className='bg-[#30397F] rounded-t-xl h-20'>
          <p className='text-lg px-6 font-bold text-white py-6'>Idea Details</p>
        </div>
          <div className='p-4 flex h-full rounded-b-xl flex-col bg-white md:flex-row'>
            <div className='flex-1 flex flex-col  p-2 gap-y-2 '>
              <p className='text[#303972] font-bold'>Idea Title</p>
              <textarea type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" placeholder='Give suitable title for you idea' onChange={(e) => seta(e.target.value)} />

              <p className='text[#303972] font-bold'>Problem Statement</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none" onChange={(e) => setb(e.target.value)}/>

              <p className='text[#303972] font-bold'>Funding Requriements</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none " onChange={(e) => setc(e.target.value)}/>

              <p className='text[#303972] font-bold'>Images | pdfs</p>
              <label className="w-full mb-6 px-4 py-2 border focus:outline-none rounded h-20">
                <div id="iconDiv" className="flex flex-col  p-2">
                  <p className="text-gray-400 flex justify-center">Click here to upload</p>
                </div>
                {fileUploaded ? (
                <div className="flex flex-wrap justify-center gap-2 p-2">
                  <p className="text-gray-400 flex justify-center">{fileName}</p>
                </div>
                ) : null}
                <input type="file" id="doc" name="doc" hidden onChange={handleFileSelect}/>
            </label>

            </div>
            <div className='flex-1 flex flex-col  p-2 gap-y-2 '>
              <p className='text[#303972] font-bold'>Categories</p>
              <textarea type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" onChange={(e) => setd(e.target.value)}/>

              <p className='text[#303972] font-bold'>Solution</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none"onChange={(e) => sete(e.target.value)}/>

              <p className='text[#303972] font-bold'>Target Market & Business Model</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none"onChange={(e) => setf(e.target.value)}/>

              <p className='text[#303972] font-bold'>Intellectual Property</p>
              <textarea type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none"onChange={(e) => setg(e.target.value)} placeholder='Information on any patents, trademarks, or copyrights related to the idea'/>
              <p className='text[#303972] font-bold'>Team Details</p>
              <textarea type="email"  multiple className="border h-12 border-gray-300 rounded w-full p-2 resize-none" onChange={(e) => seth(e.target.value)} placeholder='Enter email address of team members'/>

            </div>
          </div>
      </div>
      <div className='text-right  px-8 py-8'>
        <button className="mx-4 inline-block text-sm px-6 py-3 leading-none border rounded-full text-gray-800 border-gray-800 lg:mt-0 font-bold">Save as Draft</button>
        <button className="inline-block text-sm px-6 py-3 leading-none border rounded-full text-white bg-gray-800 hover:bg-gray-900 lg:mt-0 font-bold" onClick={onSubmituser}>Submit</button>
      </div>
    </div>
  )
}

export default Ideabar