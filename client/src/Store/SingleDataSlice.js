import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Utils/BASE_URL";

export const getSingleData = createAsyncThunk(
  "getSingleData",
  async (args, { rejectWithValue }) => {
    console.log({ args });

    try {
      let url = `${BASE_URL}/api/data/${args.id}`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getSingleDataSlice = createSlice({
  name: "getSingleData",
  initialState: {
    loading: false,
    Data: null,
    error: null,
  },
  extraReducers: {
    [getSingleData.pending]: (state) => {
      state.loading = true;
    },
    [getSingleData.fulfilled]: (state, action) => {
      state.loading = false;
      state.Data = action.payload;
      state.error = null;
    },
    [getSingleData.rejected]: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getSingleDataSlice.reducer; // its default so use default export and import for Slices
