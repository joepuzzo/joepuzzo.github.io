import React from 'react';
import Media from 'react-media';
import { Switch, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import Home from './components/Home';
import About from './components/About';
import StateMachine from './components/StateMachine';
import CNC from './components/CNC';
import Nav from './components/Nav';
import Scroll from './components/Scroll';
import Resume from './components/Resume';
import ReactForm from './components/ReactForm';
// import me from '../assets/images/me.jpg';
import me from '../assets/images/mearches.jpg';
import DroneCommunicationProtocol from './components/DroneCommunicationProtocol';
import RobotArm from './components/RobotArm';
import MrRoboto from './components/MrRoboto';
import Drone from './components/Drone';
import Bucket from './components/Bucket';

const particleConfig = {
  particles: {
    number: {
      value: 20
    },
    color: {
      value: '#2b2b2b'
    },
    size: {
      value: 3,
      random: false
    },
    line_linked: {
      enable: true,
      color: '#2b2b2b',
    }
  }
};

const Intro = () => (
  <div className="title">
    <h2>Joe Puzzo</h2>
    <h5>"I love to build cool shit"</h5>
  </div>
);

const SmallHeader = () => (
  <Intro />
);

const LargeHeader = () => (
  <div className="row">
    <div className="one-half column">
      <Intro />
    </div>
    <div className="one-half column">
      <img className="me" alt="joepuzzo" src={me} />
    </div>
  </div>
);

const App = () => (
  <div>
    <div className="bg-offwhite">
      {/* <Particles params={particleConfig} height={200} style={{ position: 'absolute', top: '0', left: '0' }} /> */}
      <header className="header container">
        <Media query="(min-width: 1000px)">
          {matches => ( matches
            ? <LargeHeader />
            : <SmallHeader />
          )}
        </Media>
      </header>
    </div>
    <section className="testcode" />
    <Nav />
    <Scroll
      target="nav"
      render={({ active, height }) => (
        <main style={{ paddingTop: active ? height : 0 }}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/statemachine" component={StateMachine} />
            <Route path="/cnc" component={CNC} />
            <Route path="/informed" component={ReactForm} />
            <Route path="/resume" component={Resume} />
            <Route path="/robot-arm" component={RobotArm} />
            <Route path="/mr-roboto" component={MrRoboto} />
            <Route path="/drone" component={Drone} />
            <Route path="/bucket" component={Bucket} />
            <Route path="/collision-avoidence" component={DroneCommunicationProtocol} />
            <Redirect to="/home" />
          </Switch>
        </main>
    )} />
    <footer className="text-center footer">
      <a className="inverse-link" href="https://github.com/joepuzzo">Github</a>
      <a className="inverse-link" href="https://www.linkedin.com/in/joe-puzzo-97612657">Linkedin</a>
    </footer>
  </div>
);

export default App;
