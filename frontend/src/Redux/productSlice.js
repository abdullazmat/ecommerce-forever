import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "admin",
  initialState: {
    product: [],
    allProducts: [],
    productData: null,
    searchText: "",
  },
  reducers: {
    setAddProducs: (state, action) => {
      state.product = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setAddProducs, setAllProducts, setProductData, setSearchText } =
  productSlice.actions;
export default productSlice.reducer;
