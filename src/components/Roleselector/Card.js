import React from 'react'
const card = (props) => {
  return (
<div className=' rounded-xl w-max bg-sky-50 bg-opacity-50 hover:bg-cyan-100  shadow-violet-500 p-9 '>
        <a href="#">
            <h5 class="mb-3 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-black font-abc">{props.title}</h5>
        </a>
    <div class="max-w-sm h-3/4  bg-white  border-gray-200 rounded-full shadow-lg dark:bg-white-800 dark:border-white-700">
  
        <a href="#">
        <img className="rounded-none" src={props.img} alt="hi" />
        </a>
      
    
    </div>

  <button className='w-full my-5 py-2 bg-blue-600  hover:bg-violet-500 text-white font-bold rounded-3xl'>{props.button}</button>
</div>

   
  )
}

export default card
