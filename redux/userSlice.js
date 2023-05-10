import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  users: [],
  status: "getting",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.logged = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.status = "suxeed"), (state.users = action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await fetch("https://medi-backend.vercel.app/api/users").then(
    (data) => data.json()
  );
  return res.data;
});

export const { setStatus } = userSlice.actions;
export default userSlice.reducer;
