import React, { useContext,useState } from 'react';
import { OptionsContext } from '../../../../../context/optionContext';
import { MdArrowDropDown } from 'react-icons/md'
function Devstagefilter({options,toggleDropdown,name,isOpen,other}) {

  const { selectedOptions, addOption, removeOption } = useContext(OptionsContext);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [inputValue, setInputValue] = useState([]);
  const [Value, setValue] = useState('');



  const handleOptionChange = (option,name) => {
    // console.log(event.key,"kgju")
    if (selectedOptions[name] && selectedOptions[name].includes(option)) {
      removeOption(option,name);
    } else {
      addOption(option,name);
    }
  };
  const handleOptionsChange = () => {
      setIsOtherSelected(!isOtherSelected);
  };
  const handleKeyDown = (event) => {
    if (event && event.key === 'Enter') {
      setInputValue([...inputValue, event.target.value]);
      setValue('')
      addOption(event.target.value,name);
    }
  };

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
                <input type='checkbox' checked={selectedOptions[name] && selectedOptions[name].includes(option)} onChange={() => handleOptionChange(option,name)} />
                <p className='text-[#363B64] font-bold text-sm'>{option}</p>
              </div>
            ))}
             {inputValue.map((option) => (
              <div className='flex flex-row items-center gap-x-5 mt-4' key={option}>
                <input type='checkbox' checked={selectedOptions[name] && selectedOptions[name].includes(option)} onChange={() => handleOptionChange(option,name)} />
                <p className='text-[#363B64] font-bold text-sm'>{option}</p>
              </div>
            ))}
            {other &&(
            <div className='flex flex-row items-center gap-x-5 mt-4' key="others">
                <input type='checkbox' onChange={() => handleOptionsChange()} checked={isOtherSelected}/>
                <p className='text-[#363B64] font-bold text-sm'>Others</p>
                {isOtherSelected && (
                  <input
                    type="text"
                    className="border-b border-gray-500 focus:outline-none focus:border-blue-500"
                    onKeyDown={handleKeyDown}
                    value={Value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                )}
              </div>
            )}
            

          </div>
        )}
      </div>
  )
}

export default Devstagefilter
