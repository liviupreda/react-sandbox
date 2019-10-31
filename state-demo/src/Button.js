import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <button onClick={e => console.log('Click')}>CLICK ME</button>;
  }
}

export default Button;
