import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,          
        trim:true,
    },
    email:{
        type:String,
        required:true,          
        trim:true,
    },  
    phone_number:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    rating:{
       type:mongoose.Schema.Types.ObjectId,
        ref:"Hotel"
    },
    person:{
        type:Number,
        required:true
    },
    current_booking:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hotel"
        }
    ]
},{timestamps:true})

const User=mongoose.model("User",userSchema);