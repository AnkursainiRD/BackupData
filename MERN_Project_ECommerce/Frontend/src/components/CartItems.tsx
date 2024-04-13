import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"

type CartItemsProps={
    cartitems:any
}

function CartItems({cartitems}:CartItemsProps) {
    const {price,quantity,photo,productId,name}=cartitems
  return (
    <div className="cart-items">
        <img src={photo} alt={name} />
        <article>
            <Link to={`/product/${productId}`}>{name}</Link>
            <span>₹ {price}</span>
        </article>

        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <button>
            <FaTrash/>
        </button>
    </div>
  )
}

export default CartItems