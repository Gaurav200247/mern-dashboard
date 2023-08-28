import React, { useState } from "react";
import { BsMoonStars, BsSearch } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import ModalContents from "./ModalContents";
import { RxCross1 } from "react-icons/rx";
import NavProfileContainer from "./NavProfileContainer";
import NavNotificationContainer from "./NavNotificationContainer";
import NavThemeChangeContainer from "./NavThemeChangeContainer";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-[95%] flex justify-between items-center m-2 lg:m-5 p-2 rounded-md border-2 dark:border-slate-600">
      {/*--------------------- searchbar --------------------- */}
      <div className="w-full p-1 px-3 border-r-2 dark:border-slate-600 flex justify-start items-center">
        <BsSearch className="text-[1.2rem] text-gray-400 mr-3" />

        <button onClick={() => setOpen(true)} className="outline-none">
          Search Pages
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-start mt-16 lg:mt-0 lg:items-center w-full"
        >
          <Box className="bg-white dark:bg-[#1b2a4b] dark:text-white w-[90%] lg:w-[50%] h-[60vh] lg:h-[60vh] overflow-y-scroll rounded-md outline-none relative">
            {/* modal Contents */}
            <ModalContents />

            {/* modal close button */}
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 font-medium p-5 flex justify-center items-center"
            >
              [esc] <RxCross1 className="mx-2" />
            </button>
          </Box>
        </Modal>
      </div>

      {/* ---------------------nav options container --------------------- */}
      <div className="w-[60%] md:w-[30%] lg:w-[15%] grid grid-cols-3 px-2">
        {/* theme changer */}
        <NavThemeChangeContainer />

        {/* notification */}
        <NavNotificationContainer />

        {/* profile */}
        <NavProfileContainer />
      </div>
    </div>
  );
};

export default NavBar;
