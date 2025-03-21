import { useDispatch, useSelector } from "react-redux"
import logoImage from "./image/image 1.png"
import locationImage from "./image/Location.png"
import searchIcon from "./image/Search.png"
import { userLogout } from "../../store/userSlice"

const HeaderTop = () => {

  const user = useSelector(state=>state.user.user.username)
  const dispatch = useDispatch()
  const logout = ()=>{
    dispatch(userLogout())
  }

  return (
    <div className="headerTop">
      <div className="headerTop__container container">
            <img src={logoImage} alt="" />
            <div className="headerTop__phone">
                <p>Бесплатный звонок</p>
                <h4>8 800 080 5011</h4>
            </div>
            <img src={searchIcon} alt="" className="headerTop__searchImg"/>
            <input type="text" placeholder="Поиск товаров"/>
            <div className="headerTop__location">
              <div className="headerTop__location-text">
              <img src={locationImage} alt="" className="headerTop__img"/>
              <h5>ЕЦ-166/4</h5>
              </div>
              <p>Нур-Султан</p>
            </div>
            <button onClick={()=>logout()}>{user?'Выйти':'Войти'}</button>
      </div>
    </div>
  )
}

export default HeaderTop
