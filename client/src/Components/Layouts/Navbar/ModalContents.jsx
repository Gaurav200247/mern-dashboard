import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const ModalContents = () => {
  return (
    <div className="flex flex-col justify-between items-start">
      {/* Searchbar */}
      {/* <form className="flex justify-start items-center w-full p-2 px-4 border-b-2 dark:border-gray-600">
        <BsSearch className="text-[1.2rem] text-gray-400 mr-3" />
        <input type="text" className="modalInput" placeholder="Search" />
      </form> */}

      {/* search result */}
      {/* <div className="p-5">Search Result</div> */}

      {/* all Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-2 p-5 mt-10">
        <div className="modal_links_container">
          <p>ANALYTICS & FILTERS</p>
          <ul>
            <Modal_Links path="/" text="Dashboard" />
            <Modal_Links path="/filters/year" text="Year Analytics" />
            <Modal_Links path="/filters/topics" text="All Topics" />
            <Modal_Links path="/filters/sector" text="Sectors Analysis" />
            <Modal_Links
              path="/filters/country_region"
              text="Country and Region"
            />
            <Modal_Links path="/filters/source" text="Source Analysis" />
            <Modal_Links path="/filters/pestle" text="Pestle Analysis" />
          </ul>
        </div>

        <div className="modal_links_container">
          <p>OTHERS</p>
          <ul>
            <Modal_Links path="/faq" text="FAQs" />
            <Modal_Links path="/about" text="About Us" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalContents;

export const Modal_Links = ({ path, text }) => {
  return (
    <Link to={path} className="modal_links">
      {text}
    </Link>
  );
};
