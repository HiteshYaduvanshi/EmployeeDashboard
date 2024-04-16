import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { useAuth } from "../Store/Auth";
import { NavLink } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { IoFastFoodOutline } from "react-icons/io5";

function DashboardNavbarComponent() {
  const { userData, userID,toggleDrawer } = useAuth();
  const [hidden, setHidden] = useState(true);
  const [isProfileClicked, setProfileClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleProfileButtonClick = () => {
    setHidden(!hidden);
    setProfileClicked(!isProfileClicked);
  };

  const { isHovered, setIsHovered, setIsMenueClicked, isMenueClicked } =
    useAuth();

  const handleToggleMenue = () => {
    setIsHovered(!isHovered);
    setIsMenueClicked(!isMenueClicked);
  };

  const { themeMode, setThemeMode } = useAuth();

  const handleThemeSwitch = () => {
    if (themeMode === "dark") {
      setThemeMode("light");
    }
    if (themeMode === "light") {
      setThemeMode("dark");
    }
  };

  const handleBreak = async () => {
    try {
      const response = await fetch("https://dashboard-api-zc58.onrender.com/takeBreak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userID }),
      });

      if (!response.ok) {
        throw new Error("break failed");
      }

      setShowModal(true);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleBreakEnd = async () => {
    try {
      const response = await fetch("https://dashboard-api-zc58.onrender.com/endBreak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userID }),
      });

      if (!response.ok) {
        throw new Error("break failed");
      }

      setShowModal(false);
    } catch (error) {}
  };
  return (
    <>
      <div className="w-full bg-white dark:bg-[#1A202D] h-14 flex items-center">
        <div className={` text-center ${isHovered ? "lg:w-[20%]" : "lg:w-[4%]"}`}>
          <h1 className="text-2xl font-bold dark:text-[#e9ecef] hidden lg:block">
            {isHovered ? "Brand-Name" : "B"}
          </h1>
          <h1 className="text-2xl font-bold dark:text-[#e9ecef] ml-3 lg:hidden">B</h1>
        </div>
        <div className="w-full px-6 flex justify-between items-center shadow-sm">
          <RxHamburgerMenu
            className="text-2xl dark:text-[#e9ecef] hidden lg:block"
            onClick={handleToggleMenue}
          />
          <RxHamburgerMenu
            className="text-2xl dark:text-[#e9ecef] lg:hidden"
            onClick={toggleDrawer}
          />
          <div className="flex items-center gap-4">
            <div onClick={handleThemeSwitch}>
              {themeMode == "dark" ? (
                <HiSun className="text-2xl text-[#FFFFFF]" />
              ) : (
                <BsFillMoonFill />
              )}
            </div>
            <div
              onClick={handleProfileButtonClick}
              className={`flex relative items-center hover:bg-[#f6f5f5] dark:hover:bg-[#003554] gap-3 p-2 transition ease-in-out duration-300 delay-140 cursor-pointer rounded-md ${
                isProfileClicked ? "bg-[#F6F5F5] dark:bg-[#003554]" : ""
              }`}
            >
              <h3 className="capitalize text-md font-medium dark:text-[#e9ecef]">
                {userData.username}
              </h3>
              <img
                className="w-9 h-9 rounded-full"
                src={`https://dashboard-api-zc58.onrender.com/images/${userData.imageName}`}
                alt=""
              />
              <div
                className={`bg-white dark:bg-[#1F2937] rounded-md text-md gap-2 shadow-md z-50 w-52 h-fit absolute top-14 right-6 flex flex-col justify-start items-center py-2 px-5 ${
                  hidden ? "hidden" : ""
                }`}
              >
                <NavLink
                  to="/logout"
                  className="flex dark:text-white items-center gap-2 dark:hover:bg-[#003554] hover:bg-[#F0F3FB] w-full justify-center py-3 rounded"
                >
                  <MdOutlineLogout /> Logout
                </NavLink>
                <div
                  onClick={handleBreak}
                  className="flex items-center gap-3 dark:text-white dark:hover:bg-[#003554] hover:bg-[#F0F3FB] w-full justify-center py-3 rounded"
                >
                  <IoFastFoodOutline /> Break
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-[#1A202D] p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Break Taken</h2>
            <p className="dark:text-white">Your break has been successfully recorded.</p>
            <button
              onClick={handleBreakEnd}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              End Break
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardNavbarComponent;
