import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const LogContext = createContext();

const LogContextProvider = props => {
  const [logs, setLogs] = useState([
    {
      title: 'rank up fast',
      author: 'richard deckard',
      id: uuid()
    },
    {
      title: 'get cars for free',
      author: 'ellen ripley',
      id: uuid()
    },
    {
      title: 'unlimited money glitch',
      author: 'sarah connor',
      id: uuid()
    }
  ]);

  const addLog = (title, author) => {
    setLogs([...logs, { title, author, id: uuid() }]);
  };

  const removeLog = id => {
    setLogs(logs.filter(log => log.id !== id));
  }

  return (
    <LogContext.Provider value={{ logs, addLog, removeLog }}>{props.children}</LogContext.Provider>
  );
};

export default LogContextProvider;
