import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineMail } from "react-icons/ai";

const NavNotificationContainer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    "New message received 👋🏻<br /> You have 1 unread messages",
    "New message received 👋🏻<br /> You have 2 unread messages",
    "New message received 👋🏻<br /> You have 3 unread messages",
    "New message received 👋🏻<br /> You have 4 unread messages",
    "New message received 👋🏻<br /> You have 5 unread messages",
  ];

  return (
    <div className="relative nav_option text-[1.5rem]">
      <IoNotificationsOutline onClick={handleClick} />
      {/* no. of unread notifications */}
      <div className="absolute top-[2px] right-[2px] notification_indicator">
        5
      </div>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((item, index) => {
          return (
            <MenuItem key={index} onClick={handleClose} className="w-[20rem]">
              <div className="flex justify-start items-start">
                <div className="flex justify-center items-center w-[15%]">
                  <AiOutlineMail className="p-1 text-[2rem] border-2 rounded-full mt-4" />
                </div>

                <div className="p-2 flex flex-col justify-between items-start w-[85%]">
                  <p
                    className="font-semibold"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></p>
                  <p className="text-[0.8rem]">{index + 10} Aug</p>
                </div>
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default NavNotificationContainer;
