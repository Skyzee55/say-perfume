import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import ProductListPage from '@/pages/ProductListPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutUsPage from './pages/AboutUsPage'

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto py-6">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductListPage/>} />
          <Route path="/product/:id" element={<ProductDetailPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/aboutus" element={<AboutUsPage/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App