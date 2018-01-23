import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';

const App = () => (
  <div>
    <header className="header container">
      <div className="row">
        <div className="one-half column title">
          <h2>Joe Puzzo</h2>
          <h6>Love for building cool shit and Node.js</h6>
        </div>
        <div className="one-half column">
          <img className="me" src="/assets/images/me.jpg"/>
        </div>
      </div>
    </header>
    <section className="testcode">
    </section>
    <Nav />
    <main className="container">
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </main>
  </div>
);

export default App;
