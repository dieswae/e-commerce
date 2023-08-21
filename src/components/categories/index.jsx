import Card from '../card/index'
import './categories.css'


const Categories = (props) => {
  const productsItems = props.products.map((product,key) => {
    return <Card key={`product-${key}`} product={product} />
  })

  return (
    <div className='categories'>
      <h4>{props.title}</h4>
      <div className='categories-product'>{productsItems}</div>
      <button className='button-1'>left</button>
      <button className='button-2'>right</button>
    </div>
  )
}

export default Categories