import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getPaginatedData } from "../../Store/PaginatedDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../Store/AllDataSlice";
import FilteredList from "../../Components/FilteredList";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const YearFilterPage = () => {
  const dispatch = useDispatch();

  const { loading: allDataLoading, allData } = useSelector(
    (state) => state.getAllData
  );

  const { loading: paginatedLoading, Data: paginatedData } = useSelector(
    (state) => state.getPaginatedData
  );

  const [CurrentPage, setCurrentPage] = useState(1);
  const [EndYear, setEndYear] = useState("");

  const IncreasePage = () => {
    setCurrentPage(CurrentPage + 1);
  };

  const DecreasePage = () => {
    if (CurrentPage <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(CurrentPage - 1);
    }
  };

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  useEffect(() => {
    dispatch(getPaginatedData({ page: CurrentPage, end_year: EndYear }));
  }, [CurrentPage, EndYear]);

  const endYearFilterOptions =
    allData?.endYearFilterOptions?.length > 0 && allData?.endYearFilterOptions;

  console.log({ endYearFilterOptions });

  const options = endYearFilterOptions?.length > 0 && endYearFilterOptions;

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "insight", headerName: "Insight", width: 230 },
    { field: "sector", headerName: "Sector", width: 130 },
    { field: "end_year", headerName: "End Year", width: 130 },
  ];

  if (allDataLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-full flex flex-col justify-between items-start">
      {/* auto complete bar */}
      <div className="w-full flex justify-start items-center dark:text-white dark:bg-blue-950 rounded-md">
        {options?.length > 0 && (
          <Autocomplete
            sx={{ width: "100%" }}
            inputValue={EndYear}
            onInputChange={(event, newInputValue) => {
              setEndYear(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="filter data by End Year" />
            )}
          />
        )}
      </div>

      {/* page changer */}
      <p className="py-2 mt-3 text-[0.8rem] lg:text-[0.9rem] font-semibold w-full  flex justify-end items-center">
        <span className="flex justify-end items-center">
          <span className="truncate">Current Page :</span>
          <AiOutlinePlus className="PageButton" onClick={IncreasePage} />{" "}
          {CurrentPage}{" "}
          <AiOutlineMinus className="PageButton" onClick={DecreasePage} />
        </span>
      </p>
      {/* list */}
      <FilteredList
        columns={columns}
        paginatedData={paginatedData}
        paginatedLoading={paginatedLoading}
      />
    </div>
  );
};

export default YearFilterPage;
