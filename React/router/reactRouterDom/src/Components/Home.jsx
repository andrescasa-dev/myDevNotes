import React from 'react';
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom"

function Home(props) {
  console.log(props)
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="./kitchen">kitchen</Link>
        <Link to="./nextHome">NextHome</Link>
        <Link to="./bookList">BookList</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;