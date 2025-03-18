import axios from 'axios'
import React, { useRef, useState } from 'react'

const AdminPost = () => {

    const refForm = useRef()
    
    const {token} = JSON.parse(localStorage.getItem('user'))
   
    const post = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('name',refForm.current[0].value)
        formData.append('desc',refForm.current[1].value)
        formData.append('image',refForm.current[2].files[0])
        // formData.append('tastes',refForm.current[3].value)
        // formData.append('name',refForm.current[0].value)
        formData.append('price',refForm.current[3].value)
        axios.post('https://macaron.onrender.com/api/products/',formData,
            {headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }}
        ).then(({data})=>console.log(data))
    }
  return (
    <div className='container'>
      <form ref={refForm}>
        <label htmlFor="">
            <input type="text" placeholder='название товара'/>
        </label>
        <label htmlFor="">
            <input type="text" placeholder='описание товара' />
        </label>
        <label htmlFor="">
            <input type="file" placeholder='фото' />
        </label>
        <label htmlFor="">
            <input type="text"  placeholder='цена' />
        </label>
        <label htmlFor="">
            <input type="text" placeholder='вес' />
        </label>
        <label htmlFor="">
            <input type="text" placeholder='количество' />
        </label>
        <button onClick={(e)=>post(e)}>добавить</button>
      </form>
    </div>
  )
}

export default AdminPost
