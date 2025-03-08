import img4 from '../pages/Home/mm.png'
const NewsData = ({item}) => {

  return (
    <div className="card2">
    <img src={item.img} alt="" />
    <h3>{item.title}</h3>
    <p>{item.text} </p>
  </div>
  )
}

export default NewsData
