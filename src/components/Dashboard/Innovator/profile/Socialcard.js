import React from 'react'

function Socialcard() {
  return (
    <div className='bg-white mt-5 text-dark-blue ml-[17rem] relative max-w-full h-[12rem] rounded-xl'>
      <div className='ml-7 mt-4 '>
        <h1 className='text-dark-blue font-bold text-2xl'>Social Media Handles</h1>
        <p className='text-gray-400 text-xs mt-2'>Your personal socialmedia profiles</p>
      </div>
      <div className='grid grid-cols-3 grid-rows-2 gap-4 ml-5 mt-2 gap-y-10'>
        <div className='flex flex-row'>
          <img src=''/>
          <p className='font-semibold'></p>
        </div>
      </div>
    </div>
  )
}

export default Socialcard
