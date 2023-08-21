import Categories from "../../components/categories"
import image from '../../../public/download.jpg';

const products = [
  
  {
    imgUrl: image,
    title: "Vans classic",
    description: "Classic shoes for staker",
    rate: 4,
    price: 40.35
  },
  {
    imgUrl: image,
    title: "Vans classic 2",
    description: "Classic shoes for staker",
    rate: 4,
    price: 40.35


  },
  {
    imgUrl: image,
    title: "Vans classic 3",
    description: "Classic shoes for staker",
    rate: 4,
    price: 40.35


  },
  {
    imgUrl: image,
    title: "Vans classic 3",
    description: "Classic shoes for staker",
    rate: 4,
    price: 40.35


  }
]
export const Home = () => {

  //cal to api for get 
  
  return (
    <Categories products={products} title={"Calzados"} />
  )
}

export default Home