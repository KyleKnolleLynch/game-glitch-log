import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LogContext } from '../../context/LogContext';

const LogDetails = ({ log }) => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { dispatch } = useContext(LogContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='list-item log-details' style={{ background: theme.ui }}>
      <h3>{log.game}</h3>
      <h4 className='list-item'>{log.title}</h4>
      <h5>posted by: {log.author}</h5>
      <p className='list-item'>{log.details}</p>
      <h6
        className='delete-btn'
        onClick={() => dispatch({ type: 'REMOVE_LOG', id: log.id })}
      >{`{ Delete Post }`}</h6>
    </div>
  );
};

export default LogDetails;
