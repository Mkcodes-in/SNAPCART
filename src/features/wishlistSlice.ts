import type { Product } from "@/types/product";
import { useStoredState } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

type wishlistType = {
    wishlist: Product[];
}

const initialState: wishlistType = {
    wishlist: useStoredState<Product[]>('wishlist', []),
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const product = state.wishlist.find(p => p.id === action.payload.id);

            if (product) {
                state.wishlist = state.wishlist.filter(p => p.id !== action.payload.id);
            }
            else {
                state.wishlist.push(action.payload);
            }
        },
        clearWishlist: (state) => {
            state.wishlist = [];
        }
    }
});

export const { addToWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
