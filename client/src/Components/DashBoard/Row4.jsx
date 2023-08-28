import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Row4 = ({ IsDarkMode, paginatedData, allData }) => {
  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "insight", headerName: "Insight", width: 230 },
    { field: "sector", headerName: "Sector", width: 130 },
    { field: "topic", headerName: "Topic", width: 130 },
  ];

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

  return (
    <div className="my-5 w-full dashboard_blocks h-[60vh] flex justify-between items-center dark:text-white">
      {/* list of all data with search and find functionality */}
      {newRows && newRows.length > 0 && (
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
      )}
    </div>
  );
};

export default Row4;
