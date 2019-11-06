import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.syntax, color: theme.navLink }}>
      <div onClick={toggleAuth} className='auth-div'>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        <li>
          <Link to='/'>
            <strong>Home</strong>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <strong>About</strong>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <strong>Contact</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
