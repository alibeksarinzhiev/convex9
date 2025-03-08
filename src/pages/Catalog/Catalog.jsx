import React from 'react'
import  './Catalog.scss'
import prod_img from './images/image 3.png'
import { useState } from 'react'
import OneProduct from '../../Components/OneProduct'

const Catalog = ({data}) => {


  return (
    <div className='main'>
      <h1>{data}</h1>
    <div className='container'>
      <section className='Search'>
      <div className='search__left'>
        <span>Главная / Еда / Консервы  </span>
        <h1>Консервы</h1>
        <h4>Стоимость в тенге</h4>
        <div className='cost'>
          <p>от</p>
          <input type="text" placeholder='0 тг'/>
          <p>до</p>
          <input type="text" placeholder='0 тг'/>
        </div>
        <h4>Вес (грамм)</h4>
        <div className='weight'>
        <p>от</p>
          <input type="text" placeholder='0 тг'/>
          <p>до</p>
          <input type="text" placeholder='0 тг'/>
        </div>
        <form className='checkbox'>
        <label>
          <input type="checkbox" />
          Акции
        </label>
        <label>
          <input type="checkbox" />
          В наличии
        </label>
        <label>
          <input type="checkbox" />
          В наличии
        </label>
        <label>
          <input type="checkbox" />
          Новинки
        </label>
        </form>
        <div className='search__button'>
        <button className='get'>Применить</button>
        <button className='post'>Сбросить</button>
        </div>
      </div>
      <div className='search__right'>
        <div className="sort">
          <p>16 товаров</p>
          <p>По увеличению цены</p>
        </div>
      <div className="prod_wrapper">
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            
          </div>
      </div>
      </section>
    </div>
    </div>
  )
}
export default Catalog
