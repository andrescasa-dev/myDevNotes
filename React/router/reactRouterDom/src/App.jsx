import React from 'react';
import { Link } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <h1>Hello Word!</h1>
      <nav>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/aboutMore">About</Link></li>
          <li><Link to="./bookList">BookList</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;