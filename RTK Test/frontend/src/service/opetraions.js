import {toast} from "react-hot-toast"
import axios from "axios"
import { addData } from "../slice/DataSlice"


export const getData=async(dispatch)=>{
    const toastId=toast.loading("Loading...")
    try {
        const response=await axios.get("http://localhost:4000/sendData")
        console.log(response.data);
        localStorage.setItem('myData', JSON.stringify(response.data));
        dispatch(addData(response.data))
    } catch (error) {
        console.log(error);
    }
    toast.dismiss(toastId)
}