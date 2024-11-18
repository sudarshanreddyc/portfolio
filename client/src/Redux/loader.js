import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    blnShowLoader: false,
  },
  reducers: {
    showLoader: (state) => {
      state.blnShowLoader = true;
    },
    hideLoader: (state) => {
      state.blnShowLoader = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
