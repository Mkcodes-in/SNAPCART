import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Category from './pages/Category'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <Routes>
      <Route
        element={<MainLayout />}
      >
        <Route
          element={<Home />}
          path='/'
        />
        <Route
          element={<Products />}
          path='/products'
        />
        <Route
          element={<ProductDetails />}
          path='/products/:id'
        />
        <Route
          element={<Category />}
          path='/categories'
        />
      </Route>
    </Routes>
  )
}

export default App
