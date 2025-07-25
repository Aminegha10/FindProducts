import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchItem: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});

export const { setSearchItem } = productsSlice.actions;
export default productsSlice.reducer;
