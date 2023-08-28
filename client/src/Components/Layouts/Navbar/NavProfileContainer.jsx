import React from "react";
import { BiUser } from "react-icons/bi";
import { TfiHelpAlt } from "react-icons/tfi";
import { CiLogout } from "react-icons/ci";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const NavProfileContainer = () => {
  const options = [
    {
      dp_link:
        "https://images.pexels.com/photos/3796989/pexels-photo-3796989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "John Doe",
      role: "Admin",
      isLink: false,
    },
    {
      text: "Profile",
      icon: <BiUser />,
      path: "/about",
      isLink: true,
    },

    {
      text: "FAQ",
      icon: <TfiHelpAlt />,
      path: "/about",
      isLink: true,
    },

    {
      text: "Log Out",
      icon: <CiLogout />,
      path: "/",
      isLink: true,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* image */}

      <img
        src="https://images.pexels.com/photos/3796989/pexels-photo-3796989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="dp"
        className=" w-[1.5rem] lg:w-[2rem] h-[1.5rem] lg:h-[2rem] rounded-full overflow-hidden shadow-md object-cover cursor-pointer"
        onClick={handleClick}
      />

      {/* profile menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((item, index) => {
          return (
            <MenuItem
              key={index}
              className="w-[13rem]"
              onClick={item.isLink && handleClose}
            >
              {item.isLink && (
                <Link
                  to={item.path}
                  className="flex justify-start items-center p-1 w-full "
                >
                  {item.icon} <p className="ml-2 text-[0.9rem]">{item.text}</p>
                </Link>
              )}

              {!item.isLink && (
                <div className="flex justify-start items-center w-full font-medium ">
                  <img
                    src={item.dp_link}
                    alt={item.text}
                    className="mr-3 w-[2rem] h-[2rem] rounded-full overflow-hidden shadow-md object-cover"
                  />
                  <div>
                    <h1 className="text-[1.1rem]">{item.text}</h1>
                    <p className="text-[0.8rem]">{item.role}</p>
                  </div>
                </div>
              )}
            </MenuItem>
          );
        })}
      </Menu>

      {/* presence indicator */}
      <div className="circle bg-green-500 absolute bottom-2 lg:bottom-0 right-2 lg:right-0"></div>
    </div>
  );
};

export default NavProfileContainer;
