import type { OrderDetailProps } from "@/types/orderType";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type OrdersState = {
    order: OrderDetailProps[];
}

const initialState: OrdersState = {
    order: []
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderPlace: (state, action: PayloadAction<OrderDetailProps>) => {
            state.order.push(action.payload);
        }
    }
})

export const { orderPlace } = orderSlice.actions;
export default orderSlice.reducer;