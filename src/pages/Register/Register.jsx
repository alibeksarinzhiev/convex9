import React from 'react'
import "./Register.scss"
import logo from "./logo.svg"
import Dismiss from "./Dismiss.svg"
import Chevron from "./Chevron.svg"

const Register = () => {
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
              <p>Фамилия*</p>
              <input type="text" placeholder='Введите фамилию' />
            </div>
            <div className="registerLine">
              <p>Имя*</p>
              <input type="text" placeholder='Введите ваше имя' />
            </div>
            <div className="registerLineData">
              <p className='born'>Дата рождения*</p>
              <div className="dataLine">
                <div className="dayMonthYear">
                  <input type="text" placeholder='День' />
                  <img src={Chevron} alt="" className="chevron" />
                </div>
                <div className="dayMonthYear">
                  <input type="text" placeholder='Месяц' />
                  <img src={Chevron} alt="" className="chevron" />
                </div>
                <div className="dayMonthYear">
                  <input type="text" placeholder='Год' />
                  <img src={Chevron} alt="" className="chevron" />
                </div>
              </div>
            </div>
            <div className="registerLine choosePol">
              <p>Пол*</p>
              <input type="text" placeholder='Выберите пол' className='choose'/>
              <img src={Chevron} alt="" className='arrow' />
            </div>
            <div className="registerLine">
              <p>Спецучреждение</p>
              <input type="text" placeholder='ЕЦ-166/4' />
            </div>
          </div>
          <div className="submit">
            <input type="checkBox"/>
            <p className='sub'>Я подтверждаю, что ознакомлен и согласен с условиями <a href="#">публичной оферты </a>электронного магазина Convex</p>
          </div>
          <button className='registrate'>Регистрация</button>
        </div>
      </div>
    </div>
  )
}

export default Register
