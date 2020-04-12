import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Clock from './components/Clock/Clock';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/speakers" component={Speakers} />
          {/* <Route path="/clock" component={Clock} /> */}
        </Main>
      </>
    );
  }
}

export default App;

