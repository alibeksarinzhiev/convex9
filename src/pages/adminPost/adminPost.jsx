import axios from 'axios'
import React, { useRef, useState } from 'react'

const AdminPost = () => {

    const refForm = useRef()
    
    const {token} = JSON.parse(localStorage.getItem('user'))
   
    const post = (e)=>{
        e.preventDefault()
        if(refForm.current[0].value !=='' && refForm.current[1].value !=='' && refForm.current[2].value !=='' && refForm.current[3].value !==''){
            const formData = new FormData()
        formData.append('name',refForm.current[0].value)
        formData.append('desc',refForm.current[1].value)
        formData.append('image',refForm.current[2].files[0])
        formData.append('price',refForm.current[3].value)
        axios.post('https://macaron-production.up.railway.app/api/products/',formData,
            {headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }}
        ).then(({data})=>console.log(data))
        .then(()=>{
            alert('успешно добавлено')
            refForm.current[0].value = ''
            refForm.current[1].value = ''
            refForm.current[2].value = ''
            refForm.current[3].value = ''
        })
        
        }else{
       alert('заполните все поля')
        
    }
    }
  return (
    <div className='container'>
      <form ref={refForm}>
        <label htmlFor="">
            <input required type="text" placeholder='название товара'/>
        </label>
        <label htmlFor="">
            <input required  type="text" placeholder='описание товара' />
        </label>
        <label htmlFor="">
            <input required  type="file" placeholder='фото' />
        </label>
        <label htmlFor="">
            <input required  type="text"  placeholder='цена' />
        </label>
    
        <button onClick={(e)=>post(e)}>добавить</button>
      </form>
    </div>
  )
}

export default AdminPost
