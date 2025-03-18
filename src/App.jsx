import React, { useState,useEffect} from 'react'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import { Route,Routes, useNavigate } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Register from './pages/Register/Register'
import Layout from './Layout/Layout'
import './Global/style.scss'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'
import Login from './pages/Login/Login'
import { useDispatch } from 'react-redux'
import { login } from './store/userSlice'
import AdminPost from './pages/adminPost/adminPost'
import axios from 'axios'
import { fetchProducts } from './store/productsSlice'
const App = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
  useEffect(()=>{
 dispatch(fetchProducts())

    if(localStorage.getItem('user')){
      dispatch(login(JSON.parse(localStorage.getItem('user'))))
    } else{
        navigate('/login')
    }
  },[])

 

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='adminpost' element={<AdminPost/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    
       
      
    </>
  )
}

export default App
