import React from 'react';
import { Link } from 'react-router-dom';

import Scroll from './Scroll';

const NavItem = ({ path, text }) => (
  <li className="navbar-item">
    <Link className="navbar-link" to={path}>{text}</Link>
  </li>
);

const Nav = () => (
  <div>
    <Scroll render={({ active }) => (
      <div>
        <nav id="nav" className={`navbar ${active ? 'fixed' : ''}`}>
          {/* <div className={`container ${active ? '' : 'brdr-b-1'}`}> */}
          <div className="container">
            <ul className="navbar-list">
              <NavItem path="/home" text="Home" />
              <NavItem path="/about" text="About" />
              <NavItem path="#home" text="Foo" />
              <NavItem path="#home" text="Bar" />
            </ul>
          </div>
        </nav>
      </div>
    )} />
  </div>
);

export default Nav;
