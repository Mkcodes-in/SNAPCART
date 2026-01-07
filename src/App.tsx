import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Category from './pages/Category'
import ProductDetails from './components/ProductDetails'
import { Toaster } from './components/ui/sonner'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Order from './components/Order'
import Checkout from './components/Checkout'

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
          <Route
            element={<Cart />}
            path='/cart'
          />
          <Route
            element={<Wishlist />}
            path='/wishlist'
          />
          <Route
            element={<Order />}
            path='/orders'
          />
          <Route
            element={<Checkout />}
            path='/checkout'
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
