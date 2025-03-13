import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value:1
}

export const nameSlice = createSlice({
    name:'name',
    initialState,
    reducers:{
       plus:(state,action)=>{

       },
       minus:(state,action)=>{

       }
    }
})
export const {plus,minus}=nameSlice.actions
export default nameSlice.reducer