import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function About() {
    const {mydata}=useSelector(state=>state.data)
    console.log("about render");
    console.log(mydata);
  return (
    <div>
        This Data
       <div  className='text-black'>
        <Link to={"/dk"}>Next</Link>
       {
            mydata==null?(<div>Data haven't come</div>): mydata.map((data)=>(
                <h1>{data.title}</h1>
            ))
        }
       </div>
    </div>
  )
}

export default About