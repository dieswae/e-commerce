import './card.css'

const Box = (props) => {
  const   {imgUrl, title, description, price, rate} = props.product
  return (
    <div className='box'>
      <img src={imgUrl} ></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{price}$</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <button>Add to cart</button>
    </div>
  )
}

export default Box