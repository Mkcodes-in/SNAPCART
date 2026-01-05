import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/productSlice';
import cartSlice from '../features/cartSlice';
import wishlistSlice from '../features/wishlistSlice'

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice, 
        wishlist: wishlistSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;