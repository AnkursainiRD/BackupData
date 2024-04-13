import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

function HomePage() {
  function addToCartHandler(){

  }
  return (
    <div className="home">
        <section>

        </section>

        <h1>Latest Products <Link to={'/search'} className="findmore">More</Link></h1>

        <ProductCard productId="123kasdf" name="MacBook" stock={12}  price={78000} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"/>    </div>
  )
}

export default HomePage