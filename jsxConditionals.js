function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h1>Lucky number Seven</h1>
          <img src='https://media.giphy.com/media/3ohryhNgUwwZyxgktq/giphy.gif' />
        </div>
      );
    } else {
      msg = <p>NOT Seven</p>;
    }
    return (
      <div>
        <h1>Your random number is: {num} </h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
