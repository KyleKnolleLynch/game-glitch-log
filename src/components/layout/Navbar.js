import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../layout/Toggle';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';
import { LogContext } from '../../context/LogContext';

const Navbar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { logs } = useContext(LogContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Fragment>
      <nav style={{ background: theme.syntax, color: theme.navLink }}>
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
            {isAuthenticated ? (
              <Link to='/postForm'>
                <strong>Post</strong>
              </Link>
            ) : (
              <a href='#'>
                <strong>Signup</strong>
              </a>
            )}
          </li>
        </ul>
      </nav>
      <div
        className='sub-nav center'
        style={{ background: theme.ui, color: theme.syntax }}
      >
        <a href='#!' onClick={toggleAuth} className='auth-div ttc'>
          {isAuthenticated ? 'logout' : 'login'}
        </a>
        <div>
          <h5>
            {logs.length} {logs.length === 1 ? 'glitch' : 'glitches'} posted
          </h5>
        </div>
        <Toggle />
      </div>
    </Fragment>
  );
};

export default Navbar;
