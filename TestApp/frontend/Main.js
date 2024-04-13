import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import axios from "axios";

function Main(){
    const [jokes, setJokes]=useState()
    useEffect(()=>{
        axios.get('http://localhost:3000/api/jokes')
        .then((res)=>{
            setJokes(res.data)

        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    console.log(jokes);
    return(<>
        <h1>Jokes</h1> 
        {    jokes&&jokes.map((joke)=>(
                <h3 key={joke.id}>{joke.content}</h3>
            ))
        }  
    </>)
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main/>)