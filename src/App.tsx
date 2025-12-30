import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Category from './pages/Category'
import ProductDetails from './components/ProductDetails'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <>
      <Toaster />
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
    </>
  )
}

export default App
