import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import DesignTool from '../../components/designTool/DesignTool';
import Navbar from '../../components/nav/Navbar';

function Design() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <div>

          <Navbar />
          <DesignTool />
   
    </div>
  );
}

export default Design;
