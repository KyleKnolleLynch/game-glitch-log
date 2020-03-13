import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LogContext } from '../../context/LogContext';
import { AuthContext } from '../../context/AuthContext';
import ModalWrapper from '../layout/ModalWrapper';
import LogDetails from '../layout/LogDetails';

const LogPage = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { logs } = useContext(LogContext);
  const theme = isLightTheme ? light : dark;
  if (isAuthenticated) {
    return logs.length === 0 ? (
      <div
        className='container center empty-log'
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <h3>No entries posted! Please post a glitch.</h3>
      </div>
    ) : (
      <div
        className='log-page container center'
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <h1 className='banner-title ttc'>game glitch log</h1>
        <div className='log-list'>
          {logs.map(log => (
            <LogDetails log={log} key={log.id} id={log.id} />
          ))}
        </div>
      </div>
    );
  }
  return <ModalWrapper />;
};

export default LogPage;
