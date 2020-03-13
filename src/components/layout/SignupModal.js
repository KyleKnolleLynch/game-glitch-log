import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const SignupModal = ({ handleSwitch }) => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='modal signupModal'
      style={{ background: theme.syntax, color: theme.bg }}
    >
      <form className='signup'>
        <input type='text' name='email' placeholder='Email' />
        <input type='text' name='password' placeholder='Password' />
        <button
          className='btn'
          style={{ background: theme.ui, color: theme.syntax }}
        >
          Signup
        </button>
        <p className='error'></p>
      </form>
      <div>
        Already signed up?{' '}
        <a href='#' onClick={handleSwitch}>
          Login here
        </a>
      </div>
    </div>
  );
};

export default SignupModal;
