// import React from 'react'
// import { useState } from 'react';
// import Arrow from '../../../../Assets/Dashboard/Arrow.png'

// const Help = () => {
    
   
//         const [isOpen, setIsOpen] = useState(false);
      
//         const toggleQuestion = () => {
//           setIsOpen(!isOpen);
//         };    

//   return (
//     <div className='ml-64'>
//     {/* <div className="w-full row-start-2 max-w-md bg-[#F3F4FF] mx-auto">
//     <div className="w-full px-4 py-2 text-left bg-white rounded-md border-r-4 hover:bg-white focus:outline-none">
//         Question  
//       <button className='item-right'
        
//         onClick={toggleQuestion}
//       >
       
//         <img className='' src={Arrow}/>
//       </button>
//       </div>
//       {isOpen && (
//         <div className="mt-2 bg-sky-100 border border-gray-200 rounded-md shadow">
//           <p className="px-4 py-2">
//             This is the answer to your question!
//           </p>
//         </div>
//       )}
//     </div> */}
    

 

 


//     </div>
//   )
// }

// export default Help



import React, { useState } from 'react';
// import Arrow from '../../../../Assets/Dashboard/Arrow.png'
import { MdArrowDropDown} from 'react-icons/md';

const Help = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHelp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='ml-64 bg-'>
      <div className='mx-60'>
    <div className=" rounded-lg mb-4">
      
      <button
        className="w-full p-4  rounded-2xl bg-white text-left focus:outline-none"
        onClick={toggleHelp}
      >
      <div className='flex flex-row items-center'>
        <p className='font-bold'>{question}</p>
        <MdArrowDropDown
          className={`ml-auto mr-5 cursor-pointer ${isOpen ? 'transform rotate-180' : ''}`}
          size={40}
          fill='#D2C6C6'
          />
      </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-sky-100">
          <p>{answer}</p>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default Help;