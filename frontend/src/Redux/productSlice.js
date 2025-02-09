import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "admin",
  initialState: {
    products: [],
  },
  reducers: {
    setAddProducs: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setAddProducs } = productSlice.actions;
export default productSlice.reducer;
