import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const LoginModal = ({ handleSwitch }) => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='modal loginModal open'
      style={{ background: theme.syntax, color: theme.bg }}
    >
      <form className='login'>
        <input type='text' name='email' placeholder='Email' />
        <input type='text' name='password' placeholder='Password' />
        <button
          className='btn'
          style={{ background: theme.ui, color: theme.syntax }}
        >
          <strong>Login</strong>
        </button>
        <p className='error'></p>
      </form>
      <div>
        Not signed up?{' '}
        <a href='#' onClick={handleSwitch}>
          Sign up here
        </a>
      </div>
    </div>
  );
};

export default LoginModal;
