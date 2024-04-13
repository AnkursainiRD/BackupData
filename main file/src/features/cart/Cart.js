import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { deleteItemFromCartAsync, selectItems, updateCartAsync } from './CartSlice';

export default function Cart() {

  const items=useSelector(selectItems)
  const dispatch=useDispatch()
  const totalAmount = items.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItem=items.reduce((total,item)=>item.quantity+total,0)
  const handleQuantity = (e, product) => {
    console.log(e.target.value);
    dispatch(updateCartAsync({...product,quantity: +e.target.value}))
  };
  
  function handleRemove(e,id){
    dispatch(deleteItemFromCartAsync(id))
  }
  return (
    <>
      {!items.length && <Navigate to='/'></Navigate>}
  <div class="container rounded-lg mx-auto mt-10">
    <div class="flex rounded-xl shadow-md my-10">
      <div class="w-3/4 rounded-lg bg-white px-10 py-10">
        <div class=" border-b pb-8">
        <Link to="/" class="focus:outline-none hover:underline text-gray-500 text-sm"><i class="mdi mdi-arrow-left text-gray-400"></i>Back</Link>
          <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Shopping Cart</h1>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>

        {items && items.map((product)=>{
            return(<div>
              {console.log("cart here",product)}
             <div class="flex rounded-lg items-center hover:bg-gray-100 -mx-8 px-6 py-5">
             <div class="flex w-2/5">
               <div class="w-20">
                 <img class="w-24" src={product.thumbnail} alt=""></img>
               </div>
               <div class="flex flex-col justify-between ml-4 flex-grow">
                 <span class="font-bold text-sm">{product.title}</span>
                 <span class="text-red-500 text-xs">{product.brand}</span>
                 <button onClick={e=>handleRemove(e,product.id)} class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
               </div>
             </div>
             <div className="text-gray-500 mr-20 ml-10">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                          </label>
                          <select
                            onChange={(e) => handleQuantity(e, product)}value={product.quantity}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
             <span class="text-center w-1/5 font-semibold text-sm">${product.price}</span>
             <span class="text-center w-1/5 font-semibold text-sm">${product.price}</span>
           </div></div>)
        })}


        <Link to="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Total Items {totalItem}</span>
          <span class="font-semibold text-sm">${totalAmount}</span>
        </div>

        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label htmlFor="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"></input>
        </div>
        <button class="rounded-lg bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${totalAmount}</span>
          </div>
          <Link to="/checkOut"><button class="bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button></Link>
        </div>
      </div>

    </div>
  </div>
    </>
  )
}
