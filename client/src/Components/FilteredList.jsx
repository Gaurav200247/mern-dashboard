import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const FilteredList = ({ paginatedData, paginatedLoading, columns }) => {
  const rows = paginatedData?.data.length > 0 && paginatedData?.data;

  let newRows =
    rows.length > 0 &&
    rows.map((obj) => {
      const newObj = {};
      for (const key in obj) {
        newObj[key] = obj[key] === null ? "null" : obj[key];
        newObj[key] = obj[key] === "" ? "N/A" : obj[key];
      }
      return newObj;
    });

  if (paginatedLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="my-5 w-full flex justify-between items-center dark:text-white">
      {newRows && newRows.length > 0 ? (
        <DataGrid
          className="dark:text-white"
          rows={newRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      ) : (
        <p className="flex justify-center items-center w-full text-center font-medium text-[1.3rem]">
          No Data Found
        </p>
      )}
    </div>
  );
};

export default FilteredList;
