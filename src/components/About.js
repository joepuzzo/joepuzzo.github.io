import React from 'react';
import Height from './Height';
import { Fade } from 'react-reveal';

const About = () => (
  <div className="bg-grey">
    <section className="section container">
      <h2 className="text-center">About</h2>
      <div className="row mb-3">
        <Fade delay={150} duration={2000} className="col">
          <div className="col lakewinni text-center" />
        </Fade>
      </div>
      <div className="row">
        <Fade delay={150} duration={2000} className="col-md-6 mb-3">
          <div className="card bg-offwhite">
            <h5>Lake Winnipesaukee</h5>
            <p>
              If you were to ask what my perfect day would be like, it would
              involve a boat, a lake, and a cooler filled with BudLight.
            </p>
          </div>
        </Fade>
        <Fade delay={150} duration={2000} className="col-md-6 mb-3">
          <div className="card bg-offwhite">
            <h5>Hobbies</h5>
            <ul>
              <li>Snowboarding</li>
              <li>Robotics</li>
              <li>Open Source Development</li>
            </ul>
          </div>
        </Fade>
      </div>
      <div className="row">
        <Fade delay={150} duration={2000} className="col">
          <div className="card bg-offwhite">
            <h5>CNC</h5>
            <p>
              I built a CNC machine that can carve stuff out of wood and aluminum. Definitely had
              more fun building the machine then i do making stuff with it :)
            </p>
          </div>
        </Fade>
      </div>
    </section>
  </div>
);

export default About;
