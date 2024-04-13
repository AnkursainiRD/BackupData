import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom"


function ShippingPage() {
    const navigate=useNavigate()
    const [shippingInfo,setShippingInfo]=useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pincode:""
    })

    function changeHandler(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        setShippingInfo(prev=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
    <div className="shipping">
        <button className="back-btn" onClick={()=>navigate("/cart")}><BiArrowBack/></button>

        <form >
            <h1>Shipping Address</h1>

            <input type="text"placeholder="Address" name="address" value={shippingInfo.address} onChange={changeHandler} required/>
            <input type="text"placeholder="State" name="state" value={shippingInfo.state} onChange={changeHandler} required/>
            <input type="number"placeholder="Pin-Code" name="pincode" value={shippingInfo.pincode} onChange={changeHandler} required/>

            <select name="country" required value={shippingInfo.country}>
                <option value="">Choose Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="europe">Europe</option>
            </select>
            
            <button type="submit">Pay Now</button>
        </form>
    </div>
  )
}

export default ShippingPage