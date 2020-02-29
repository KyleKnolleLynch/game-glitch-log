import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LogPage from './components/pages/LogPage';
import About from './components/pages/About';
import PostForm from './components/pages/PostForm';
import NotFound from '../src/components/pages/NotFound';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import LogContextProvider from './context/LogContext';

import './CSS/style.css';

const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <LogContextProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Fragment>
              <Navbar />
              <Switch>
                <Route exact path='/' component={LogPage} />
                <About exact path='/about' component={About} />
                <Route exact path='/postForm' component={PostForm} />
              </Switch>
              <NotFound />
            </Fragment>
          </Router>
        </LogContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
