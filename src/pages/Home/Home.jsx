import React from 'react'
import img from './Rectangle 3.png'
import img2 from './artage-io-thumb-16198c8e109d22e6d72d411c890c655a 1@2x.png'
import img3 from './image 5.png'
import img4 from './m_m_PNG33 1.png'
import img5 from './disc 1.png'
import img6 from './image 3.png'
import './Home.scss'


const Home = () => {
  return (
    <main className='home'>
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
            <div className="card2">
              <img src={img4} alt="" />
              <h3>Новинки</h3>
              <p>Новые позиции </p>
            </div>
            <div className="card3">
              <img src={img5} alt="" />
              <h3>Акции</h3>
              <p>Лучшие цены </p>
            </div>
            <div className="card4">
              <img src={img3} alt="" />
              <h3>Комплекты</h3>
              <p>Все в одном </p>
            </div>
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
            <div className="prod_card">
              <img src={img6} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть
                возможность в 2 строки</p>
              <div className="weight_avalible">
                <p className='sug_avalible'>В наличии: 11 шт.
                </p>
                <p>Вес: 130гр</p>
              </div>
              <div className="price_chart_sug">
                <p className='sug_old_price'>28 030 тг.</p>
                <p className='sug_new_price'>24 320 тг.</p>
                <button className='sug_incart-btn'>В корзину</button>
              </div>

            </div>
            <div className="prod_card">
              <img src={img6} alt="#" className='prod_photo' />
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
              <img src={img6} alt="#" className='prod_photo' />
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
              <img src={img6} alt="#" className='prod_photo' />
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
      <section className='new'>
        <div className="new__container container">
          <div className="new__top">
            <h2>Новинки</h2>
            <p>Cмотреть все</p>
          </div>
          <div className="new_wrapper">
            <div className="prod_card">
              <img src={img6} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть
                возможность в 2 строки</p>
              <div className="weight_avalible">
                <p className='sug_avalible'>В наличии: 11 шт.
                </p>
                <p>Вес: 130гр</p>
              </div>
              <div className="price_chart_sug">
                <p className='sug_old_price'>28 030 тг.</p>
                <p className='sug_new_price'>24 320 тг.</p>
                <button className='sug_incart-btn'>В корзину</button>
              </div>

            </div>
            <div className="prod_card">
              <img src={img6} alt="#" className='prod_photo' />
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
              <img src={img6} alt="#" className='prod_photo' />
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
              <img src={img6} alt="#" className='prod_photo' />
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
      <section className='popular'>
        <div className="popular__container container">
          <div className="popular__top">
            <h2>Популярные товары</h2>
            <p>Cмотреть все</p>
          </div>
          <div className="popular_wrapper">
            <div className="prod_card">
              <img src={img6} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть <br />
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
              <img src={img6} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть <br />
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
              <img src={img6} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть <br />
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
              <img src={img6} alt="#" className='prod_photo' />
              <p className='sug_prod_name'>Конина тушеная Улан, есть <br />
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

export default Home
