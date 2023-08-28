import React, { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const NavThemeChangeContainer = () => {
  const [IsDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");

    if (!userTheme || userTheme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setIsDarkMode(false);
    }

    if (userTheme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");

      setIsDarkMode(true);
    }
  }, []);

  const HandleTheme = () => {
    const userTheme = localStorage.getItem("theme");
    // console.log(userTheme);

    if (userTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");

      setIsDarkMode(false);
      window.location.reload();
    }

    if (userTheme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");

      setIsDarkMode(true);
      window.location.reload();
    }
  };

  return (
    <div
      className="nav_option text-[1.3rem] flex justify-center items-center"
      onClick={HandleTheme}
    >
      {/* theme changer */}
      {IsDarkMode ? (
        <BsMoonStars className="cursor-pointer" />
      ) : (
        <BsSun className="cursor-pointer" />
      )}
    </div>
  );
};

export default NavThemeChangeContainer;
