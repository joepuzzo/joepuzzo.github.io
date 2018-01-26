import React from 'react';
import { Fade } from 'react-reveal';

const StateMachine = () => (
  <div className="bg-grey">
    <section className="section container">
      <h2 className="text-center">IPV6 State Machine</h2>
      <div className="row mb-3">
        <Fade delay={150} duration={3000} className="col text-center">
          <img className="state-machine" alt="v6 state machine" src="/assets/images/v6StateMachine.png" />
        </Fade>
      </div>
    </section>
  </div>
);

export default StateMachine;
