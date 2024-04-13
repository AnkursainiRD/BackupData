const express=require("express")
const app=express();

const jsonData=[
        {
            id:1,
            title:"first"
        },
        {
            id:2,
            title:"second"
        },
        {
            id:3,
            title:"third"
        },
        {
            id:4,
            title:"fourth"
        },
    ]

app.get("/",function(req,res){
    res.send("Working Properley")
})

app.get("/sendData",function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData))
})

app.listen(4000,()=>{
    console.log("Server Started");
})