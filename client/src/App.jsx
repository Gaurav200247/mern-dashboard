import React, { useState } from "react";
import NavBar from "./Components/Layouts/Navbar/NavBar";
import SideBar from "./Components/Layouts/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./_Pages/DashBoard";
import YearFilterPage from "./_Pages/FilterPages/YearFilterPage";
import About from "./_Pages/About";
import TopicsFilterPage from "./_Pages/FilterPages/TopicsFilterPage";
import SectorsFilterPage from "./_Pages/FilterPages/SectorsFilterPage";
import CountryFilterPage from "./_Pages/FilterPages/CountryFilterPage";
import RegionFilterPage from "./_Pages/FilterPages/RegionFilterPage";
import SourceFilterPage from "./_Pages/FilterPages/SourceFilterPage";
import PestleFilterPage from "./_Pages/FilterPages/PestleFilterPage";

const App = () => {
  const [IsClosed, setIsClosed] = useState(false);

  return (
    <div className="w-full flex justify-between items-start bg-white dark:text-white dark:bg-gradient-to-b from-[#0f172a] to-[#1b2a4b] duration-200">
      <div
        className={`${
          IsClosed ? "w-[15%] lg:w-[5%]" : "w-[40%] lg:w-[22%]"
        }  duration-300  h-screen`}
      >
        {/* hover:w-[5%] */}
        <SideBar IsClosed={IsClosed} setIsClosed={setIsClosed} />
      </div>

      {/* main content */}
      <div className="w-full h-screen flex flex-col justify-start items-start overflow-y-scroll">
        <NavBar />
        {/* _pages */}
        <div className="px-5 w-full h-full">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/about" element={<About />} />

            {/* Analytics and filter _Pages */}
            <Route path="/filters/year" element={<YearFilterPage />} />
            <Route path="/filters/topics" element={<TopicsFilterPage />} />
            <Route path="/filters/sector" element={<SectorsFilterPage />} />
            <Route path="/filters/country" element={<CountryFilterPage />} />
            <Route path="/filters/region" element={<RegionFilterPage />} />
            <Route path="/filters/source" element={<SourceFilterPage />} />
            <Route path="/filters/pestle" element={<PestleFilterPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
