import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";

export const fetchDish = createAsyncThunk("dish/fetchDish", async () => {
  const { data } = await $host.get("/api/dish");
  return data;
});

const initialState = {
  items: [],
  status: "loading",
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDish.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchDish.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    },
    [fetchDish.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const dishReducer = dishSlice.reducer;
