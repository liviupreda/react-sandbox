import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      gameOver: false
    };
  }

  handleClick = e => {
    this.setState({ clicked: true });
  };

  randomNumber = () => {
    let rand = Math.floor(Math.random() * 10 + 1);
    return rand;
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.clicked
            ? `Number is: ${this.randomNumber()}`
            : 'Click ze button'}
        </h1>
        {!this.state.gameOver ? (
          <button onClick={this.handleClick}>CLICK ME</button>
        ) : (
          <h1>You lucky dawg!</h1>
        )}
      </div>
    );
  }
}

export default Clicker;
