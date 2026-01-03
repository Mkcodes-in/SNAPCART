import type { Product } from "@/types/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: []
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        increaseQuantity: (state, action) => {

        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(p => p.id != action.payload);
        }
    }
})

export const { addToCart, increaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;