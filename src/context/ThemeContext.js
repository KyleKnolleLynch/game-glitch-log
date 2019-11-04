import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#0dafd8', ui: '#0dafd8', bg: '#f4f4f4', navLink: '#fff' },
    dark: { syntax: '#0dafd8', ui: '#0dafd8', bg: '#333', navLink: '#333' }
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
