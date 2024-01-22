import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserDetails: (state, { payload }) => {
      state.userDetails = payload;
    },
  },
});

export const { setUserDetails } = appSlice.actions;

export default appSlice.reducer;
