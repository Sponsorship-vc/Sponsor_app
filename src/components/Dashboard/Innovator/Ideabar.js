import React from 'react' 
import { useEffect,useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import {  storage , db ,app } from "../../../firebase/config";
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth"








const Ideabar = () => {
  const [fileName, setFileNames] = useState('');
    const [fileUploaded, setFileUploaded] = useState(false);
    const [fileUpload, setFileUpload] = useState(null);
    const usersCollectionRef = collection(db, "users");
    const auth = getAuth(app);
    const [userList, setuserList] = useState([]);
    const [Name ,setName] = useState(`users/errorpath/ideas`);
    // const name = `users/${userList[0].id}/ideas`;
    const ideaCollectionRef = collection(db, Name);

    

  

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
    const filesFolderRef = ref(storage, `${Name}/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmituser = async () => {
    try {
      await addDoc(ideaCollectionRef, {
        a: a,
        b: b,
        c:c,
        d:d,
        e:e,
        f: f,
        g:g,
        h:h,
        filepath:"need to set",
      });
      uploadFile();
    } catch (err) {
      console.error(err);
    }
  };
  const getuserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).filter((doc) => doc.userId === auth.currentUser.uid);
      setuserList(filteredData);
      setName(`users/${filteredData[0].id}/ideas`)
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    getuserList();
    console.log(Name)
  }, []);



  return (
    <div className='ml-64'>
      <div className='mx-8 rounded-xl border-2'>
        <div className='bg-[#30397F] rounded-t-xl h-20'>
          <p className='text-lg px-6 font-bold text-white py-6'>Idea Details</p>
        </div>
          <div className='p-4 flex h-full flex-row'>
            <div className='flex-1 flex flex-col  p-2 gap-y-2 '>
              <p className='text[#303972] font-bold'>Idea Title</p>
              <input type="text" className="border h-10 border-gray-300 rounded w-full p-2" placeholder='Give suitable title for you idea' onChange={(e) => seta(e.target.value)}/>

              <p className='text[#303972] font-bold'>Problem Statement</p>
              <input type="text" className="border h-36 border-gray-300 rounded w-full p-2" onChange={(e) => setb(e.target.value)}/>

              <p className='text[#303972] font-bold'>Funding Requriements</p>
              <input type="text" className="border h-36 border-gray-300 rounded w-full p-2" onChange={(e) => setc(e.target.value)}/>

              <p className='text[#303972] font-bold'>Images | pdfs</p>
              <label className="w-full mb-6 px-4 py-2 border focus:outline-none rounded h-20">
                <div id="iconDiv" className="flex flex-col gap-2 p-2">
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
              <input type="text" className="border h-10 border-gray-300 rounded w-full p-2" onChange={(e) => setd(e.target.value)}/>

              <p className='text[#303972] font-bold'>Solution</p>
              <input type="text" className="border h-36 border-gray-300 rounded w-full p-2"onChange={(e) => sete(e.target.value)}/>

              <p className='text[#303972] font-bold'>Target Market & Business Model</p>
              <input type="text" className="border h-36 border-gray-300 rounded w-full p-2"onChange={(e) => setf(e.target.value)}/>

              <p className='text[#303972] font-bold'>Intellectual Property</p>
              <input type="text" className="border h-10 border-gray-300 rounded w-full p-2"onChange={(e) => setg(e.target.value)}/>
              <p className='text[#303972] font-bold'>Team Details</p>
              <input type="text" className="border h-10 border-gray-300 rounded w-full p-2" onChange={(e) => seth(e.target.value)}/>

            </div>
          </div>
      </div>
      <div className='text-right  mx-8 my-8'>
        <button className="mx-4 inline-block text-sm px-6 py-3 leading-none border rounded-full text-gray-800 border-gray-800 lg:mt-0 font-bold">Save as Draft</button>
        <button className="inline-block text-sm px-6 py-3 leading-none border rounded-full text-white bg-gray-800 hover:bg-gray-900 lg:mt-0 font-bold" onClick={onSubmituser}>Submit</button>
      </div>
    </div>
  )
}

export default Ideabar