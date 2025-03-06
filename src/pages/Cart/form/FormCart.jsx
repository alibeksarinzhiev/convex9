import React from 'react'
import "./styles.scss"
import CustomInput from '../components/input/CustomInput'

const FormCart = () => {
  return (
    <div className='cart_form'>
      <form className='form'>
            <h1>Оформление заказа</h1>
            <p className='lab'>Адрес</p>
            <CustomInput placeholder="Алматы"/>
            <CustomInput placeholder="ЕЦ-166/4"/>
            <p className='lab'>Данные получателя</p>
            <CustomInput placeholder="Логин"/>
            <label>
            <input type="checkbox" />
            Не знаю логин
            </label>
            <p className='lab'>Дата доставки</p>
            <CustomInput placeholder="дд.мм.гггг."/>
            <div className='form_price'>
                  <p className='itogo'>Итого:</p>
                  <p className='f_price'>32 500 тг.</p>
            </div>
            <label>
            <input type="checkbox" />
            Я подтверждаю, что ознакомлен и согласен с условиями публичной оферты электронного магазина Convex
            </label>
            <button className='sub_btn'>Выбрать вариант оплаты</button>
      </form>
    </div>
  )
}

export default FormCart
