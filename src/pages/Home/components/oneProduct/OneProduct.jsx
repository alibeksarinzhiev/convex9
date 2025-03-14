import React from 'react'

const OneProduct = () => {
  return (
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
  )
}

export default OneProduct
