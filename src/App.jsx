import './App.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import Home from './pages/home/home'
// const Home = () => <h1>Home</h1>
import Product from './pages/products/product'

// const SearchPage= () => <h1>Search Page</h1> 

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [ {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Product/>
      }]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
