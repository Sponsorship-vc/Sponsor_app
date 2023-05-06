import React from 'react'

function Category() {
  return (
    <div className='flex h-full w-full'>
        <div className='mx-[11%] mt-36 h-full w-full'>
            <div className='flex justify-between gap-30 md:gap-[27%]'>
                <p className='flex-1 font-bold text-dark-blue text-4xl'>Explore Ideas by Category </p>
                <p className='flex-1 text-right'>Get the most exciting ideas from all around the world and show your contribution</p>
                
            </div>
            <div className='flex flex-wrap pt-16 gap-[4%] gap-y-10 justify-center'>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
                <div className="w-[260px] h-[110px] bg-white shadow"></div>
            </div>
            <h2 className='text-bold py-10 text-right'>View all Categories</h2>
        </div>
    </div>
  )
}

export default Category