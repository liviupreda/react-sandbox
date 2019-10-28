function compareString(s1, s2, s3) {
  if (s1 === s2 && s2 == s3) return 1;
  else return 0;
}

class Machine extends React.Component {
  render() {
    const props = this.props;
    return (
      <div>
        <p>
          {props.s1}
          {props.s2}
          {props.s3}
        </p>
        {compareString(props.s1, props.s2, props.s3) ? (
          <p>You win!</p>
        ) : (
          <p>You lose!</p>
        )}
      </div>
    );
  }
}
