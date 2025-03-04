import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const [sec,setSec] = useState(5)

   useEffect(()=>{
    let interval = setInterval(()=>{
    if(sec<1){
        console.log('qwer')
        navigate('/')
    }
    setSec(prev=>prev - 1)
},1000)
    
    return()=>{
        clearInterval(interval)
    }
   },[sec])
    
  return (
    <main className='notFound'>
      <h1>NotFound</h1>
      <h2>через {sec} вы попадете на глваную страница</h2>
      <p onClick={()=>navigate('/')}>go home</p>
    </main>
  )
}

export default NotFound
