import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/register",
    userData
  );
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/login",
    userData
  );
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: true,
    isRegister: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isRegister = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isRegister = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.isRegister = true;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
