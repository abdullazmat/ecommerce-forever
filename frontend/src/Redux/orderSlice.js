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
  },
});

export const { addOrder, setGetAllOrders } = orderSlice.actions;
export default orderSlice.reducer;
