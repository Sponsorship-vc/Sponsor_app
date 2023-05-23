import React from 'react'
import {AiFillLinkedin, AiFillGithub ,AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import edit from '../../../../Assets/Dashboard/Icons/edit.svg'
function Socialcard() {
 const socials = 
 [{id:<AiFillLinkedin/> ,content:"https:linkedin.com"},
  {id:<AiFillGithub/> ,content:"https:linkedin.com"},
  {id:<AiFillInstagram/> ,content:"https:linkedin.com"},
  {id:<BsFacebook/> ,content:"https:linkedin.com"},
]
  return (
    <div className='bg-white mt-5 text-dark-blue ml-[17rem] relative max-w-full h-[12rem] rounded-xl mr-5 overflow-hidden'>
      <div className='ml-7 '>
        <div className='flex flex-row items-center jusitfy-between mt-0'>
        <h1 className='text-dark-blue font-bold text-2xl flex-initial'>Social Media Handles</h1>
        <img src={edit} className='h-20 w-20 ml-auto cursor-pointer'/>
        </div>
        <p className='text-gray-400 text-xs !mt-[-1%]'>Your personal socialmedia profiles</p>
      </div>
      <div className='grid grid-cols-3 grid-rows-2 gap-4 ml-5  gap-y-6 mt-5'>
      {socials.map((social) => (
        <div className='flex flex-row gap-x-3 justify-start items-center'>
          {social.id}
          <a href={social.content} className='font-semibold'>{social.content}</a>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Socialcard
