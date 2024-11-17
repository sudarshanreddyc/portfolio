import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    blnShowLoader: false,
  },
  reducers: {
    showLoader: (state) => {
      console.log("Dispatching showLoader");
      state.blnShowLoader = true;
    },
    hideLoader: (state) => {
      console.log("Dispatching hideLoader");
      state.blnShowLoader = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
