import { configureStore } from '@reduxjs/toolkit'
import userSlice  from './userSlice'
import  productsSlice  from './productsSlice'
// import  nameSlice  from './nameSlice'

export const store = configureStore({
  reducer: {
    // name:nameSlice
    user:userSlice,
    products:productsSlice
  },
})