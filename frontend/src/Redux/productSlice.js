import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "admin",
  initialState: {
    product: [],
    allProducts: [],
  },
  reducers: {
    setAddProducs: (state, action) => {
      state.product = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setAddProducs, setAllProducts, setDeletedProduct } =
  productSlice.actions;
export default productSlice.reducer;
