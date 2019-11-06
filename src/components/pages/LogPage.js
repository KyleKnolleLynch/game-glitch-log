import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LogContext } from '../../context/LogContext';

const LogPage = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { logs } = useContext(LogContext);
  const theme = isLightTheme ? light : dark;
  console.log(logs);
  return (
    <div
      className='log-page container center'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <h1 className='banner-title ttc'>game glitch log</h1>
      <h3 className='my-1 ttu'>Grand Theft Auto V</h3>
      <ul className='log-list ttc'>
        {logs.map(log => (
          <a href='#!' key={log.id}>
            <li className='list-item' style={{ background: theme.ui }}>
              {log.title}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default LogPage;
