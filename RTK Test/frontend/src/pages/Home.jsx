import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../service/opetraions'
import { Link } from 'react-router-dom'

function Home() {
    const {mydata}=useSelector(state=>state.data)
    const dispatch=useDispatch()
  console.log("home render");
    useState(()=>{
      getData(dispatch)
    },[])
    console.log(mydata);
  return (
    <div className='w-full text-black h-full bg-green-400'>
        hello
        <Link to={"/ak"}>Next</Link>
    </div>
  )
}

export default Home