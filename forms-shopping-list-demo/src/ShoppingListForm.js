import React, { Component } from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', qty: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor='name'>Item Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='qty'>Quantity (1-10): </label>
        <input
          type='number'
          id='qty'
          name='qty'
          min='1'
          max='10'
          value={this.state.qty}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
export default ShoppingListForm;
