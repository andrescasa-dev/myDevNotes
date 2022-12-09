import React from 'react';
import { Outlet, Link } from "react-router-dom"

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <Link to="./company">company</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;