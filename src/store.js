import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice/cardSlice";

export const store=configureStore({
    reducer:{properties:cardSlice}
    
})