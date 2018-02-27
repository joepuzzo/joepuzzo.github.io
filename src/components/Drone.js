import React from 'react';

const Component = () => (
  <div className="bg-offwhite">
    <section className="section container">
      <h2 className="text-center">Drone</h2>
      <p className="text-center">
        Designed and built a quad copter.
      </p>
      <div className="d-flex justify-center">
        <video className="pic" style={{ minWidth: '500px' }} autoPlay loop>
          <source src="/assets/images/drone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </div>
);

export default Component;
