import React from 'react';
import { Fade } from 'react-reveal';

const CNC = () => (
  <div className="bg-grey">
    <section className="section container">
      <h2 className="text-center">CNC Machine</h2>
      <div className="row mb-3 text-center no-gutters">
        <div className="col-md-3 col-sm-6">
          <video className="cnc-image" autoPlay loop>
            <source src="/assets/images/cnc-jeep-carve.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-3 col-sm-6">
          <video className="cnc-image" autoPlay loop>
            <source src="/assets/images/cnc-bruins.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-3 col-sm-6">
          <video className="cnc-image" autoPlay loop>
            <source src="/assets/images/cnc-lake-winni-carve.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-3 col-sm-6">
          <video className="cnc-image" autoPlay loop>
            <source src="/assets/images/cnc-motor-test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  </div>
);

export default CNC;
