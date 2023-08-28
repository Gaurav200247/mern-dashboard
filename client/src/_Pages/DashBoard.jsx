import React, { useEffect, useState } from "react";
import Row1 from "../Components/DashBoard/Row1";
import Row2 from "../Components/DashBoard/Row2";
import Row3 from "../Components/DashBoard/Row3";
import Row4 from "../Components/DashBoard/Row4";
import { useDispatch, useSelector } from "react-redux";
import { getPaginatedData } from "../Store/PaginatedDataSlice";
import { getAllData } from "../Store/AllDataSlice";

const DashBoard = () => {
  const {
    loading: allDataLoading,
    allData,
    error: allDataError,
  } = useSelector((state) => state.getAllData);

  const {
    loading: paginatedLoading,
    Data: paginatedData,
    error: paginatedError,
  } = useSelector((state) => state.getPaginatedData);

  const dispatch = useDispatch();

  const [IsDarkMode, setIsDarkMode] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getPaginatedData({ page: CurrentPage }));
  }, [CurrentPage]);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  // creaet a useeffect that changes isDarkMode state when theme changes in locaostorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (!theme || theme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, [localStorage]);

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

  if (allDataLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen pb-5">
      {/* row 1 */}
      <Row1
        paginatedData={paginatedData}
        allData={allData}
        IsDarkMode={IsDarkMode}
        currentPage={CurrentPage}
        IncreasePage={IncreasePage}
        DecreasePage={DecreasePage}
      />

      {/* row 2 */}
      <Row2 allData={allData} IsDarkMode={IsDarkMode} />

      {/* row 3 */}
      <Row3
        IsDarkMode={IsDarkMode}
        paginatedData={paginatedData}
        allData={allData}
      />

      {/* row 4 */}
      <Row4
        IsDarkMode={IsDarkMode}
        paginatedData={paginatedData}
        allData={allData}
      />
    </div>
  );
};

export default DashBoard;
