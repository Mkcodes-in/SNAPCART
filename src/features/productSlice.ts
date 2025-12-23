import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [], 
    loading: false, 
    error: null
}

createSlice({
    name: 'products',
    initialState, 
    reducers: {

    }   
})