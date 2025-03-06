import React from 'react'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import { Route,Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Register from './pages/Register/Register'
import Layout from './Layout/Layout'
import './Global/style.scss'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'
import Login from './pages/Login/Login'
const App = () => {
  return (
    <>
   
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </>
  )
}

export default App
