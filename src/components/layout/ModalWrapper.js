import React, { Fragment, useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';

const ModalWrapper = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [toggleModal, setToggleModal] = useState(false);

  const handleSwitch = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div
      className='container'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      {!toggleModal ? (
        <SignupModal handleSwitch={handleSwitch} />
      ) : (
        <LoginModal handleSwitch={handleSwitch} />
      )}
    </div>
  );
};

export default ModalWrapper;
