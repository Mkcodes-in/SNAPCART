import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/productSlice';
import cartSlice from '../features/cartSlice';
import wishlistSlice from '../features/wishlistSlice'
import orderSlice from "@/features/orderSlice";
import { saveToStorage } from "@/utils/storage";
import type { CartQuantity } from "@/types/cartType";

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
        orders: orderSlice
    },
})

store.subscribe(() => {
    saveToStorage<CartQuantity[]>('cart', store.getState().cart.cart);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;