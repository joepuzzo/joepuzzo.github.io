import React from 'react';
import { Fade } from 'react-reveal';

const Home = () => (
  <div id="home" className="text-center">
    <section>
      <h2>Hello World</h2>
      <p>
        Lets get to know Joe!
      </p>
      <hr />
    </section>
    <section >
      <h2>Joe in pictures</h2>
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
    </section>
  </div>
);

export default Home;
