import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/productSlice';
import cartSlice from '../features/cartSlice';
import wishlistSlice from '../features/wishlistSlice'
import orderSlice from "@/features/orderSlice";
import { saveToStorage } from "@/utils/storage";
import type { CartQuantity } from "@/types/cartType";
import type { Product } from "@/types/product";
import type { OrderDetailProps } from "@/types/orderType";

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
    saveToStorage<Product[]>('wishlist', store.getState().wishlist.wishlist);
    saveToStorage<OrderDetailProps[]>('orders', store.getState().orders.order);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;