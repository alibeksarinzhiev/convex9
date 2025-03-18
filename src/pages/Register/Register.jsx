import React, { useState } from 'react'
import "./Register.scss"
import logo from "./logo.svg"
import Dismiss from "./Dismiss.svg"
import Chevron from "./Chevron.svg"
import axios from 'axios'
import { useDispatch } from 'react-redux'

const Register = () => {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [company,setCompany] = useState('')
  const [city,setCity] = useState('')
  const [password,setPassword] = useState('')
  const [check,setCheck] = useState(false)
  const [checkbox,setCheckbox] = useState(false)
  
const dispatch = useDispatch()
const registerUser = ()=>{
  const user = {
    email,
    username:name,
    phone,
    company,
    city,
    password
  }
  axios.post('https://macaron-production.up.railway.app/api/users/reg',user)

}

const togglePassword = ()=>{
  setCheck(!check)
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
          <h2>Регистрация</h2>
          <div className="registerBox">
            <div className="registerLine">
              <p>email*</p>
              <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' />
            </div>
            <div className="registerLine">
              <p>Имя*</p>
              <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Введите ваше имя' />
            </div>
            <div className="registerLineData">
              <p className='born'>phone*</p>
              <div className="dataLine">
                <div className="dayMonthYear">
                  <input  onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='phone' />
                </div>
              </div>
            </div>
            <div className="registerLine choosePol">
              <p>company*</p>
              <input onChange={(e)=>setCompany(e.target.value)} type="text" placeholder='company' className='choose'/>
            </div>
            <div className="registerLine">
              <p>city*</p>
              <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder='city' />
            </div>
            <div className="registerLine">
              <p>password*</p>
              <p onClick={()=>togglePassword()}>{check?'скрыть пароль':'показать пароль'}</p>
              <input onChange={(e)=>setPassword(e.target.value)} type={check?'text':'password'} placeholder='password'/>
            </div>
          </div>
          <div className="submit">
            <input  type="checkBox"/>
            <p className='sub'>Я подтверждаю, что ознакомлен и согласен с условиями <a href="#">публичной оферты </a>электронного магазина Convex</p>
          </div>
          <button onClick={()=>registerUser()} className='registrate'>Регистрация</button>
        </div>
      </div>
    </div>
  )
}

export default Register
