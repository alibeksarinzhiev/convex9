import React, { useState } from 'react'
import "./Login.scss"
import logo from "../Register/logo.svg"
import Dismiss from "../Register/Dismiss.svg"
import axios from 'axios'
import { login } from '../../store/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')


const dispatch = useDispatch()
const navigate = useNavigate()
const loginUser = ()=>{
  const user = {
    username,
    password
  }
  axios.post('https://macaron.onrender.com/api/users/login',user)
  .then(({data})=>{
    dispatch(login(data))
    localStorage.setItem('user',JSON.stringify(data))
  })
  
  .then(()=>navigate('/'))
}
  return (
    <div className='register'>
      <div className="register container">
        <div className="registerTop">
          <img id='one' src={logo} alt="" />
          <div className="registerTopText">
            <p>Назад на главную</p>
            <img className='goBack' src={Dismiss} alt="" />
          </div>
        </div>
        <div className="registerMainContent">
          <h2>Вход</h2>
          <div className="registerBox">
            <div className="registerLine">
              <p>username</p>
              <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Введите ваш username' />
            </div>
            <div className="registerLine">
              <p>Пароль</p>
              <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Введите пароль' />
            </div>
          </div>
          <button onClick={()=>loginUser()} className='enter'>Войти</button>
          <p className='or'>или</p>
          <button  className='regPageLink'>Зарегистрироваться</button>
          <p className='otherOptions'>Забыли пароль?</p>
        </div>
      </div>
    </div>
  )
}

export default Login
