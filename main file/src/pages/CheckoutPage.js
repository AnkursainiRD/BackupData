import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectItems } from "../features/cart/CartSlice";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { selectLoggedInUser, updateUserAsync } from "../features/Auth/AuthSlice";
import { useState } from "react";
import { careateOrderAsync, selectCurrentOrder } from "../features/order/OrderSlice";

function CheckoutPage() {

    const items=useSelector(selectItems) 
    const { register,handleSubmit,formState: { errors }, } = useForm();
    const dispatch=useDispatch();
    const user=useSelector(selectLoggedInUser)
    const currentOrder=useSelector(selectCurrentOrder);
    const Amount = items.reduce((amount, item) => item.price * item.quantity + amount,0  );
    const taxAmount=Amount*(18/100);
    const totalAmount=taxAmount+Amount;
    const add=user.addresses
    const [currAddres, setCurrAddress]=useState(null)
    const [paymentMethod, setPaymentMethod]=useState('')

    function handleAddres(e,id){
        console.log("here",e.target);
        setCurrAddress(id)
    }

    function handlePaymentType(e){
        setPaymentMethod(e.target.value);
        console.log(paymentMethod);
    }

    function handleOrder(e){
        const order={items, totalAmount, taxAmount, status:"pending", paymentMethod, currAddres}
        dispatch(careateOrderAsync(order))
    }
        
    return ( 
        <> {!items.length && <Navigate to='/'></Navigate>}
        {currentOrder && <Navigate to={`/order-success/${currentOrder.id}`} replace={true}></Navigate>} 
    <div class="min-w-screen min-h-screen bg-gray-50 py-5">
    <div class="px-5">
        <div class="mb-2">
            <Link to="/cart" class="focus:outline-none hover:underline text-gray-500 text-sm"><i class="mdi mdi-arrow-left text-gray-400"></i>Back</Link>
        </div>
        <div class="mb-2">
            <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
        </div>
        <div class="mb-5 text-gray-400">
            <Link to="/" class="focus:outline-none hover:underline text-gray-500">Home</Link> / <Link to="/cart" class="focus:outline-none hover:underline text-gray-500">Cart</Link> / <span class="text-gray-600">Checkout</span>
        </div>
    </div>
    <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div class="w-full">
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-7/12 lg:pr-10">
                    <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        {/* Here is the items */}
               
                         {items && items.map((product)=>{
                            return(
                            <div class="w-full mt-5 flex items-center">
                            <div class="overflow-hidden rounded-lg w-20 h-16 bg-gray-50 border border-gray-200">
                                <img className="w-full h-16 object-contain" src={product.thumbnail} alt=""></img>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-semibold uppercase text-gray-600">{product.title}</h6>
                                <p class="text-gray-400">x {product.quantity}</p>
                            </div>
                            <div>
                                <span class="font-semibold text-gray-600 text-xl">${product.price*product.quantity}</span><span class="font-semibold text-gray-600 text-sm">.00</span>
                            </div>
                        </div>)
                        })}
                    </div>
                   
                    <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                        <div class="w-full flex mb-3 items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Subtotal</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">${Amount}</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">GST (%18)</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">${taxAmount}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Total</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold text-gray-400 text-sm">USD</span> <span class="font-semibold">${totalAmount}</span>
                            </div>
                        </div> 
                          
                    </div>
                    <div className="flex flex-row  flex-wrap">
                             {add.map((data)=>{   
                                return(
                                   
                                <div href="#" className="block w-80 p-6 mr-5     mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <input name="address" className="cursor-pointer" type="radio" onChange={(e)=>handleAddres(e,data)}></input>
                                <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {data.name}</h6>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Number : {data.number}</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Addres : {data.city}</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Pincode : {data.pincode}</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">State :  {data.state}</p>
                                </div>
                                )
                             })}
                   </div>          
                </div>
                <div class="px-3 md:w-5/12">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-3 items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold">Contact</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>Ankur Saini</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold">Billing Address</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>123 Subash Chandra Street, Meerut, India</span>
                            </div>
                        </div>
                    </div>
                    <form noValidate >
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                        <div class="w-full p-3 border-b border-gray-200">
        
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Full Name</label>
                                    <div>
                                        <input id="name" {...register('name', { required: 'Name is required', })} class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder=" " type="text"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Number</label>
                                    <div>
                                        <input id="number" {...register('number', { required: 'Number is required', })} class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" type="number"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Address</label>
                                    <div>
                                        <input id="address" {...register('address', { required: 'Address is required', })} class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder=" " type="text"/>
                                    </div>
                                </div>
                               <div className="flex justify-between items-center "> 
                               <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Pincode</label>
                                    <div>
                                        <input id="pincode" {...register('pincode', { required: 'Pincode is required', })} class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" type="number"></input>   
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">City</label>
                                    <div>
                                        <input id="city" {...register('city', { required: 'City is required', })} class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" type="text"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">State</label>
                                    <div>
                                        <input id="state" {...register('state', { required: 'State is required', })} class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" type="text"/>
                                    </div>
                                </div>
                                <button type="button" class="text-white h-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                onClick={handleSubmit((data) => {
                                    dispatch( updateUserAsync({...user,addresses:[...user.addresses,data]}));
                                    })}
                                
                                >Add Addres</button>
                               </div>
                        
                        </div>
                        
                        <div class="w-full p-3">
                            <label htmlFor="type2" class="flex items-center cursor-pointer">
                                <input type="radio" onChange={handlePaymentType} value="UPI" checked={paymentMethod === "UPI"} class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" ></input>
                                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png   " for='type2' width="80" class="ml-3"/>
                            </label>
                        </div>
                        <div class="w-full p-3">
                            <label htmlFor="type3" class="flex items-center cursor-pointer">
                                <input type="radio" onChange={handlePaymentType} value="CASH" checked={paymentMethod === "CASH"} class="form-radio h-5 w-5 text-indigo-500" name="type" id="type3"></input>
                                <img src="https://static.vecteezy.com/system/resources/previews/020/574/330/original/cash-on-delivery-badge-pack-free-png.png" for="type3" width="80" class="ml-3"/>
                            </label>
                        </div>
                        
                    </div>
                         
                    <div >
                        <button onClick={handleOrder}
                        class="block  w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> ORDER NOW</button>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
</div> </>);
}

export default CheckoutPage;