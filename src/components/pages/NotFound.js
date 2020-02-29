import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const NotFound = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='center container ttc'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <h1>404</h1>
      <h2>Error: This page does not exist!</h2>
    </div>
  );
};

export default NotFound;
