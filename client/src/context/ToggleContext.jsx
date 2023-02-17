import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();


const ToggleContextProvider = ({ children }) => {
  const [togglePhoneNav, setTogglePhoneNav] = useState(false);

  return (
    <ToggleContext.Provider value={{ togglePhoneNav, setTogglePhoneNav }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
