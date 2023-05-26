import React, { useState } from 'react';
import Industryfilter from './Industryfilter';
function Filterideas() {
    const [isOpen, setIsOpen] = useState(false);
    const industryOptions = ['Healthcare', 'Technology', 'Education', 'Tourism', 'Automobile', 'Others'];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white h-full w-1/5 ml-[17rem] overflow-hidden rounded-xl flex flex-col'>
      <div className='mt-8 ml-4'>
        <h1 className='font-bold text-[#363B64]'>Filter</h1>
        <hr className='mt-8' />
      </div>
    <Industryfilter options={industryOptions} toggleDropdown={toggleDropdown} name='Industry' isOpen={isOpen}/>
    </div>
  );
}

export default Filterideas;
