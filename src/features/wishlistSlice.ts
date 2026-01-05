import type { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

type wishlistType = {
    wishlist: Product[];
}

const initialState: wishlistType = {
    wishlist: []
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        }
    }
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
