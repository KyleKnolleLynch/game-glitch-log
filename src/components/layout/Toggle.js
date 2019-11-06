import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Toggle = () => {
  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <button
      className='toggle-btn btn ttu'
      style={{ background: theme.ui, color: theme.syntax }}
      onClick={toggleTheme}
    >
      <h6>
        <em>go {isLightTheme ? 'dark' : 'light'} theme</em>
      </h6>
    </button>
  );
};

export default Toggle;
