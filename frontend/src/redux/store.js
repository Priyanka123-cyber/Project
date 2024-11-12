import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"



const store=configureStore({
    reducer:{
      // Attach the reducer to the store
      auth: authSlice,
      
      
    }
})
export default store;