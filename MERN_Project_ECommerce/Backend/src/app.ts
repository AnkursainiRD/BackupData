import express from 'express'
import userRoutes from "./routes/UserRoutes.js"
const app=express()

app.use('api/v1/user',userRoutes)

app.get("/",function(req,res){
    return res.json({
        success:true,
        message:"Working Properly"
    })
})

app.listen(4000,()=>console.log("Server Started"))