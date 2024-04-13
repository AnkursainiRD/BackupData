import mongoose from "mongoose";
const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    secret:{
        type:Number,
        required:true
    },
    booking:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hotel"
        }
    ]
},{timestamps:true})

const Admin=mongoose.model("Admin",adminSchema)