import React from 'react'
import "./styles.scss"
import OneCartProduct from './components/oneproduct/OneCartProduct'
import OneProduct from './components/product/OneProduct'

const Cart = () => {
  return (
    <main className='main_page'>
      <section className='cart'>
          <div className='product_container'>
            <div className='heading'>
              <h2>Корзина</h2>
              <p>Очистить корзину</p>
            </div>
            <div className='product_list'>
              <OneCartProduct/>
              <OneCartProduct/>
              <OneCartProduct/>
              <OneCartProduct/>              
            </div>
          </div>
          <form className='product_form'>
            <button className='submit'>Оформить заказ</button>
            <button className='promo'>Использовать промокод</button>
            <div className='prom_info'>
                <div className='one_promo_info'>
                  <p>Количество единиц:</p>
                  <p>12</p>
                </div>
                <div className='one_promo_info'>
                  <p>Количество единиц:</p>
                  <p>12</p>
                </div>
                <div className='one_promo_info'>
                  <p>Количество единиц:</p>
                  <p>12</p>
                </div>
                <div className='one_promo_info'>
                  <p>Количество единиц:</p>
                  <p>12</p>
                </div>
                <div className='one_promo_info'>
                  <p>Количество единиц:</p>
                  <p>12</p>
                </div>
                <div className='one_promo_info'>
                  <p>Количество единиц:</p>
                  <p>12</p>
                </div>
            </div>
            <div className='finol_price'>
              <p className='__t'>Итого:</p>
              <p className='__b'>32 500 тг.</p>
            </div>
          </form> 
      </section>
      <section className='recomend'>
      <div className='recomend_heading'>
              <h2>Свежие акции</h2>
              <p>Cмотреть все</p>
            </div>
            <div className='product_biger_list'>
              <OneProduct/>
            </div>
      </section>
    </main>
  )
}

export default Cart
