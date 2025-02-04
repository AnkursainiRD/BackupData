import { Request,Response,NextFunction } from "express"
import { NewUserRequestBody } from "../types/type.js"
import { User } from "../models/UserModel.js";


export const newUser=async(req:Request<{},{},NewUserRequestBody>,res:Response)=>{
    try {
        const {name,email,photo,gender,role,_id,dob}=req.body;
        const user=await User.create({name,email,photo,gender,role,_id,dob})
        return res.status(200).json({
            success:true,
            message:"User Created Successfully"
        })
    } catch (error) {
        
    }
}