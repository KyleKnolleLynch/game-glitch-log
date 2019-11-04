import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{background: theme.ui, color: theme.navLink}}>
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

// import React, { Component, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../../context/ThemeContext';

// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, dark, light } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <nav style={{background: theme.ui, color: theme.syntax }}>
//         <ul>
//           <li>
//             <Link to='/'>
//               <strong>Home</strong>
//             </Link>
//           </li>
//           <li>
//             <Link to='/about'>
//               <strong>About</strong>
//             </Link>
//           </li>
//           <li>
//             <Link to='/contact'>
//               <strong>Contact</strong>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
