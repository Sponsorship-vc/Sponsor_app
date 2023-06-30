import React, { useState } from 'react';
import Devstagefilter from './Devstagefilter';

function Filterideas() {
  const [isOpen, setIsOpen] = useState([]);
  const industryOptions = ['Healthcare','Agriculture', 'Technology', 'Education', 'Tourism', 'Automobile', 'Others'];
  const stageOptions = ['Ideation','Development','Prototype','Commercialisable']
  const typeOptions = ['Product','Service','Design','Process']

  const toggleDropdown = (index) => {
    setIsOpen((prevOpen) => {
      const updatedOpen = [...prevOpen];
      updatedOpen[index] = !updatedOpen[index];
      return updatedOpen;
    });
  };

  return (
    <div className='bg-white h-full min-w-[20%] w-1/5 ml-[17rem] overflow-hidden rounded-xl flex flex-col'>
      <div className='mt-8 ml-4'>
        <h1 className='font-bold text-[#363B64]'>Filter</h1>
        <hr className='mt-8' />
      </div>
      <Devstagefilter options={industryOptions} toggleDropdown={() => toggleDropdown(0)} name='Industry' isOpen={isOpen[0]} />
      <Devstagefilter options={stageOptions} toggleDropdown={() => toggleDropdown(1)} name='Stage of development' isOpen={isOpen[1]} />
      <Devstagefilter options={typeOptions} toggleDropdown={() => toggleDropdown(2)} name='Idea type' isOpen={isOpen[2]}/>
    </div>
  );
}

export default Filterideas;
