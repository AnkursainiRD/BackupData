import mongoose from "mongoose";

export const dbConnect=async()=>{
    try {
        mongoose.connect()
    } catch (error) {
        
    }
}