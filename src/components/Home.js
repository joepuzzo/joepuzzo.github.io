import React from 'react';
import { Fade } from 'react-reveal';
import TypistCycle from './TypistCycle';

const Home = () => (
  <div id="home" className="text-center">
    <section>
      <h2>Hello World</h2>
      <TypistCycle
        content={[
          'Lets get to know Joe!',
          'Joe is pretty cool',
          'Joe loves to write code',
          'Joe loves the terminal',
          'Vim > Emacs :)'
        ]}
        numberOfCycles={-1} // loop indefinitely
        segmentDelay={1.2} // stop for 1.2s at end line
        className="terminal"
      />
      <hr />
    </section>
    <section >
      <h2>Myself described with logos</h2>
      <Fade delay={150} duration={2000}>
        <img className="joe-in-pics-pic" style={{height: 100}} alt="git" src="/assets/images/git.png" />
      </Fade>
      <Fade delay={150} duration={2000}>
        <img className="joe-in-pics-pic" style={{height: 200}} alt="node" src="/assets/images/node.png" />
      </Fade>
      <Fade delay={150} duration={2000}>
        <img className="joe-in-pics-pic" style={{height: 100}} alt="docker" src="/assets/images/docker.png" />
      </Fade>
      <Fade delay={150} duration={2000}>
        <img className="joe-in-pics-pic" style={{height: 120}} alt="docker" src="/assets/images/travis.png" />
      </Fade>
      <Fade delay={150} duration={2000}>
        <img className="joe-in-pics-pic" style={{height: 120}} alt="budlight" src="/assets/images/bud.png" />
      </Fade>
    </section>
  </div>
);

export default Home;
