import React, { Component } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export class Toggle extends Component {
  static contextType = ThemeContext;
 
  render() {

    const { isLightTheme, dark, light, toggleTheme } = this.context;
    const theme = isLightTheme ? light : dark;
    return <button className='toggle-btn btn' style={{background: theme.ui, color: theme.syntax}} onClick={toggleTheme}><strong>Toggle Theme</strong></button>;
  }
}

export default Toggle;
