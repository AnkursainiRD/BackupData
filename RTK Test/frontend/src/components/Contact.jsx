import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Contact() {
    const {mydata}=useSelector(state=>state.data)
    const navigate=useNavigate()

    useEffect(() => {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = ''; // Required for some browsers
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
  return (
    <div>Contact
    {
        mydata==null?(<div>No data</div>):(
            mydata.map((data)=><h1 key={data.id}>{data.title}</h1>)
        )
    }
    </div>
  )
}

export default Contact