import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Bar } from "react-chartjs-2";

const Row2 = ({ allData, IsDarkMode }) => {
  const optionCallback_1 = (value) => {
    if (allSources[value].length > 10) {
      return allSources[value].substring(0, 10) + "...";
    }

    return allSources[value];
  };

  const optionCallback_2 = (value) => {
    if (allTopics[value].length > 10) {
      return allTopics[value].substring(0, 10) + "...";
    }

    return allTopics[value];
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: IsDarkMode ? "white" : "black" },
        position: "top",
      },
      title: {
        display: true,
        color: IsDarkMode ? "white" : "black",
        font: {
          size: 16,
        },
      },
    },
  };

  let option_1 = options;
  option_1 = {
    scales: {
      x: {
        ticks: {
          color: IsDarkMode ? "white" : "black", // Change to the desired font color
          callback: optionCallback_1,
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
  };

  let option_2 = options;
  option_2 = {
    scales: {
      x: {
        ticks: {
          color: IsDarkMode ? "white" : "black", // Change to the desired font color
          callback: optionCallback_2,
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
  };

  const [Range, setRange] = useState(20);

  const allSources = allData?.sourceData?.allSources;
  const SourcesAppearances = allData?.sourceData?.SourcesAppearances;

  const allTopics = allData?.TopicsData?.allTopics;
  const TopicsAppearances = allData?.TopicsData?.TopicsAppearances;

  const BarChartDataSet_1 = {
    labels: allSources?.length > 0 && allSources.slice(0, Range),
    datasets: [
      {
        label: "Sources Appearances in whole data",
        data:
          SourcesAppearances?.length > 0 && SourcesAppearances.slice(0, Range),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const BarChartDataSet_2 = {
    labels: allTopics?.length > 0 && allTopics.slice(0, Range),
    datasets: [
      {
        label: "Topics Appearances in whole data",
        data:
          TopicsAppearances?.length > 0 && TopicsAppearances.slice(0, Range),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const IncreaseRange = () => {
    setRange(Range + 20);
  };

  const DecreaseRange = () => {
    if (Range < 30) {
      setRange(20);
    } else {
      setRange(Range - 20);
    }
  };

  return (
    <div className="flex flex-col justify-between items-start w-full">
      {/* grid div 1 : Bar chart */}
      <div className="dashboard_blocks relative my-5 w-full">
        <RangeChanger
          Range={Range}
          DecreaseRange={DecreaseRange}
          IncreaseRange={IncreaseRange}
          title="Source Analysis"
        />
        <Bar
          options={option_1}
          data={BarChartDataSet_1}
          className="p-10"
          style={{ width: "100%" }}
        />
      </div>
      {/* grid div 1 : Pie chart */}
      <div className="dashboard_blocks relative mb-5 w-full">
        <RangeChanger
          Range={Range}
          DecreaseRange={DecreaseRange}
          IncreaseRange={IncreaseRange}
          title="Topics Analysis"
        />
        <Bar
          options={option_2}
          data={BarChartDataSet_2}
          className="p-10"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Row2;

export const RangeChanger = ({
  Range,
  IncreaseRange,
  DecreaseRange,
  title,
}) => {
  return (
    <p className="absolute top-3 text-[0.8rem] lg:text-[0.9rem] font-semibold w-full  flex justify-between items-center">
      <span className="mx-5 truncate">{title}</span>

      <span className="flex justify-end items-center ">
        <span className="truncate">Increase Data Range :</span>
        <AiOutlinePlus className="RangeButton" onClick={IncreaseRange} />{" "}
        {Range}{" "}
        <AiOutlineMinus className="RangeButton" onClick={DecreaseRange} />
      </span>
    </p>
  );
};
