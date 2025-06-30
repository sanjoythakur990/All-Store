import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productsSlice"
import cartSlice from "./slices/cartSlice"

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice
    }
})