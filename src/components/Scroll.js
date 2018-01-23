import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Scroll extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      height: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const pageOffset = window.pageYOffset;
    const target = document.getElementById( this.props.target ) || this.target;
    this.setState({
      active: pageOffset >= target.offsetTop,
      height: target.offsetHeight
    });
  }

  render() {
    return (
      <div ref={(target) => { this.target = target; }}>
        { this.props.render( { ...this.state } ) }
      </div>
    );
  }

}

export default Scroll;
