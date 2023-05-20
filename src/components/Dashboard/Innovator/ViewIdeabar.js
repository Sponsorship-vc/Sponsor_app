import React  from 'react'
import { useLocation } from 'react-router-dom';
import { ideaData } from '../../../data/Userdata';
import { useState ,useEffect } from 'react';
import  Dots  from '../../../Assets/Dashboard/Icons/Dots.png'
import  Edit  from '../../../Assets/Dashboard/Icons/Vector.png'

function ViewIdeabar() {
    const location = useLocation();
    const path = location.pathname
    const message = path.split('/').pop();
    const [post, setpost] = useState([]);


    useEffect(() => {
        ideaData.then(
          (value) => {
            const filteredValues = value.filter((item) => item.id === message);
            setpost(filteredValues);
            console.log(filteredValues);
          },
          (reason) => {
            console.error(reason); // Error!
          }
        );
      }, []);
      


  return (
    <div className='ml-64 py-8'>
        {post.map((post) => (
            <div className='mx-8  rounded-xl bg-white p-4'>
                <div className='flex flex-col gap-2 '>
                    <div className='flex flex-row justify-between'> 
                        <p className='font-bold text-[#303972] text-3xl py-2'>{post.title}</p>
                        <div className='flex flex-row gap-4'>
                            <img src={Edit} className="h-5"/>
                            <img src={Dots} className="h-5"/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5'>
                    {post.category && (
                        <p className='font-normal text-white text-md bg-[#4D44B5] px-3 py-1 rounded-full '>{post.category}</p>
                    )}
                    </div>
                    

                    <p className='font-bold text-[#303972] text-md pt-2'>Problem Statement</p>
                    {post.Problem ? (
                        <p className='font-normal text-sm text-gray-600 w-3/4'>{post.Problem}</p>
                        ) :<p className='font-normal text-sm text-gray-700'>SOme text here</p>}
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
  )
}

export default ViewIdeabar