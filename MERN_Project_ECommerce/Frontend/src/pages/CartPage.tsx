import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

const cartitems=[
  {
   productId:'adfasdf',
   name:"MacBook Mini 1",
   stok:12,
   price:67000,
   photo:'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
   quantity:2
  },
  {
    productId:'gfhfgh',
    name:"MacBook Mini Air",
    stok:12,
    price:50000,
    photo:'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
    quantity:2
   },
   {
    productId:'xcvcnnf',
    name:"MacBook Air 2",
    stok:12,
    price:90000,
    photo:'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
    quantity:2
   }
];
const subtotal=78000;
const tax=Math.round(subtotal*0.18);
const shippingCharges=200;
const discount=400;
const total=subtotal+tax+shippingCharges;

function CartPage() {
  const [cuponCode,setCuponCode]=useState<string>('')
  const [vaildCouponCode,setValidCouponCode]=useState<boolean>()

  useEffect(()=>{
    const timeoutId=setTimeout(()=>{
      if(Math.random()>0.5) setValidCouponCode(true)
      else setValidCouponCode(false)
    },1000)

    return ()=>{
      clearTimeout(timeoutId)
      setValidCouponCode(false)
    }
  },[cuponCode])
  return (
    <div className="cart">
      <main>
        {
         cartitems?.length>0 ?( 
          cartitems && (
          cartitems.map((card)=>(
            <CartItems cartitems={card}/>
          ))
        )):
        (
          <h1>No Items in Cart!</h1>
        )
        }
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>

        <p> Discount - <em>- ₹{discount}</em></p>
        <p><b>Total: ₹{total}</b></p>

        <input type="text" value={cuponCode} onChange={(e)=>setCuponCode(e.target.value)} placeholder="Coupon Code"/>

        {
          cuponCode &&(
            vaildCouponCode? <span className="green">₹{discount} off using the <code>{cuponCode}</code></span> : <span className="red">Invalid Code<VscError/></span>
          )
        }

        {
          cartitems?.length>0 &&(
            <Link to='/shipping'>Checkout</Link>
          )
        }
      </aside>
    </div>
  )
}

export default CartPage