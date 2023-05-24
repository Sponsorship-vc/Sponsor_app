import React , {  useState , useEffect } from 'react';
import {AiFillLinkedin, AiFillGithub ,AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import Edit from '../../../../Assets/Dashboard/Icons/edit.svg'
import { userData } from '../../../../data/Userdata';
import { db  } from "../../../../firebase/config";
import { doc ,updateDoc } from "firebase/firestore";

function Socialcard() {
  // const [List, setList] = useState([]);
  const [g, setg] = useState("");
  const [l, setl] = useState("");
  const [f, setf] = useState("");
  const [i, seti] = useState("");
  const [edit, setEdit] = useState(false);
  const [Id, setId] = useState("");


//  const socials = 
//  [{id:<AiFillLinkedin/> ,content:"https:linkedin.com"},
//   {id:<AiFillGithub/> ,content:"https:linkedin.com"},
//   {id:<AiFillInstagram/> ,content:"https:linkedin.com"},
//   {id:<BsFacebook/> ,content:"https:linkedin.com"},
// ]

useEffect(() => {
  userData.then(
    (value) => {
      setId(value[0].id);
      // setList(value[0].social_media);
      // console.log(List)
      setg(value[0].social_media.github ? value[0].social_media.github : "");
      setl(value[0].social_media.linkdin ? value[0].social_media.linkdin : "");
      seti(value[0].social_media.instagram ? value[0].social_media.instagram : "");
      setf(value[0].social_media.facebook ? value[0].social_media.facebook : "");
      
    },
    (reason) => {
      console.error(reason); // Error!
    }
  );
}, []);


const handleEdit = () => {
  if(edit){
    updateDetails();
  }
  setEdit(!edit);
};

const updateDetails = async () => {
  const userDoc = doc(db, "users", Id);
  
  console.log(Id)
  await updateDoc(userDoc, { 
    social_media:{
      github:g,
      linkdin:l,
      instagram:i,
      facebook:f,
    }
  });
};


  return (
    <div className='bg-white mt-5 text-dark-blue ml-[17rem] relative max-w-full  rounded-xl mr-5 overflow-hidden pb-6 mb-8'>
      <div className='ml-7 '>
        <div className='flex flex-row items-center jusitfy-between mt-0'>
        <h1 className='text-dark-blue font-bold text-2xl flex-initial'>Social Media Handles</h1>
        <img src={Edit} className='h-20 w-20 ml-auto cursor-pointer' onClick={handleEdit}/>
        </div>
        <p className='text-gray-400 text-xs !mt-[-1%]'>Your personal socialmedia profiles</p>
      </div>
      {!edit &&(
              <div className='grid grid-cols-3 grid-rows-2 gap-4 ml-5  gap-y-6 mt-5'>
              {l &&(
              <div className='flex flex-row gap-x-3 justify-start items-center'>
                <AiFillLinkedin/>
                <a href={l} className='font-semibold'>{l}</a>
              </div>
              )}
              {g &&(
              <div className='flex flex-row gap-x-3 justify-start items-center'>
                <AiFillGithub/>
                <a href={g} className='font-semibold'>{g}</a>
              </div>
              )}
              {i && (
      
              <div className='flex flex-row gap-x-3 justify-start items-center'>
                <AiFillInstagram/>
                <a href={i} className='font-semibold'>{i}</a>
              </div>
              )}
      
              {f && (
              <div className='flex flex-row gap-x-3 justify-start items-center'>
              <BsFacebook/>
                <a href={f} className='font-semibold'>{f}</a>
              </div>
              )}
              {!l && !g && !i && !f && (<p>Add account</p>)}
            </div>
      )}
      {edit &&(
                      <div className='grid grid-cols-3 grid-rows-2 gap-4 mx-5  gap-y-6 mt-5'>
                      <div className='flex flex-row gap-x-3 justify-start items-center'>
                        <AiFillLinkedin/>
                        <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                        value={l}
                        onChange={(e) => setl(e.target.value)}/>
                      </div>
                      <div className='flex flex-row gap-x-3 justify-start items-center'>
                        <AiFillGithub/>
                        <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                        value={g}
                        onChange={(e) => setg(e.target.value)}/>                      </div>
            
                      <div className='flex flex-row gap-x-3 justify-start items-center'>
                        <AiFillInstagram/>
                        <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                        value={i}
                        onChange={(e) => seti(e.target.value)}/>
                      </div>
              
                      <div className='flex flex-row gap-x-3 justify-start items-center'>
                      <BsFacebook/>
                      <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                        value={f}
                        onChange={(e) => setf(e.target.value)}/>
                      </div>
                    </div>
      )}

    </div>
  )
}

export default Socialcard
