import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.logged = action.payload;
    },
  },
});

export const { setStatus } = userSlice.actions;
export default userSlice.reducer;
