import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/productsActions";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        error: null,
        products: [],
        originalProducts: []
    },
    reducers: {
        searchForProducts: (state, action) => {
            if(!action.payload) {
                state.products = state.originalProducts;
            } else {
                state.products = state.originalProducts.filter(product => 
                    product.title.toLowerCase().includes(action.payload.toLowerCase().trim())
                )
            }
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.originalProducts = action.payload;
            state.error = null;
        })
    }
})

export const { searchForProducts } = productsSlice.actions;
export default productsSlice.reducer;