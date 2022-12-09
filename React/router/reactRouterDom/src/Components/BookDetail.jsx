import React from 'react';
import { useLoaderData } from 'react-router-dom';


function BookDetail(props) {
  const {title, price, description} = useLoaderData()
  return (
    <div>
      <h1>{title}</h1>
      <h2>price: {price}$</h2>
      <p>{description}</p>
    </div>
  );
}

export default BookDetail;