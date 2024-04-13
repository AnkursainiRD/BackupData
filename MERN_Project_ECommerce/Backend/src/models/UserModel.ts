import mongoose, { Schema } from "mongoose";
import validator from 'validator'

interface IUser extends Document{
    _id:String;
    name:String;
    photo:String;
    email:String;
    role:'admin' | 'user';
    gender:'male' | 'female';
    createdAt:Date;
    updatedAt:Date;
    age:Number
}

const userSchema=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:validator.default.isEmail,
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true
    },
    dob:{
        type:Date,
        required:true
    }
},{timestamps:true})

userSchema.virtual('age').get(function(){
    const today=new Date();
    const dob:Date=this.dob;
    let age=today.getFullYear() - dob.getFullYear()

    if(today.getMonth()>dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate()< dob.getDate())){
        age--;
    }
    return age;
})

export const User=mongoose.model<IUser>("User",userSchema)