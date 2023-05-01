import React from "react";
import { useState } from "react";

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const toggleNavbar = () => {
    console.log('tog');
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavbar,
        toggleNavigation,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
