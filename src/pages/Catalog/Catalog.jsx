import React from 'react'
import  './Catalog.scss'
import prod_img from './images/image 3.png'
const Catalog = () => {
  return (
    <div className='main'>
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
    </div>
    </div>
  )
}
export default Catalog
