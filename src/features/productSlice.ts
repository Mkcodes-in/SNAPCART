import type { productState } from "@/types/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./fetchProducts";

export const fetchProduct = createAsyncThunk('proudct/fetchProducts', async () => {
    return await fetchProducts();
})

const initialState: productState = {
    product: [], 
    loading: false, 
    error: undefined
}

const productSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload.products;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error?.message;
        })
    }
})

export default productSlice.reducer;