import React from 'react' 
import { useState ,useRef } from "react";
import { ref, uploadBytes } from "firebase/storage";
import {  storage , db , auth } from "../../../firebase/config";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import '../../../index.css';




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
    const [d, setd] = useState([]);
    const [e, sete] = useState("");
    const [f, setf] = useState("");
    const [g, setg] = useState("");
    const [h, seth] = useState("");    
    const [draft, setdraft] = useState(true);
    const [inputValue, setInput] = useState("");    
    const [category, setCategory] = useState("");    
    const [tags, setTags] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [suggestions, setSuggestions] = useState([]);


  
    const onAddteam = () => {
        const tagValue = inputValue;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(tagValue);
      
        // Check if the tag value is not empty and does not exceed four values
        if (isValidEmail && !tags.includes(tagValue) && tags.length < 4) {
          setTags([...tags, tagValue]);
          setInput('');
          setErrorMessage('');
        } else if (tags.length >= 4) {
          setErrorMessage('You can only add up to 4 teammates.');
        } else {
          setErrorMessage('Invalid email address.');
        }
    };

    
  const onRemoveTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    // Update suggestions based on the input value
    if (value.trim() !== '') {
      updateSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const updateSuggestions = (value) => {
    // Implement your logic to fetch suggestions based on the input value
    // For example, you can filter a list of valid words or make an API call to retrieve suggestions
    const filteredSuggestions = ['apple', 'banana', 'orange'].filter((word) =>
      word.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setCategory(suggestion);
    setSuggestions([]);
  };

    
    const onAddCategory = () => {
      const tagValue = category;
      if (tagValue && !d.includes(tagValue)) {
        setd([...d, tagValue]);
        setCategory('');
        setSuggestions([]);
      }
  }; 

  const onRemoveCat = (index) => {
    const updatedTags = [...d];
    updatedTags.splice(index, 1);
    setd(updatedTags);
  };
    
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
  const onDraftuser = () =>{
    setdraft(false);
    onSubmituser();
  }

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
        teamDetails:tags,
        filepath:"need to set",
        userId:auth.currentUser.uid,
        date:formattedDate,
        draft:draft,
      });
      uploadFile();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // <div className='ml-64'>
    //   <div className='mx-8  rounded-xl border-2'>
    <div className='  max-w-full ml-[17rem] rounded-xl flex-col bg-white mr-5 '>
      <div className='bg-[rgb(48,57,114)]  w-full rounded-t-xl   gap-x-[35rem]'>

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
              <input 
                 className=" border h-12 border-gray-300 rounded w-full p-2 resize-none"
                 onChange={handleChange}
                 value={category}
                 onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    onAddCategory();
                  }
                 }}
              />
              {suggestions.length > 0 && (
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
              <div className='flex flex-row gap-4'>
               {d.map((tag, index) => (
                  <div key={index} className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-full mr-2 mt-2">
                  <span className="mr-2">{tag}</span>
                  <button
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                  onClick={() => onRemoveCat(index)}
                  >
                    <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M17.292 6.292l-1.415-1.415L12 10.586 7.122 5.707 5.707 7.122 10.586 12l-4.88 4.88 1.415 1.415L12 13.414l4.878 4.88 1.414-1.415L13.414 12l4.878-4.878z"
                    />
                    </svg>
                  </button>
                </div>
                 ))}
              </div>
                 
              <p className='text[#303972] font-bold'>Solution</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none"onChange={(e) => sete(e.target.value)}/>

              <p className='text[#303972] font-bold'>Target Market & Business Model</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none"onChange={(e) => setf(e.target.value)}/>

              <p className='text[#303972] font-bold'>Intellectual Property</p>
              <textarea type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none"onChange={(e) => setg(e.target.value)} placeholder='Information on any patents, trademarks, or copyrights related to the idea'/>
              <p className='text[#303972] font-bold'>Team Details</p>
              <div className='flex flex-row'>
                 <input 
                 type="email"
                 className="customLook border h-12 border-gray-300 rounded w-full p-2 resize-none"
                 placeholder='Enter email address of team members'
                 onChange={(e) => setInput(e.target.value)} 
                 value={inputValue}
                 onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    onAddteam();
                  }
                 }}
                 />
                  <button onClick={() => onAddteam()}>+</button>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <div>
              {tags.map((tag, index) => (
                <div key={index} className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-full mr-2 mt-2">
                  <span className="mr-2">{tag}</span>
                  <button
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                  onClick={() => onRemoveTag(index)}
                  >
                    <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M17.292 6.292l-1.415-1.415L12 10.586 7.122 5.707 5.707 7.122 10.586 12l-4.88 4.88 1.415 1.415L12 13.414l4.878 4.88 1.414-1.415L13.414 12l4.878-4.878z"
                    />
                    </svg>
                  </button>
                </div>
              ))}
              </div>
            </div>
          </div>
      </div>
      <div className='text-right  px-8 py-8'>
        <button className="mx-4 inline-block text-sm px-6 py-3 leading-none border rounded-full text-gray-800 border-gray-800 lg:mt-0 font-bold"
        onClick={onDraftuser}>Save as Draft</button>
        <button className="inline-block text-sm px-6 py-3 leading-none border rounded-full text-white bg-gray-800 hover:bg-gray-900 lg:mt-0 font-bold" 
        onClick={onSubmituser}>Submit</button>
      </div>
    </div>
  )
}

export default Ideabar