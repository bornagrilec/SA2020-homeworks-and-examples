import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Main } from "./lib/styles/GeneralStyles";

// Components
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// Pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  // Initial state is being set to 'pending', because if we refresh our
  // page, and initial state is settled to false, our PrivateRoute will get
  // false value and automatically redirect to /login route. This happens
  // because our useEffect will get values from localStorage few moments later
  // then components inside return() will be rendered.
  const [isAuthenticated, setIsAuthenticated] = useState("pending");

  useEffect(() => {
    // Because of described behaviour above, we're checking
    // if token exists in localStorage, if it exists then
    // setIsAthenticated will be changed from 'pending'
    // to true, or if it don't exists then from 'pending'
    // to false.
    if (localStorage.getItem("token") !== null) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <>
      {/* On this way we can prevent components to render before we actually know if user is authenticated or not. */}
      {isAuthenticated === true || isAuthenticated === false ? (
        <>
          <Header
            isAuthenticated={isAuthenticated}
            onAuthChange={setIsAuthenticated}
          />
          <Main>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              path="/events"
              component={Events}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/speakers"
              component={Speakers}
              isAuthenticated={isAuthenticated}
            />
            <Route path="/register" component={Register} />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login {...props} onAuthChange={setIsAuthenticated} />
              )}
            />
          </Main>
        </>
      ) : null}
    </>
  );
};

export default App;
