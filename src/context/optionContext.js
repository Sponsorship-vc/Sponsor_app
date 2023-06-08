import React, { createContext, useState } from 'react';

export const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addOption = (option, name) => {
    setSelectedOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      updatedOptions[name] = [...(prevOptions[name] || []), option];
      return updatedOptions;
    });
  };

  const removeOption = (option, name) => {
    setSelectedOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      updatedOptions[name] = (prevOptions[name] || []).filter(
        (selectedOption) => selectedOption !== option
      );
      return updatedOptions;
    });
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
