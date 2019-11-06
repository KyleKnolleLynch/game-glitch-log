import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [light] = useState({
    syntax: '#0dafd8',
    ui: '#ccc',
    bg: '#f4f4f4',
    navLink: '#fff'
  });
  const [dark] = useState({
    syntax: '#0dafd8',
    ui: '#222',
    bg: '#333',
    navLink: '#333'
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, dark, light, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
