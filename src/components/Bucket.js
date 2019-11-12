import React from 'react';

const Component = () => (
  <div className="bg-offwhite">
    <section className="section container">
      <h2 className="text-center">Helicopter Bucket System</h2>
      <p className="text-center">
        Agricultural remote bucket system for helicopters. Used to remotley control the flow of solid material out
        of a bucket that is lifted by a helicopter.
      </p>
      <div className="d-flex justify-center">
        <video className="pic" style={{ minWidth: '200px' }} autoPlay loop>
          <source src="/assets/images/bucket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </div>
);

export default Component;
