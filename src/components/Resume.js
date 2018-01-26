import React from 'react';
import Height from './Height';
import { Fade } from 'react-reveal';

const Resume = () => (
  <div className="bg-offwhite">
    <section className="section container">
      <h2>Joseph Puzzo</h2>
      <hr />
      <h4>Profile Information</h4>
      <ul>
        <li>
          <strong>Address: </strong> 111 Lakewood dr Alton Bay NH, 03810
        </li>
        <li>
          <strong>Phone: </strong> 603-630-9814
        </li>
        <li>
          <strong>Email: </strong><a href="mailto:jgpuzzo2@gmail.com" target="_top">jgpuzzo2@gmail.com</a>
        </li>
        <li>
          <strong>Github: </strong><a href="https://github.com/joepuzzo">https://github.com/joepuzzo</a>
        </li>
        <li>
          <strong>Linkedin: </strong><a href="https://www.linkedin.com/in/joe-puzzo-97612657">https://www.linkedin.com/in/joe-puzzo-97612657</a>
        </li>
      </ul>
      <hr />
      <h4>Skills Summary</h4>
      <div className="row">
        <div className="col-sm-4">
          <ul>
            <li>Node.js</li>
            <li>React</li>
            <li>HTML-CSS-SCSS</li>
            <li>Docker</li>
            <li>CICD</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="col-sm-4">
          <ul>
            <li>Object Oriented Design</li>
            <li>Open source development</li>
            <li>Linux</li>
            <li>C</li>
            <li>Python</li>
            <li>Ruby</li>
          </ul>
        </div>
        <div className="col-sm-4">
          <ul>
            <li>TDD</li>
            <li>IPV6</li>
            <li>WireShark</li>
            <li>SVN & Git</li>
            <li>Team design & development</li>
            <li>Simple Robotics</li>
          </ul>
        </div>
      </div>
      <hr />
      <h4>Job Experience</h4>
      <div>
        <h6 className="mb-1">
          <strong>
            Software Developer, Liberty Mutual Insurance, Dover, NH - 2016 - Present
          </strong>
        </h6>
        <p>
          Worked with scrum team to architect and develop MidMarked Portal site for Liberty Mutual Benefits.
        </p>
        <ul>
          <li>
            Worked with scrum team to design and build out Portal site from scratch
            in Angular JS.
          </li>
          <li>
            Realized Angular JS is crap and helped lead the charge to refactor
            and rebuild entire portal in React.
          </li>
          <li>
            Worked with scrum team to design and build out component library
            to assist in portal development.
          </li>
          <li>
            Implemented Test Driven Development, utilizing various test libraries
            such as Mocha, Chia & Sinon; Enzyme; and Junit.
          </li>
          <li>
            Utilized Docker to deploy containers to AWS.
          </li>
          <li>
            Utilized the Atlasian tool suite for Source Control ( Bitbucket ),
            CICD ( Bamboo ), and KanBan/Scrum organization ( Jira ).
          </li>
          <li>
            Developed various backend  microservices using Java Spring. I wish
            I had used Node.js :(
          </li>
        </ul>
      </div>
      <div>
        <h6 className="mb-1">
          <strong>
            Technical Intern, BAE Systems, Hudson, NH — Summer 2015
          </strong>
        </h6>
        <p>
          Working on improving/automating testing on web applications.
        </p>
        <ul>
          <li>
            Researched various automated test tools and became familiar with Squish, Selenium,
            and EggPlant ( GUI testing tools ).
          </li>
          <li>
            Code fixes and enhancements.
          </li>
        </ul>
      </div>
      <div>
        <h6 className="mb-1">
          <strong>
             NPD ( Network Protection Device ) Technician, University of New Hampshire Interoperability lab, Durham, NH - 2015
          </strong>
        </h6>
        <p>
          Performed testing on NPDs to ensure they operate as expected.
        </p>
        <ul>
          <li>Developed new methods for testing.</li>
        </ul>
      </div>
      <div>
        <h6 className="mb-1">
          <strong>
            IPv6 Technician, University of New Hampshire Interoperability lab, Durham, NH - 2013 - 2015
          </strong>
        </h6>
        <p>
          Performed conformance and interoperability testing on switches, routers, and firewalls.
          Worked with various vendors to ensure their products met standards and cooperated with others.
        </p>
        <ul>
          <li>Worked with various Linux distributions as well as Free BSD </li>
          <li>Utilized numerous CLI interfaces to configure an assortment of routers and switches</li>
          <li>Collaborated with customers to perform system updates and resolve conflicts </li>
          <li>Enhanced IT skills by taking a vast array of training courses.</li>
        </ul>
      </div>
      <hr />
      <h4>Education</h4>
      <h6>
        <strong>
          Bachelor's Degree in Computer Science - University of New Hampshire, Durham — Graduated in 2016
        </strong>
      </h6>
      <hr />
      <h4>Other Professional Experience/Skills</h4>
      <div>
        <h6>
          <strong>
            Senior Project
          </strong>
        </h6>
        <p>
          Design and implement a decentralized application layer drone
          communication protocol on top of an ad-hoc network.
        </p>
        <ul>
          <li>Utalized vagrant to develop and share a test environment for protocol.</li>
          <li>Configured OLSR (Open Link State Routing) on various nodes to create real world test environment.</li>
          <li>Configured US Navys Common Open Research Emulator (CORE) to build virtual networks for testing.</li>
          <li>Created an inpimentation of our protocol in Node.js and developed various test tools and a simulator.</li>
        </ul>
      </div>
      <div>
        <h6>
          <strong>
            Robotic Arm
          </strong>
        </h6>
        <p>
          Designined and assembling full scale robotic arm.
        </p>
        <ul>
          <li>Solid works design</li>
          <li>Full scale working arm! Machined from aluminium.</li>
        </ul>
      </div>
      <div>
        <h6>
          <strong>
            Balancing Robot
          </strong>
        </h6>
        <p>
          Built a replica of the double robot.
        </p>
        <ul>
          <li>Completely from scratch with a 3D printed body.</li>
          <li>Coded in node.js that ran on a raspberry pi that integrated with an Arduino through usb.</li>
          <li>Code is on my github <a href="https://github.com/joepuzzo/mr-roboto">Mr.roboto</a></li>
        </ul>
      </div>
      <div>
        <h6>
          <strong>
            CNC Machine
          </strong>
        </h6>
        <p>
          Built a fully functional Wood CNC machine.
        </p>
        <ul>
          <li>Assembled from scratch</li>
          <li>Integrates with arduino and <a href="https://cnc.js.org/docs/">CNC.js</a></li>
          <li>Makes really cool stuff!</li>
        </ul>
      </div>
    </section>
  </div>
);

export default Resume;
