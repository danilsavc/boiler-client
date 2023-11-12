import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";

export const fetchSupplements = createAsyncThunk("supplements/fetchSupplements", async () => {
  const { data } = await $host.get("/api/supplements");
  return data;
});

const initialState = {
  items: [],
  status: "loading",
};

const supplememntsSlice = createSlice({
  name: "supplements",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSupplements.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchSupplements.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    },
    [fetchSupplements.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const supplementsReducer = supplememntsSlice.reducer;
