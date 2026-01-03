import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchProductByCategory, fetchProducts } from "./fetchProducts";
import type { ProductState } from "@/types/product";

export const fetchProduct = createAsyncThunk(
    'proudct/fetchProducts',
    async () => {
        return await fetchProducts();
    })

export const fetchProductCategory = createAsyncThunk(
    'product/fetchCategory',
    async () => {
        return await fetchProductByCategory();
    })

const initialState: ProductState = {
    product: [],
    productCategory: [],
    loading: false,
    error: undefined
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(fetchProduct.fulfilled,
            (state, action) => {
                state.product = action.payload;
                state.loading = false;
            })

        builder.addCase(fetchProductCategory.fulfilled,
            (state, action) => {
                state.productCategory = action.payload;
                state.loading = false;
            })

        builder.addMatcher(isAnyOf(fetchProduct.pending, fetchProductCategory.pending),
            (state) => {
                state.loading = true;
                state.error = undefined;
            })

        builder.addMatcher(
            isAnyOf(fetchProduct.rejected, fetchProductCategory.rejected),
            (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            }
        );

    }
})

export default productSlice.reducer;