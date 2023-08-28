import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { Link } from "react-router-dom";

const Row3 = ({ IsDarkMode, paginatedData, allData }) => {
  const MapObj = allData?.CountryData?.MapObj;

  const allRegions =
    allData?.RegionData?.allRegions.length > 0 &&
    allData?.RegionData?.allRegions;

  const RegionLikelihoods =
    allData?.RegionData?.RegionLikelihoods.length > 0 &&
    allData?.RegionData?.RegionLikelihoods;

  console.log({ MapObj });

  return (
    <div className="mb-5 w-full lg:h-[60vh] flex flex-col lg:flex-row justify-between items-center">
      {/* grid div 1 : world map chart */}
      <div className="hidden lg:block h-full w-[60%] dashboard_blocks p-3 mb-5 lg:mb-0">
        <h1 className="text-[0.9rem] font-semibold mx-5">Countries Analysis</h1>
        {MapObj && (
          <VectorMap
            map={worldMill}
            className="w-full h-full p-5"
            backgroundColor={IsDarkMode ? "rgba(0,0,0,0)" : "#ded8d7"}
            series={{
              regions: [
                {
                  values: MapObj,
                  scale: ["#519fe8", "#002aff"],
                  min: 0,
                  max: 2000,
                },
              ],
            }}
            onRegionTipShow={function regionalTip(event, label, code) {
              return label.html(`
                <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "125px",
                  minHeight: "50px",
                  color: "white",
                  padding: "2px",
                  backgroundColor: "#2C3E50",
                  borderRadius: "0.375rem",
                }}
              >
                <p>${label.html()}</p> <p>Total likelihood : ${
                MapObj[code] === undefined ? "N/A" : MapObj[code]
              }</p>
              </div>
                

                `);
            }}
          />
        )}
      </div>

      {/* grid div 2 : Top 10 country List */}
      <div className="p-3 h-full w-full lg:w-[38%] dashboard_blocks flex flex-col justify-start items-center text-[0.9rem]">
        <p className="w-full flex justify-between items-center font-semibold p-3">
          <span>Regions</span>
          <span>Likelihood</span>
        </p>

        {allRegions &&
          RegionLikelihoods &&
          allRegions.map((item, index) => {
            if (index > 7) {
              return null;
            }
            return (
              <p
                key={index}
                className="w-full flex justify-between items-center font-medium p-1 px-3"
              >
                <span>{item || "N/A"}</span>
                <span>{RegionLikelihoods[index]}</span>
              </p>
            );
          })}

        <Link
          to="/filters/region"
          className=" mt-3 w-[80%] bg-zinc-200 dark:bg-blue-900 font-semibold hover:bg-zinc-300 dark:hover:bg-blue-800 duration-200 rounded-full p-2 text-center"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Row3;
