import React, { Component } from 'react';

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    // Set context for handleClick, if not using fat arrow for event handlers
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked' : 'Not clicked'}</h1>
        <button onClick={this.handleClick}>CLICK ME</button>
      </div>
    );
  }
}

export default BrokenClick;
