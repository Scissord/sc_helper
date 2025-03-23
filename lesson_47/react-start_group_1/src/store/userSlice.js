import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: null,
    password: null,
  },
  reducers: {
    signin: (state, action) => {
      state.id = new Date();
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.id = null;
      state.name = null;
      state.password = null;
    },
  }
});

export const { signin, logout } = userSlice.actions;
export default userSlice.reducer;