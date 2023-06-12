import { configureStore } from "@reduxjs/toolkit";
import AddformReducer from "./AddformSlice";



const store = configureStore({
    reducer:{
        form: AddformReducer,
    }
})

export default store