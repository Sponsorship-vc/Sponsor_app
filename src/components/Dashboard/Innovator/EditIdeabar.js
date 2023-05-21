import { useState ,useEffect} from "react";
import React  from 'react';
import { useLocation } from "react-router-dom";
import { ideaData } from "../../../data/Userdata";
import { db  } from "../../../firebase/config";
import { doc ,updateDoc } from "firebase/firestore";

function EditIdeabar() {

    const [a, seta] = useState("");
    const [b, setb] = useState("");
    const [c, setc] = useState("");
    const [d, setd] = useState("");
    const [e, sete] = useState("");
    const [f, setf] = useState("");
    const [g, setg] = useState("");
    const [h, seth] = useState("");
    const location = useLocation();
    const path = location.pathname
    const message = path.split('/').pop();
    const [post, setpost] = useState([]);
    const [draft, setdraft] = useState(true);



    useEffect(() => {
        ideaData.then(
          (value) => {
            const filteredValues = value.filter((item) => item.id === message);
            setpost(filteredValues);
            // console.log(filteredValues);
            seta(filteredValues[0].title);
            setb(filteredValues[0].Problem);
            setc(filteredValues[0].fundingRequirement);
            setd(filteredValues[0].category);
            sete(filteredValues[0].Solution);
            setf(filteredValues[0].model);
            setg(filteredValues[0].property);
            seth(filteredValues[0].teamDetails);
          },
          (reason) => {
            console.error(reason); // Error!
          }
        );
      }, []);

      const onDraftuser = () =>{
        setdraft(false);
        updateIdeaTitle();
      }

      const updateIdeaTitle = async (id) => {
        const userDoc = doc(db, "Ideas", message);
        // console.log(id)
        await updateDoc(userDoc, { 
            title: a,
            Problem: b,
            fundingRequirement:c,
            category:d,
            Solution:e,
            model: f,
            property:g,
            teamDetails:h,
            filepath:"need to set",
            draft:draft,
        });
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
              <textarea type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" placeholder='Give suitable title for you idea' 
              value={a}
              onChange={(e) => seta(e.target.value)} />

              <p className='text[#303972] font-bold'>Problem Statement</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none" 
              value={b}
              onChange={(e) => setb(e.target.value)}
              />

              <p className='text[#303972] font-bold'>Funding Requriements</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none " 
              value={c}
              onChange={(e) => setc(e.target.value)}/>

              <p className='text[#303972] font-bold'>Images | pdfs</p>
              {/* <label className="w-full mb-6 px-4 py-2 border focus:outline-none rounded h-20">
                <div id="iconDiv" className="flex flex-col  p-2">
                  <p className="text-gray-400 flex justify-center">Click here to upload</p>
                </div>
                {fileUploaded ? (
                <div className="flex flex-wrap justify-center gap-2 p-2">
                  <p className="text-gray-400 flex justify-center">{fileName}</p>
                </div>
                ) : null}
                <input type="file" id="doc" name="doc" hidden onChange={handleFileSelect}/>
            </label> */}
            <p>need to fix</p>

            </div>
            <div className='flex-1 flex flex-col  p-2 gap-y-2 '>
              <p className='text[#303972] font-bold'>Categories</p>
              <textarea type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" 
              value={d}
              onChange={(e) => setd(e.target.value)}/>

              <p className='text[#303972] font-bold'>Solution</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none"
              value={e}
              onChange={(e) => sete(e.target.value)}/>

              <p className='text[#303972] font-bold'>Target Market & Business Model</p>
              <textarea type="text" className="border h-36 border-gray-300 rounded w-full p-2 resize-none"
              value={f}
              onChange={(e) => setf(e.target.value)}/>

              <p className='text[#303972] font-bold'>Intellectual Property</p>
              <textarea type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none"
              value={g}
              onChange={(e) => setg(e.target.value)} placeholder='Information on any patents, trademarks, or copyrights related to the idea'/>
              <p className='text[#303972] font-bold'>Team Details</p>
              <textarea type="email"  multiple className="border h-12 border-gray-300 rounded w-full p-2 resize-none" 
              value={h}
              onChange={(e) => seth(e.target.value)} placeholder='Enter email address of team members'/>

            </div>
          </div>
      </div>
      <div className='text-right  px-8 py-8'>
        <button className="mx-4 inline-block text-sm px-6 py-3 leading-none border rounded-full text-gray-800 border-gray-800 lg:mt-0 font-bold" onClick={onDraftuser}>Save as Draft</button>
        <button className="inline-block text-sm px-6 py-3 leading-none border rounded-full text-white bg-gray-800 hover:bg-gray-900 lg:mt-0 font-bold" onClick={updateIdeaTitle}>Submit</button>
      </div>
    </div>
  )
}

export default EditIdeabar