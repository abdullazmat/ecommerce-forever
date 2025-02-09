import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setAllCartItems: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setAllCartItems } = cartSlice.actions;
export default cartSlice.reducer;
