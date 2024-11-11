import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import jobSlice from "./jobSlice"

const store=configureStore({
    reducer:{
      // Attach the reducer to the store
      auth: authSlice,
      job:jobSlice 
    }
})
export default store;