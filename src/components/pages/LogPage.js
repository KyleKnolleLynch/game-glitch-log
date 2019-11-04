import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const LogPage = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='container center' style={{background: theme.bg, color: theme.syntax}}>
      <h1 className='banner-title'>Game Glitch Log</h1>
      <div>
        <h3 className='my-1'>Grand Theft Auto V</h3>
        <ul className='log-list'>
          <li className='list-item'><a href='#!'>Rank up fast</a></li>
          <li className='list-item'><a href='#!'>Get cars for free</a></li>
          <li className='list-item'><a href='#!'>Unlimited money glitch</a></li>
        </ul>
      </div>
    </div>
  );
};

export default LogPage;
