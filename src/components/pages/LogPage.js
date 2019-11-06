import React, { useContext } from 'react';
import Toggle from '../layout/Toggle';
import { ThemeContext } from '../../context/ThemeContext';

const LogPage = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='log-page container center'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <Toggle />
      <h1 className='banner-title'>Game Glitch Log</h1>
      <h3 className='my-1'>Grand Theft Auto V</h3>
      <ul className='log-list'>
        <a href='#!'>
          <li className='list-item' style={{ background: theme.ui }}>
            Rank up fast
          </li>
        </a>
        <a href='#!'>
          <li className='list-item' style={{ background: theme.ui }}>
            Get cars for free
          </li>
        </a>
        <a href='#!'>
          <li className='list-item' style={{ background: theme.ui }}>
            Unlimited money glitch
          </li>
        </a>
      </ul>
    </div>
  );
};

export default LogPage;
