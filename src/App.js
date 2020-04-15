import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main } from './lib/styles/GeneralStyles';

// Components
import Header from './components/Header/Header';

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
        </Main>
      </>
    );
  }
}

export default App;

