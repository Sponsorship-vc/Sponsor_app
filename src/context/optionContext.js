import React, { createContext, useState } from 'react';

export const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addOption = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
  };

  const removeOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption !== option)
    );
  };

  const clearOptions = () => {
    setSelectedOptions([]);
  };

  return (
    <OptionsContext.Provider
      value={{
        selectedOptions,
        addOption,
        removeOption,
        clearOptions,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
