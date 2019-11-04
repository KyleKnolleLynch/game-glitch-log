import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LogPage from './components/pages/LogPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ThemeContextProvider from './context/ThemeContext';

import './CSS/style.css';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LogPage} />
            <About exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Fragment>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
