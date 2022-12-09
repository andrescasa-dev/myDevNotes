import React from 'react';
import { Link } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <h1>Hello Word!</h1>
      <Link to="/">App</Link>
      <Link to="/aboutMore">About</Link>
      <Link to="/home">Home</Link>
    </div>
  );
}

export default App;