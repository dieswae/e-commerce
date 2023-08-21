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
    </div>
  )
}

export default Categories