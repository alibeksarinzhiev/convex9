import React from 'react'
import "./Login.scss"
import logo from "../Register/logo.svg"
import Dismiss from "../Register/Dismiss.svg"

const Login = () => {
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
              <p>Логин</p>
              <input type="text" placeholder='Введите ваш логин' />
            </div>
            <div className="registerLine">
              <p>Пароль</p>
              <input type="text" placeholder='Введите пароль' />
            </div>
          </div>
          <button className='enter'>Войти</button>
          <p className='or'>или</p>
          <button className='regPageLink'>Зарегистрироваться</button>
          <p className='otherOptions'>Забыли пароль?</p>
        </div>
      </div>
    </div>
  )
}

export default Login
