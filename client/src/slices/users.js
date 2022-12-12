import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import UserService from "../services/user.service";
import { setMessage } from "./message";

const initialState = {
  users: [],
};

export const getUsers = createAsyncThunk("Users", async (thunkAPI) => {
  try {
    const data = await UserService.getAllUsers();

    return { users: data.data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload.users;
    },
    [getUsers.rejected]: (state, action) => {
      state.user = null;
    },
  },
});

const { reducer } = usersSlice;
export default reducer;
