import { createSlice } from "@reduxjs/toolkit";
import { postLoginThunk, postRegisterThunk } from "../thunks/authThunk";
import { LoginData } from "../../types/auth";

interface AuthState {
  role: string;
  data: Partial<LoginData>;
}

const initialState: AuthState = {
  role: "GUEST",
  data: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLoginThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.role = action.payload.data.role;
    });

    builder.addCase(postRegisterThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.role = action.payload.data.role;
    });
  },
});
