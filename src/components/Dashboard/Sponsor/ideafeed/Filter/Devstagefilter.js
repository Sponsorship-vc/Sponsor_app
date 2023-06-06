import React, { useContext } from 'react';
import { OptionsContext } from '../../../../../context/optionContext';
import { MdArrowDropDown } from 'react-icons/md'
function Devstagefilter({options,toggleDropdown,name,isOpen}) {

  const { selectedOptions, addOption, removeOption } = useContext(OptionsContext);



  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      removeOption(option);
    } else {
      addOption(option);
    }
  };
  // console.log(selectedOptions)

  return (
    <div className='flex flex-col mt-5 ml-5'>
        <div className='flex flex-row items-center' onClick={toggleDropdown}>
          <h3 className='font-bold text-[#363B64]'>{name}</h3>
          <MdArrowDropDown
            className={`ml-auto mr-5 cursor-pointer ${isOpen ? 'transform rotate-180' : ''}`}
            size={40}
            fill='#D2C6C6'
          />
        </div>
        <hr className='mt-4' />
        {isOpen && (
          <div className='flex flex-col pb-2'>
            {options.map((option) => (
              <div className='flex flex-row items-center gap-x-5 mt-4' key={option}>
                <input type='checkbox' checked={selectedOptions.includes(option)} onChange={() => handleOptionChange(option)} />
                <p className='text-[#363B64] font-bold text-sm'>{option}</p>
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default Devstagefilter
