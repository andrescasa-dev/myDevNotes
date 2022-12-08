import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import ErrorUI from './assets/Components/ErrorUI'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorUI />
  },
  {
    path: "/about",
    element: <h1>About</h1>,
    errorElement: <ErrorUI />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
