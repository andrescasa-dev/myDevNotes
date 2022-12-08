import React from 'react';
import { Link } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <h1>Hello Word!</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
    </div>
  );
}

export default App;