import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
  extraReducers: {},
});

export const userInfoSliceReducer = userInfoSlice.reducer
export const { getUserId: getUserIdAC } = userInfoSlice.actions;
