import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import DesignTool from '../../components/designTool/DesignTool';
import Nav from '../../components/nav/Nav';
import PhoneNav from '../../components/nav/PhoneNav';

function Design() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <>
      {togglePhoneNav ? (
        <PhoneNav />
      ) : (
        <>
          <Nav />
          <DesignTool />
        </>
      )}
    </>
  );
}

export default Design;
