import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Utils/BASE_URL";

export const getAllData = createAsyncThunk(
  "getAllData",
  async (args, { rejectWithValue }) => {
    try {
      let url = `${BASE_URL}/api/data/all`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getAllDataSlice = createSlice({
  name: "getAllData",
  initialState: {
    loading: false,
    allData: null,
    error: null,
  },
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.allData = action.payload;
      state.error = null;
    },
    [getAllData.rejected]: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getAllDataSlice.reducer; // its default so use default export and import for Slices
