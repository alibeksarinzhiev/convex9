import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        const res = await axios('https://macaron-production.up.railway.app/api/products')
        return res.data
    }
)
const initialState = {
    data:null,
    isLoading:false,
    isError:false
}




export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        
    },
    extraReducers:(build)=>{
        build.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.isLoading = false
        })
        .addCase(fetchProducts.pending,(state,action)=>{
            state.data = null
            state.isLoading = true
        })
    }
})


export default productsSlice.reducer