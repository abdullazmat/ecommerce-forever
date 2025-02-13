import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    allOrders: [],
    userOrders: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders = action.payload;
    },
    setGetAllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    setGetUserOrders: (state, action) => {
      state.userOrders = action.payload;
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

export const { addOrder, setGetAllOrders, setUpdatedOrder, setGetUserOrders } =
  orderSlice.actions;
export default orderSlice.reducer;
