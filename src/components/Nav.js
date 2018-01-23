import React from 'react';

import Scroll from './Scroll';

const NavItem = ({ path, text }) => (
  <li className="navbar-item">
    <a className="navbar-link" href={path}>{text}</a>
  </li>
);

const Nav = () => (
  <div>
    <Scroll render={({ active }) => (
      <div>
        <nav id="nav" className={`navbar mb-4 ${active ? 'fixed' : ''}`}>
          <div className={`container ${active ? '' : 'brdr-b-1'}`}>
            <ul className="navbar-list">
              <NavItem path="#home" text="Home" />
              <NavItem path="#home" text="About" />
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
