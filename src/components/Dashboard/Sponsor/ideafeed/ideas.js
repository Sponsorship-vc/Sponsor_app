import React from 'react';
import {useState} from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
function Ideas() {

  const [likedIndexes, setLikedIndexes] = useState([]);
  const ideas = [{id:"image",title:"idea title", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"},
                {id:"image",title:"idea title", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"},
                {id:"image",title:"idea title", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"},
                {id:"image",title:"idea title", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"},
                {id:"image",title:"idea title", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"},]


    const handleLike = (index) => {
      const newLikedIndexes = [...likedIndexes];
  
      if (newLikedIndexes.includes(index)) {
        // Unlike if already liked
        const indexToRemove = newLikedIndexes.indexOf(index);
        newLikedIndexes.splice(indexToRemove, 1);
      } else {
        // Like if not already liked
        newLikedIndexes.push(index);
      }
  
      setLikedIndexes(newLikedIndexes);
    };

              

  return (
    <div className='h-full w-full  bg-white ml-auto mr-5 rounded-xl '>
      <div className='flex flex-row mt-10 mb-7'>
        <h2 className='text-[#303972] font-bold flex-initial ml-5'>Idea brief</h2>
        <div className='text-[#303972] font-bold flex flex-row gap-10 ml-auto mr-6'>
          <h2>Categories</h2>
          <h2>Action</h2>
        </div>
      </div>
      {ideas.map((idea,index) => (
      <React.Fragment key={index}>
      <hr />
      <div className='flex flex-row mb-3'>
        <div className='bg-[#C1BBEB] rounded-lg h-full w-1/5'></div>
        <div className='flex flex-col w-1/2 mt-3'>
          <h1 className='font-bold text-[#303972]'>{idea.title}</h1>
          <p className='text-[#A098AE] text-sm mt-3'>{idea.content}</p>
        </div>
        <div className='flex flex-col gap-y-3 mt-3 ml-10'>
          <p className='bg-[#C1BBEB] rounded-2xl min-w-content min-h-content px-3 py-1 text-xs text-[#303972]'>Technology</p>
          <p className='bg-[#C1BBEB] rounded-xl min-w-content min-h-content px-3 py-1 text-xs text-[#303972]'>Technology</p>
          <p className='bg-[#C1BBEB] rounded-xl min-w-content min-h-content px-3 py-1 text-xs text-[#303972]'>Technology</p>
        </div>
        <div className='ml-10 h-full justify-center items-center flex mt-10 '>
        {likedIndexes.includes(index) ? (
                <AiFillHeart size={30} onClick={() => handleLike(index)} fill='red' />
              ) : (
                <AiOutlineHeart size={30} onClick={() => handleLike(index)} />
              )}
        </div>
      </div> 
      </React.Fragment>))}
    </div>
  )
}

export default Ideas
