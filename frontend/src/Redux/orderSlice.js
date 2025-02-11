import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    allOrders: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders = action.payload;
    },
    setGetAllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    setUpdatedOrder: (state, action) => {
      state.allOrders = state.allOrders.map((order) =>
        order._id === action.payload._id
          ? { ...order, status: action.payload.status }
          : order
      );
    },
  },
});

export const { addOrder, setGetAllOrders, setUpdatedOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
