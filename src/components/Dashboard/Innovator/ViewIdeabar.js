import React,{useContext}  from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { ideasData } from '../../../data/Userdata';
import { useState ,useEffect } from 'react';
import  Dots  from '../../../Assets/Dashboard/Icons/Dots.png'
import  Edit  from '../../../Assets/Dashboard/Icons/Vector.png'
import { Link } from 'react-router-dom';
import {BsChatLeftDots} from 'react-icons/bs'
import {ChatContext} from '../../../context/ChatContext'
import { userData } from '../../../data/Userdata';

function ViewIdeabar() {
    const location = useLocation();
    const path = location.pathname
    const message = path.split('/').pop();
    const [post, setpost] = useState([]);
    const navigate = useNavigate()
    const { dispatch } = useContext(ChatContext);
    const [userList,setuserList] = useState('')
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        ideasData.then(
         (value) => {
            const filteredValues =  value.filter((value) => value.id === message)
            setpost(filteredValues);
          },
          (reason) => {
            console.error(reason); // Error!
          }
        );
      }, [message])
      
      const handleChat = (user) => {
        // console.log(`user handlechat ${JSON.stringify(user)}`)
        dispatch({ type: "CHANGE_USER", payload: user });
        navigate(`/dashboard/sponsor/chat`);

      }

      useEffect(()=>{
        userData.then(
          (value) => {
            setuserList(value[0]);
          },
          (reason) => {
            console.error(reason);
          }
        );
      },[])

      useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        // Clean up timer on component unmount
        return () => clearTimeout(timer);
      }, []);
      

  return (
    <div className='ml-64 py-8'>
    {loading ? (
         <div className='mx-8 rounded-xl bg-white p-4'>
         <div className='flex flex-col gap-2'>
           <div className='flex flex-row justify-between'>
             <div className='w-40 h-8 bg-gray-300'></div>
             <div className='flex flex-row gap-8 justify-center items-center mr-5'>
               <div className='w-10 h-10 bg-gray-300'></div>
               <div className='w-10 h-10 bg-gray-300'></div>
             </div>
           </div>
           <div className='flex flex-row gap-1 justify-start items-start'>
             <div className='w-16 h-6 bg-gray-300'></div>
             <div className='w-16 h-6 bg-gray-300'></div>
             <div className='w-16 h-6 bg-gray-300'></div>
           </div>
           <div className='font-bold text-[#303972] text-md pt-2'>
             Problem Statement
           </div>
           <div className='w-3/4 h-4 bg-gray-300'></div>
           <div className='font-bold text-[#303972] text-md pt-2'>
             Related documents
           </div>
           <div className='w-40 h-4 bg-gray-300'></div>
         </div>
         <div className='flex flex-col md:flex-row py-2 gap-4'>
           <div className='flex flex-col gap-1 flex-1'>
             <div className='font-bold text-[#303972] text-lg pt-4'>Solution</div>
             <div className='w-full h-4 bg-gray-300'></div>
             <div className='font-bold text-[#303972] text-lg pt-4'>
               Funding Requirements
             </div>
             <div className='w-full h-4 bg-gray-300'></div>
           </div>
           <div className='flex flex-col gap-1 flex-1'>
             <div className='font-bold text-[#303972] text-lg pt-4'>
               Target Market & Business Model
             </div>
             <div className='w-full h-4 bg-gray-300'></div>
             <div className='font-bold text-[#303972] text-lg pt-4'>
               Intellectual Property
             </div>
             <div className='w-full h-4 bg-gray-300'></div>
             <div className='font-bold text-[#303972] text-lg pt-4'>Team Details</div>
             <div className='w-full h-4 bg-gray-300'></div>
           </div>
         </div>
       </div>
      ) : (
        <div>
        {post.map((post) => (
            <div className='mx-8  rounded-xl bg-white p-4'>
                <div className='flex flex-col gap-2 '>
                    <div className='flex flex-row justify-between'> 
                        <p className='font-bold text-[#303972] text-3xl py-2'>{post.title}</p>
                        <div className='flex flex-row gap-8 justify-center items-center mr-5'>
                            {userList.role ==="innovator" ?( <Link to={`/dashboard/innovator/ideasubmission/${post.id}`}>
                                <img src={Edit} className="h-5"
                                title="Edit"
                                />
                            </Link>) : (
                            <div className='flex justify-center items-center cursor-pointer bg-[#C1BBEB] text-dark-blue py-2 px-4 h-3/4 text-sm rounded-xl gap-2 '>
                                <button  onClick={() => handleChat(post)}>Chat</button>
                                <BsChatLeftDots/>
                            </div>)}
                            {/* <img src={Dots} className="h-5"/> */}
                        </div>
                    </div>
                    <div className='flex flex-row gap-1 justify-start items-start '>
                    {Array.isArray(post.category) && post.category.map((category, index) => (
                        <p
                        className='bg-[#C1BBEB] rounded-2xl min-w-content min-h-content px-3 py-1 text-xs flex  text-[#303972]'>{category}
                        </p>
                        ))}
                        </div>
                    <p className='font-bold text-[#303972] text-md pt-2'>Problem Statement</p>
                    {post.Problem ? (
                        <p className='font-normal text-sm text-gray-600 w-3/4'>{post.Problem}</p>
                        ) :<p className='font-normal text-sm text-gray-700'>Some text here</p>}
                    <p className='font-bold text-[#303972] text-md pt-2'>Related documents</p>
                    <p className='font-normal text-sm text-gray-600'>{post.filepath}</p>
                </div>
                <div className='flex flex-col md:flex-row py-2 gap-4'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <p className='font-bold text-[#303972] text-lg pt-4'>Solution</p>
                        {post.Solution ? (
                            <p className='font-normal text-sm text-gray-700'>{post.Solution}</p>
                        ) :<p className='font-normal text-sm text-gray-700'>SOme text here</p>}
                        <p className='font-bold text-[#303972] text-lg pt-4'>Funding Requirements</p>
                        {post.fundingRequirement ? (
                            <p className='font-normal text-sm text-gray-700'>{post.fundingRequirement}</p>
                        ) :<p className='font-normal text-sm text-gray-700'>SOme text here</p>}
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <p className='font-bold text-[#303972] text-lg pt-4'>Target Market & Business Model</p>
                        {post.model ? (
                            <p className='font-normal text-sm text-gray-700'>{post.model}</p>
                        ) :<p className='font-normal text-sm text-gray-700'>SOme text here</p>}
                        <p className='font-bold text-[#303972] text-lg pt-4'>Intellectual Property</p>
                        {post.property ? (
                            <p className='font-normal text-sm text-gray-700'>{post.property}</p>
                        ) :<p className='font-normal text-sm text-gray-700'>SOme text here</p>}
                        <p className='font-bold text-[#303972] text-lg pt-4'>Team Details</p>
                        {post.teamDetails ? (
                        <p className='font-normal text-sm text-gray-700'>{post.teamDetails}</p>
                        ) :<p className='font-normal text-sm text-gray-700'>SOme text here</p>}
                    </div>
                </div>
            </div>
        ))}
        </div>
    )}
    </div>
  )
}

export default ViewIdeabar