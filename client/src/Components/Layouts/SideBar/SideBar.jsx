import React, { useState } from "react";
import { AiOutlineFileSearch, AiOutlineHome } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineTopic } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiGlobeSimpleLight } from "react-icons/pi";
import { BsCollection } from "react-icons/bs";
import { TfiHelpAlt } from "react-icons/tfi";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

import { Link, useLocation } from "react-router-dom";

const SideBar = ({ IsClosed, setIsClosed }) => {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen border-r-2 dark:border-slate-600 sidebar p-3">
      {/* logo_toggle_btn */}
      <div
        className={`w-full flex ${
          !IsClosed ? "justify-start" : "justify-center"
        } items-center p-1 mb-2 `}
      >
        {/* toggle button */}
        <button
          className="text-[1.4rem] "
          onClick={() => setIsClosed(!IsClosed)}
        >
          <HiBars3 />
        </button>

        {/* logo */}
        {!IsClosed && (
          <div className="flex justify-start items-center ml-2">
            <img src="/vite.svg" alt="logo" />
            <h1 className="font-semibold truncate">MERN Stack App</h1>
          </div>
        )}
      </div>

      {/* Dashboard Link */}
      <Link
        to="/"
        className={`sidebar_links  
        w-full flex items-center ${
          !IsClosed ? "justify-start " : "justify-center text-[1.3rem]"
        }  

        ${
          location.pathname === "/"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-600"
        }`}
      >
        {/* home svg */}
        <AiOutlineHome className={!IsClosed && "mr-3"} />
        {!IsClosed && <h1>Dashboard</h1>}
      </Link>

      {/* Pages links container */}
      <div
        className={`Pages-links_container ${
          IsClosed && "border-t-2 dark:border-slate-500 pt-2"
        }`}
      >
        {!IsClosed && <p>Analytics & Filters</p>}
        {/* pages links */}

        <ul>
          <SidebarLinks
            isClosed={IsClosed}
            path="/filters/year"
            icon={<IoCalendarClearOutline />}
            text="Year Filters"
          />

          <SidebarLinks
            isClosed={IsClosed}
            path="/filters/topics"
            icon={<MdOutlineTopic />}
            text="Topics Filters"
          />

          <SidebarLinks
            isClosed={IsClosed}
            path="/filters/sector"
            icon={<LiaIndustrySolid />}
            text="Sector Filters"
          />
          <SidebarLinks
            isClosed={IsClosed}
            path="/filters/country"
            icon={<PiGlobeSimpleLight />}
            text="Country Filters"
          />
          <SidebarLinks
            isClosed={IsClosed}
            path="/filters/region"
            icon={<PiGlobeSimpleLight />}
            text="Region Filters"
          />
          <SidebarLinks
            isClosed={IsClosed}
            path="/filters/source"
            icon={<AiOutlineFileSearch />}
            text="Source Filters"
          />
          <SidebarLinks
            isClosed={IsClosed}
            path="/filters/pestle"
            icon={<BsCollection />}
            text="Pestle Filters"
          />
        </ul>
      </div>

      {/* other links container */}
      <div
        className={`Pages-links_container ${
          IsClosed && "border-t-2 dark:border-slate-500 pt-2"
        }`}
      >
        {!IsClosed && <p>Others</p>}

        {/* other links */}
        <ul>
          <SidebarLinks
            isClosed={IsClosed}
            path="/about"
            icon={<HiOutlineDocumentSearch />}
            text="About Us"
          />{" "}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

export const SidebarLinks = ({ path, icon, text, isClosed }) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Link
      to={path}
      className={`sidebar_links w-full flex items-center text-[1.2rem] ${
        !isClosed ? "justify-start" : "justify-center text-[1.3rem]"
      }  
      ${location.pathname === path && "bg-blue-600 text-white shadow-md"}`}
    >
      {icon}
      {!isClosed && <p className="mx-2 text-[0.9rem]">{text}</p>}
    </Link>
  );
};
