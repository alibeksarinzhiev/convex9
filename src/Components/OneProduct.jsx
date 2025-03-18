import { useSelector } from 'react-redux'
import img6 from '../pages/Home/image 3.png'
const OneProduct = ({item}) => {

  const {data,isLoading} = useSelector(state=>state.products)
  if(item){
    return(
      <h1>isLoading</h1>
    )
  }else{
  return (
    <div className="prod_card">
    {/* <img src={item.images[0].url} alt="#" className='prod_photo' /> */}
    <p className='sug_prod_name'>{item?.name}</p>
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
  )
}}

export default OneProduct
