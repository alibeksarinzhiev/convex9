import './Footer.scss'

import facebookIcon from "./image/Group 3 (1).png"
import instaIcon from "./image/Group 4.png"
import twitterIcon from "./image/Twitter (2).png"
import ageLimit from "./image/age-limit 1.png"
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <div className="footer__footerTop">
          <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Вопрос-Ответ</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Пополнение баланса</a></li>
          </ul>
          <div className="footer__phone-number">
            <p>Бесплатно по Казахстану</p>
            <h5>8 800 080 50 11</h5>
            <h4>8 727 225 50 11</h4>
          </div>
        </div>
        <div className="footer__footerBottom">
          <ul>
            <li><a href="#">2019 © Convex</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Публичная оферта</a></li>
            <li><a href="#">Условия возврата</a></li>
          </ul>
          <div className="footer__icon">
            <img src={facebookIcon} alt="" />
            <img src={instaIcon} alt="" />
            <img src={twitterIcon} alt=""/>
          </div>
          <img src={ageLimit} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
