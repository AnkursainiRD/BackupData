import mongoose from "mongoose";
const hotelSchema=new mongoose.Schema({
    owner:{
        type:String,
        required:true
    },
    hotel_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    photos:[
        {
            type:String, //From cloudinary
            required:true
        }
    ],
    rating:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"User",
          default:0
        }
    ],
    facilities:[
        {
            type:String,
            required:true
        }
    ],
    offers:[
        {
            type:String,
            required:true
        }
    ],
    price:{
        type:Number,   
        default:2000
    },
    booking:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]

},{timestamps:true})

const Hotel=mongoose.model("Hotel",hotelSchema)