import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorUI from './assets/Components/ErrorUI'
import About from './Components/About'
import BooksList from './Components/BooksList'
import booksData from './data/books'
import BookDetail from './Components/BookDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorUI />
  },
  {
    path: "/home/nextHome",
    element: <h1>nextHome</h1>,
  },
  {
    path: "/aboutMore",
    element: <About />,
    children: [
      {
        path: "company",
        element: <h1>Company</h1>
      }
    ]
  },
  {
    path: "/bookList",
    element: <BooksList />,
    // in real life it would be a fetch, get books data
    loader: async () => booksData,
  },
  {
    path: '/bookList/:id',
    // this would be another petition to any data base
    loader: async ({ params }) => booksData.find(book => book.id == params.id),
    element: <BookDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)