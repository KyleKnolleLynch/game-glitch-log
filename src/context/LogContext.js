import React, { createContext, useReducer, useEffect } from 'react';
import { logReducer } from '../reducers/logReducer';

export const LogContext = createContext();

const LogContextProvider = props => {
  const [logs, dispatch] = useReducer(logReducer, [], () => { 
  const  localData = localStorage.getItem('logs');
  return localData ? JSON.parse(localData) : [];
});

  useEffect(() => {
    localStorage.setItem('logs', JSON.stringify(logs))
  }, [logs])

  return (
    <LogContext.Provider value={{ logs, dispatch }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogContextProvider;
