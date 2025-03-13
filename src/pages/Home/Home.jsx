import React from 'react'
import img from './Rectangle 3.png'
import img2 from './artage-io-thumb-16198c8e109d22e6d72d411c890c655a 1@2x.png'
import img3 from './paket.png'
import img4 from './mm.png'
import img5 from './procent.png'
import img6 from './image 3.png'
import './Home.scss'
import { useState } from 'react'
import NewsData from '../../Components/NewsData'
import { dataNews } from '../../data/data'
import OneProduct from '../../Components/OneProduct'
import { useSelector } from 'react-redux'

const Home = () => {


 
 
  return (
    <main className='home'>
      <h1></h1>
      <section className='banner'>
        <div className="banner__container container">
          <div className="banner__top">
            <div className="banner__left">
              <h2>Всегда свежие молочные продукты</h2>
              <p>Только качественные товары, за которыми мы всегда следим</p>
              <button>Подробнее</button>
            </div>
            <div className="banner__right">
              <img src={img} alt="" />
            </div>

          </div>
          <div className="banner__bottom">
            <div className="card">
              <img src={img2} alt="" />
              <h3>Горячие блюда</h3>
              <p>Вкуснейшие блюда из 4 ресторанов </p>
            </div>
         

          
          {dataNews.map((item)=>(
            <NewsData key={item.id} item={item}/>
          ))}
        
          </div>
        </div>
      </section>
      <section className='action'>
        <div className="action__container container">
          <div className="action__top">
            <h2>Акции</h2>
            <p>Cмотреть все</p>
          </div>
          <div className="prod_wrapper">
            
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
          </div>

        </div>

      </section>
      <section className='new'>
        <div className="new__container container">
          <div className="new__top">
            <h2>Новинки</h2>
            <p>Cмотреть все</p>
          </div>
          <div className="new_wrapper">
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
          </div>
        </div>
      </section>
      <section className='popular'>
        <div className="popular__container container">
          <div className="popular__top">
            <h2>Популярные товары</h2>
            <p>Cмотреть все</p>
          </div>
          <div className="popular_wrapper">
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
            <OneProduct/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
