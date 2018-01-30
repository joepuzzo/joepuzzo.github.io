import React from 'react';
import { Fade } from 'react-reveal';
import TypistCycle from './TypistCycle';
import Typist from 'react-typist';
import gitImage from '../../assets/images/git.png';

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
              '<3 Node.js'
            ]}
            numberOfCycles={-1} // loop indefinitely
            segmentDelay={1.2} // stop for 1.2s at end line
            startDelay={2000}
          />
        </div>
      </section>
    </div>
    <div className="bg-offwhite">
      <section className="section container text-center">
        <h2>Myself described with logos</h2>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{height: 100}} alt="git" src={gitImage} />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{height: 200}} alt="node" src="/assets/images/node.png" />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{height: 100}} alt="docker" src="/assets/images/docker.png" />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{height: 200}} alt="react" src="/assets/images/react.png" />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{height: 120}} alt="docker" src="/assets/images/travis.png" />
        </Fade>
        <Fade delay={150} duration={2000}>
          <img className="joe-in-pics-pic" style={{height: 120}} alt="budlight" src="/assets/images/bud.png" />
        </Fade>
      </section>
    </div>
  </div>
);

export default Home;
