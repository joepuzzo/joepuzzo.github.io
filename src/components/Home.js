import React from 'react';
import { Fade } from 'react-reveal';
import TypistCycle from './TypistCycle';
import Typist from 'react-typist';
import gitImage from '../../assets/images/git.png';
import nodeImage from '../../assets/images/node.png';
import dockerImage from '../../assets/images/docker.png';
import reactImage from '../../assets/images/react.png';
import travisImage from '../../assets/images/travis.png';
import budImage from '../../assets/images/bud.png';
import { Link } from 'react-router-dom';

const ProjectLink = ({ path, text, ...rest }) => (
  <span className="inline-block">
    <Link className="inverse-link" to={path} {...rest}>{text}</Link>
  </span>
);

const Home = () => (
  <div>
    <div id="home" className="bg-grey">
      <section className="section container text-center">
        <h2>Hello World</h2>
        <div className="terminal">
          <Typist>
            Lets get to know Joe!
          </Typist>
          <TypistCycle
            content={[
              'Joe is pretty cool',
              'Joe loves to write code',
              'Joe loves the terminal',
              'Vim > Emacs :)',
              '<3 Node.js',
              '<3 RFC documents ( seriously )'
            ]}
            numberOfCycles={-1} // loop indefinitely
            segmentDelay={1.2} // stop for 1.2s at end line
            startDelay={2000}
          />
        </div>
      </section>
    </div>
    <div className="bg-darkgrey ">
      <section className="section container text-center">
        <h5>What to look at?</h5>
        <ProjectLink path="/collision-avoidence" text="Drone Communication Protocol" />
        <ProjectLink path="/informed" text="Informed" />
        <ProjectLink path="/bucket" text="Helicopter Bucket" />
        <ProjectLink path="/robot-arm" text="Robot Arm" />
        <ProjectLink path="/mr-roboto" text="Mr.Roboto" />
        <ProjectLink path="/drone" text="Drone" />
        <ProjectLink path="/cnc" text="CNC" />
        <ProjectLink path="/statemachine" text="IPv6 StateMachine" />
        <span className="inline-block"><a className="inverse-link" href="https://github.com/joepuzzo">Github</a></span>
      </section>
    </div>
    <div className="bg-offwhite">
      <section className="section container text-center">
        <h2 className="mb-4">Me described with logos!</h2>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{ height: 100 }} alt="git" src={gitImage} />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{ height: 200 }} alt="node" src={nodeImage} />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{ height: 100 }} alt="docker" src={dockerImage} />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{ height: 200 }} alt="react" src={reactImage} />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{ height: 120 }} alt="docker" src={travisImage} />
        </Fade>
        {/* <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{ height: 120 }} alt="budlight" src={budImage} />
        </Fade> */}
      </section>
    </div>
  </div>
);

export default Home;
