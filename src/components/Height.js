import React, { Component } from 'react';

class Height extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    const target = document.getElementById( this.props.target ) || this.target;
    this.setState({
      height: target.offsetHeight
    });
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    const target = document.getElementById( this.props.target ) || this.target;
    this.setState({
      height: target.offsetHeight
    });
  }

  render() {
    return (
      <div style={{height: this.state.height}} ref={(target) => { this.target = target; }} {...this.props}>
        { this.props.children }
      </div>
    );
  }

}

export default Height;
