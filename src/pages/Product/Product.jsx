import React from 'react'
import './Product.scss'
import prod_img from './prod_images/image 3.png'


const Product = () => {
  return (
    <main>
      
      <section className='top_product'>
      <div className="container">
        <div className="links">
      <a href="#">Главная/</a><a href="#">Еда/</a><a href="#">Консервы/</a><a href="#">Говядина тушеная Улан Высший сорт</a>
      </div>
      <div className="main_product">
        <img src={prod_img} alt="Говядина тушеная" className='Prod_img' />
        <div className="prod_disc">
          <h1 className='prod_name'>Говядина тушеная Улан в/с</h1>
          <div className="price_chart">
          <p className='prod_price'>750 тг.</p> <p className='prod_old_price'>1 750 тг.</p>
          </div>
          
          <p className='prod_weight'>Вес: <span>395 гр.</span></p>
          <p className='prod_avalible'>Товар доступен: <span>11 шт.</span></p>
          <button className='incart_btn'>В корзину</button>
          <span><p className='prod_detial'>Продукт имеет высокие сроки хранения, а также не требует дополнительных условий при хранении. Кроме того, эта тушенка состоит исключительно из натуральных ингредиентов.
          </p></span>
        </div>
      </div>
      </div>  
      </section>
      <section className='suggested_prod'>
        <div className="container">
        <div className="sug_top">
          <h1>C этим обычно покупают</h1>
          <a href="#" className='view_all'>Cмотреть все</a> 
          </div>
          <div className="prod_wrapper">
            <div className="prod_card">
              <img src={prod_img} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть
              возможность в 2 строки</p>
              <div className="weight_avalible">
                <p className='sug_avalible'>В наличии: 11 шт.</p>
                <p>Вес: 130гр</p>
              </div>
                <div className="price_chart_sug">
                  <p className='sug_old_price'>28 030 тг.</p>
                  <p className='sug_new_price'>24 320 тг.</p>
                  <button className='sug_incart-btn'>В корзину</button>
                </div>
                
            </div>
            <div className="prod_card">
              <img src={prod_img} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть
              возможность в 2 строки</p>
              <div className="weight_avalible">
                <p className='sug_avalible'>В наличии: 11 шт.</p>
                <p>Вес: 130гр</p>
              </div>
                <div className="price_chart_sug">
                  <p className='sug_old_price'>28 030 тг.</p>
                  <p className='sug_new_price'>24 320 тг.</p>
                  <button className='sug_incart-btn'>В корзину</button>
                </div>
                
            </div>
            <div className="prod_card">
              <img src={prod_img} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть
              возможность в 2 строки</p>
              <div className="weight_avalible">
                <p className='sug_avalible'>В наличии: 11 шт.</p>
                <p>Вес: 130гр</p>
              </div>
                <div className="price_chart_sug">
                  <p className='sug_old_price'>28 030 тг.</p>
                  <p className='sug_new_price'>24 320 тг.</p>
                  <button className='sug_incart-btn'>В корзину</button>
                </div>
                
            </div>
            <div className="prod_card">
              <img src={prod_img} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть
              возможность в 2 строки</p>
              <div className="weight_avalible">
                <p className='sug_avalible'>В наличии: 11 шт.</p>
                <p>Вес: 130гр</p>
              </div>
                <div className="price_chart_sug">
                  <p className='sug_old_price'>28 030 тг.</p>
                  <p className='sug_new_price'>24 320 тг.</p>
                  <button className='sug_incart-btn'>В корзину</button>
                </div>
                
            </div>
          </div>
          </div>
      </section>
      
    </main>
    
  )
}

export default Product
