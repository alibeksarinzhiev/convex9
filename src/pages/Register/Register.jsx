import React from 'react'
import './Register.scss'
import logo from './images/logo.png'
import Dismiss from './images/Dismiss.svg'

const Register = () => {
  return (
    <div className='register container'>
      <div className="registerTop">
        <img src={logo} alt="logo" />
        <div className="registerTop__right">
          <p>Назад на главную</p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register
