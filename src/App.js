import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Main } from './lib/styles/GeneralStyles';

// Components
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuthenticated(localStorage.getItem('token'));
    }
  });

  return (
    <>
      <Header isAuthenticated={isAuthenticated} onAuthChange={setIsAuthenticated} />
      <Main>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/events" component={Events} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/speakers" component={Speakers} isAuthenticated={isAuthenticated} />
        <Route path="/register" component={Register} />
        <Route exact path="/login" render={(props) => <Login {...props} onAuthChange={setIsAuthenticated} />} />
      </Main>
    </>
  );
}

export default App;

