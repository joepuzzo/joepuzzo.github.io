import React from 'react';

const NavItem = ({ path, text }) => (
  <li className="navbar-item">
    <a className="navbar-link" href={path}>{text}</a>
  </li>
);

const Nav = () => (
  <div className="container">
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <NavItem path="#home" text="Home" />
          <NavItem path="#home" text="About" />
          <NavItem path="#home" text="Foo" />
          <NavItem path="#home" text="Bar" />
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
