import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      isWinner: false,
      max: 10
    };
    this.randNum = this.randNum.bind(this);
  }

  randNum() {
    let rand = Math.floor(Math.random() * this.state.max) + 1;
    if (rand === 7) this.setState({ isWinner: true });
    this.setState({ num: rand });
  }

  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>

        {this.state.isWinner ? (
          <h2>You da man!!</h2>
        ) : (
          <button onClick={this.randNum}>Get Number</button>
        )}
      </div>
    );
  }
}
export default Clicker;
