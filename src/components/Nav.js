import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Scroll from './Scroll';

const NavItem = ({ path, text, ...rest }) => (
  <li className="navbar-item">
    <Link className="navbar-link" to={path} {...rest}>{text}</Link>
  </li>
);

const PopoverItem = ({ path, text, ...rest }) => (
  <li className="popover-item">
    <Link className="popover-link" to={path} {...rest}>{text}</Link>
  </li>
);

class PopOver extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.close.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close.bind(this));
  }

  toggle(e) {
    e.preventDefault();
    this.setState( ( prevState ) => ({
      open: !prevState.open
    }));
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    return (
      <li className="navbar-item">
        <a
          onClick={(e) => {
            this.toggle(e); 
          }}
          className="navbar-link"
          href="#"
          data-popover="#codeNavPopover">
          {this.props.text}
        </a>
        <div id="codeNavPopover" className={`popover ${this.state.open ? 'open' : ''}`} style={this.props.style}>
          {this.props.children}
        </div>
      </li>
    );
  }
}

const Nav = () => (
  <div>
    <Scroll render={({ active }) => (
      <div>
        <nav id="nav" className={`navbar ${active ? 'fixed' : ''}`}>
          {/* <div className={`container ${active ? '' : 'brdr-b-1'}`}> */}
          <div className="container">
            <ul className="navbar-list">
              <NavItem path="/home" text="Home" />
              {/* <NavItem path="/about" text="About" /> */}
              <PopOver text="Projects" style={{ left: '-30%' }}>
                <ul className="popover-list" style={{ right: 20 }}>
                  <PopoverItem path="/cnc" text="CNC" />
                  <PopoverItem path="/informed" text="Informed" />
                  <PopoverItem path="/robot-arm" text="Robot Arm" />
                  <PopoverItem path="/mr-roboto" text="Mr.Roboto" />
                  <PopoverItem path="/drone" text="Drone" />
                  <PopoverItem path="/collision-avoidence" text="Drone Communication Protocol" />
                  <PopoverItem path="/statemachine" text="StateMachine" />
                </ul>
              </PopOver>
              <NavItem path="/resume" text="Resume" />
            </ul>
          </div>
        </nav>
      </div>
    )} />
  </div>
);

export default Nav;
