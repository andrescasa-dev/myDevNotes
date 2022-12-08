import App from './App'
import ErrorUI from './assets/Components/ErrorUI'
import { createBrowserRouter } from 'react-router-dom'

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorUI />
  }
])