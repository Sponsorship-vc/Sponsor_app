import React from 'react'

const Card = (props) => {
  return (
     <div className='  w-4/5 bg-[#F8F8F8] bg-opacity-50 border-2 hover:bg-[#EAEAEA] p-9 shadow-xl -mx-4 mb-4 hover:shadow-lg focus:shadow-3xl'>
        <h5 class="mb-3 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-black font-abc">hi</h5>
      <div class="max-w-sm h-3/4  bg-white  border-gray-200 rounded-full shadow-lg dark:bg-white-800 dark:border-white-700">
        <img className="rounded-none" src={props.img} alt="hi" />
      </div>
      <button className='w-full my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-md'>clic</button>
    </div>
  )
}

export default Card