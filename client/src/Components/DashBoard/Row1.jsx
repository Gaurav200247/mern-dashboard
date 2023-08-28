import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// chart registeration
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Row1 = ({
  paginatedData,
  allData,
  IsDarkMode,
  currentPage,
  IncreasePage,
  DecreasePage,
}) => {
  const LineChartOptions = {
    layout: {
      padding: {
        left: 30, // Adjust as needed
        right: 30, // Adjust as needed
        top: 8, // Adjust as needed
        bottom: 8, // Adjust as needed
      },
    },
    scales: {
      x: {
        ticks: {
          color: IsDarkMode ? "white" : "black", // Change to the desired font color
        },
        grid: {
          color: IsDarkMode ? " rgb(55 ,65 ,81)" : "rgb(209 ,213 ,219)", // Change to the desired font color
        },
      },
      y: {
        ticks: {
          color: IsDarkMode ? "white" : "black", // Change to the desired font color
        },
        grid: {
          color: IsDarkMode ? " rgb(55 ,65 ,81)" : "rgb(209 ,213 ,219)", // Change to the desired font color
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        labels: { color: IsDarkMode ? "white" : "black" },
        position: "top",
      },
      title: {
        display: true,
        color: IsDarkMode ? "white" : "black",
        text: "Sectors Analysis",
        font: {
          size: 16,
        },
      },
    },
  };

  // gives a particular data in a page
  const IntensityData =
    paginatedData?.data &&
    paginatedData?.data.length > 0 &&
    paginatedData?.data.map((item) => item.intensity);

  const LikelihoodData =
    paginatedData?.data &&
    paginatedData?.data.length > 0 &&
    paginatedData?.data.map((item) => item.likelihood);

  const ImpactData =
    paginatedData?.data &&
    paginatedData?.data.length > 0 &&
    paginatedData?.data.map((item) => item.impact);

  const RelevanceData =
    paginatedData?.data &&
    paginatedData?.data.length > 0 &&
    paginatedData?.data.map((item) => item.relevance);

  const LineChartData = {
    labels: allData?.allSectors,
    datasets: [
      {
        label: "Intensity",
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        data: IntensityData?.length > 0 && IntensityData,
      },
      {
        label: "Likelihood",
        borderColor: "#15C302",
        backgroundColor: "#15C302",
        data: LikelihoodData?.length > 0 && LikelihoodData,
      },
      {
        label: "Relevance",
        borderColor: "#0066FF",
        backgroundColor: "#0066FF",
        data: RelevanceData?.length > 0 && RelevanceData,
      },
      {
        label: "Impact",
        borderColor: "#FFF700",
        backgroundColor: "#F3EB00",
        data: ImpactData?.length > 0 && ImpactData,
      },
    ],
  };

  const PieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: IsDarkMode ? "white" : "black" },
        position: "right",
        font: {
          size: 8,
        },
      },
      title: {
        display: true,
        color: IsDarkMode ? "white" : "black",
        text: "Pestle Analysis",
        font: {
          size: 16,
        },
      },
    },
  };

  // gives SAME pestles appeance in apage
  const PieChartDataset =
    allData &&
    paginatedData?.data &&
    paginatedData?.data.length > 0 &&
    allData?.allPestles?.length > 0 &&
    allData?.allPestles.map((element) => {
      let count = 0;

      // for loop
      for (let index = 0; index < paginatedData?.data.length; index++) {
        if (element === paginatedData?.data[index].pestle) {
          count++;
        }
      }

      return count;
    });

  console.log({
    Row1Data: {
      PieChartDataset,
      LineChartDataSet: {
        IntensityData,
        LikelihoodData,
        ImpactData,
        RelevanceData,
      },
    },
  });

  const PieChartData = {
    labels: allData?.allPestles,
    datasets: [
      {
        label: "Appearance",
        data: PieChartDataset?.length > 0 && PieChartDataset,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col justify-between items-center w-full">
      {/* page update and heading */}
      <p className="py-2 text-[0.8rem] lg:text-[0.9rem] font-semibold w-full  flex justify-between items-center">
        <span className="mx-5 truncate">Page Based Analysis</span>

        <span className="flex justify-end items-center">
          <span className="truncate">Current Page :</span>
          <AiOutlinePlus className="PageButton" onClick={IncreasePage} />{" "}
          {currentPage}{" "}
          <AiOutlineMinus className="PageButton" onClick={DecreasePage} />
        </span>
      </p>

      {/* charts */}
      <div className=" flex flex-col lg:flex-row  justify-between items-center w-full h-auto lg:h-[70vh] dark:text-white text-gray-300 overflow-hidden">
        {/* Pie Chart */}
        <div className="w-full  lg:w-[40%]  dashboard_blocks flex flex-col justify-between items-center mb-5 lg:mb-0">
          <Pie
            data={PieChartData}
            options={PieChartOptions}
            className="p-5 "
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Line Chart */}
        <div className="w-full lg:w-[58%] dashboard_blocks flex justify-center items-center mb-5 lg:mb-0">
          <Line
            data={LineChartData}
            options={LineChartOptions}
            className="p-2 "
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Row1;
