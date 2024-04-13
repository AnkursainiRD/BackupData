import express from "express";
const app=express();

const jokes=[
       {id:1,
        content:"First Jokes"
       },
       {id:2,
        content:"Second Jokes"
       },
       {id:3,
        content:"Third Jokes"
       },
       {id:4,
        content:"Fourth Jokes"
       },
       {id:5,
        content:"Fifth Jokes"
       }
]

app.get('/api/jokes',function(req,res){
    res.send(jokes)
})


app.listen(3000,function(){
    console.log("server started");
})