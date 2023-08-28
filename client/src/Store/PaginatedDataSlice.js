import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Utils/BASE_URL";

export const getPaginatedData = createAsyncThunk(
  "getPaginatedData",
  async (args, { rejectWithValue }) => {
    console.log({ args });

    try {
      let url = `${BASE_URL}/api/data`;

      const { page, end_year, topic, sector, country, region, source, pestle } =
        args;

      if (page || end_year || topic || sector) {
        url = `${BASE_URL}/api/data?page=${page || 1}&end_year=${
          (end_year === "null" ? "" : end_year) || ""
        }&topic=${topic || ""}&sector=${sector || ""}&country=${
          country || ""
        }&region=${region || ""}&source=${source || ""}&pestle=${pestle || ""}
        `;
      }

      console.log(url);

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getPaginatedDataSlice = createSlice({
  name: "getPaginatedData",
  initialState: {
    loading: false,
    Data: null,
    error: null,
  },
  extraReducers: {
    [getPaginatedData.pending]: (state) => {
      state.loading = true;
    },
    [getPaginatedData.fulfilled]: (state, action) => {
      state.loading = false;
      state.Data = action.payload;
      state.error = null;
    },
    [getPaginatedData.rejected]: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getPaginatedDataSlice.reducer; // its default so use default export and import for Slices
