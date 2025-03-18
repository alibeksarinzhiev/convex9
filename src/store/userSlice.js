import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{}
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user = action.payload
        },
        userLogout:(state)=>{
            state.user = {}
            localStorage.removeItem('user')
        }
    }
})
export const {login,userLogout} = userSlice.actions

export default userSlice.reducer