class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Image</h1>
        <img src='https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
