function compareString(s1, s2, s3) {
  if (s1 === s2 && s2 == s3) return 1;
  else return 0;
}

class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const fruitStyles = { fontSize: '35px' };
    return (
      <div className='Machine'>
        <p
          style={fruitStyles}
          className={compareString(s1, s2, s3) ? 'winner' : 'loser'}
        >
          {s1}
          {s2}
          {s3}
        </p>
        <p>{compareString(s1, s2, s3) ? 'You win!' : 'You lose!'}</p>
      </div>
    );
  }
}
