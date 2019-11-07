import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const About = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='center container ttc'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <h2>Game glitch / method log</h2>
      <p className='list-item'>Version: 0.0.1</p>
      <h3 className='list-item'>built with react and currently using local storage to save data.</h3>
      <h5 className='list-item ttu'>No user authentification as of yet but plans are to implement that in the future, as well as using a database.</h5>
      <p>&copy; Kyle Lynch 2019</p>
    </div>
    
  );
};

export default About;
