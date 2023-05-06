import React from 'react'

function Platform() {
  const posts = [
    {id: 1, title: 'Easy registration process', content: 'Our registration process is quick and simple, allowing you to sign up and start browsing projects'},
    {id: 2, title: 'User-friendly interface for idea owners and sponsors', content: 'Our platform is designed to be user-friendly and intuitive, with features that cater to both idea owners and sponsors.'},
    {id: 3, title: 'Access to a network of potential sponsors', content: 'Our platform connects you with a network of potential sponsors who are looking for innovative and impactful projects to support.'},
    {id: 4, title: 'Ability to create profiles and upload project details', content: 'Create a project profile with business plans and financial projections to attract potential sponsors who can assess whether your project aligns with their goals.'},
    {id: 5, title: 'Opportunities to showcase your ideas and projects to a wider audience', content: 'Showcase your ideas and projects to a wider audience, increasing visibility and attracting potential sponsors to help gain momentum and secure funding.'},
  ];


  return (
    <div>
      <div className='flex h-full w-full py-10'>
        <div className='mx-[11%] h-full w-full'>
            <div >
                <p className='flex-1 font-bold text-dark-blue text-4xl'>Our Platform Provides</p> 
            </div> 
            
            
             
              <div className='flex flex-wrap pt-16 gap-[4%] gap-y-10 justify-center'>
              {posts.map((post) => (
                <div className="flex flex-row w-[500px] h-full">
                  <div className='px-2 justify-center align-center h-full'>
                    img
                  </div>
                  
                  <div className='flex flex-col'>
                    <h2 class="text-lg font-bold text-gray-800">{post.title}</h2>
                    <p className='font-semibold text-sm pt-2'>{post.content}</p>
                  </div>
                 
                  </div>
              ))}
                </div>
                
              
             
        </div>
    </div>
    </div>
  )
}

export default Platform
