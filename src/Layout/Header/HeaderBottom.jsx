import React from 'react'
import cartImage from "./image/cart.png"
import { Link } from 'react-router-dom'

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
     <div className="headerBottom__container container">
<ul>
  <li><Link to= './catalog'>Продукты </Link></li> 
  <li>Еда быстрого приготовления</li>
  <li>Консервы</li>
  <li>Напитки</li>
  <li>Бытовая химия</li>
  <li>Уход за собой</li>
  <li className="green-li">Еще</li>
</ul>
<button>
  <img src={cartImage} alt="" />
  <div className="headerBottom__cart-text">
    <h5>Корзина</h5>
    <p>2 400 г.</p>
  </div>
  <div className="headerBottom__badge">
    <h5>12</h5>
  </div>
</button>
     </div>
   
      
    </div>
  )
}

export default HeaderBottom
