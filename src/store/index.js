import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productsSlice"

export const store = configureStore({
    reducer: {
        products: productSlice
    }
})