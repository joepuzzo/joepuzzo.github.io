import React from 'react';

const Component = () => (
  <div className="bg-offwhite">
    <section className="section container">
      <h2 className="text-center">Mr Roboto</h2>
      <p className="text-center">
        Designed and built a balancing robot. Based on the Double robot.
      </p>
      <div className="d-flex justify-center">
        <video className="pic" style={{ minWidth: '500px' }} autoPlay loop>
          <source src="/assets/images/balancing-robot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </div>
);

export default Component;
