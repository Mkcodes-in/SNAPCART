import type { CartState } from "@/types/cartType";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.cart.find(p => p.id === action.payload.id);
            // product already exist increase the quantity
            if (product) {
                product.quantity += 1;
            }
            // add new product with quantity by 1
            else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        DecreaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.cart.find(p => p.id === action.payload);
            // return if product is undefined 
            if (!product) return;

            // decrease quantity
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                // if product became 0 remove from cart
                state.cart = state.cart.filter(p => p.id !== product.id);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(p => p.id != action.payload);
        }
    }
})

export const { addToCart, DecreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;