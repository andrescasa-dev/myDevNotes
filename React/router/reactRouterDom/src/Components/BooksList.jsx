import React from 'react';
import { useLoaderData, Link, json } from 'react-router-dom'

function BooksList(props) {
  const booksData = useLoaderData()
  const books = booksData.map(book => (
    <li key={book.id}>
      <Link to={`./${book.id}`}> {book.title} </Link>
    </li>
  ))
  return (
    <div>
      <h1>Books</h1>
      <ol>
        {books}
      </ol>
    </div>
  );
}

export default BooksList;