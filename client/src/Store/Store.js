import { configureStore } from "@reduxjs/toolkit";

import getPaginatedDataSlice from "./PaginatedDataSlice";
import getSingleData from "./SingleDataSlice";
import getAllDataSlice from "./AllDataSlice";

export const Store = configureStore({
  reducer: {
    getPaginatedData: getPaginatedDataSlice,
    getAllData: getAllDataSlice,
    getSingleData: getSingleData,
  },
});
