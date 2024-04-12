import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FiAirplay } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineAudit } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { FiCommand } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { IoTicketOutline } from "react-icons/io5";
import { useAuth } from "../Store/Auth";
import { FiUserPlus } from "react-icons/fi";
import { TbDatabasePlus } from "react-icons/tb";
import { AiOutlineMacCommand } from "react-icons/ai";

function SideBar() {
  const { isHovered, handleHover, handleLeave, userData } = useAuth();

  return (
    <>
      <div
        className={`${
          isHovered ? "w-[17%]" : "w-[4%]"
        }  h-[95vh] bg-white dark:bg-[#1A202D] fixed overflow-y-scroll custom-scrollbar transition-width ease-in-out delay-150 duration-300`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div
          className={`text-center py-4 ${
            isHovered ? "" : "hidden"
          } transition ease-out delay-150 duration-1000`}
        >
          <img
            src={`https://dashboard-api-zc58.onrender.com/images/${userData.imageName}`}
            alt=""
            className="w-24 h-24 rounded-lg shadow-lg mx-auto"
          />
          <h2 className="text-md font-medium mt-1 dark:text-[#e9ecef] capitalize">
            {userData.username}
          </h2>
          <p className="text-sm font-normal dark:text-[#e9ecef] capitalize">
            {userData.designation}
          </p>
        </div>
        <div className="mb-2">
          <h3
            className={`uppercase p-2 pb-4 font-medium text-xs ${
              isHovered ? "" : "hidden"
            } transition ease-out delay-150 duration-300 dark:text-[#e9ecef]`}
          >
            Main
          </h3>
          <div className="flex flex-col gap-3 px-1">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <FiAirplay />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Dashboard
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/attendence"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <FiEdit />{" "}
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Attendence
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/leaves"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <AiOutlineAudit />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                My Leaves
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/team"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <LuUsers />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Employees
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/project"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <FiDatabase />{" "}
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                My Projects
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/task"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <FiCommand />{" "}
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                My Tasks
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/setting"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <BsGear />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Setting
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/chat"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <CiChat1 />{" "}
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Chats
              </span>
            </NavLink>
          </div>
        </div>
        <div
          className={`${
            isHovered ? "mt-8 mb-8" : ""
          } transition ease-out delay-150 duration-300`}
        >
          {/* */}
          <h3
            className={`uppercase p-2 pb-4 font-medium text-xs ${
              isHovered ? "" : "hidden"
            } transition ease-out delay-150 duration-300 dark:text-[#e9ecef]`}
          >
            Apps
          </h3>
          <div className="flex flex-col gap-3 px-1">
            <NavLink
              to="/dashboard/calender"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <FiAirplay />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Calender
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/ticket"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <IoTicketOutline />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Tickets
              </span>
            </NavLink>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <RxExit />{" "}
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Logout
              </span>
            </NavLink>
          </div>
        </div>
        <div
          className={`${
            isHovered ? "mt-8 mb-8" : ""
          } transition ease-out delay-150 duration-300`}
        >
          {/* */}
          <h3
            className={`uppercase p-2 pb-4 font-medium text-xs ${
              isHovered ? "" : "hidden"
            } transition ease-out delay-150 duration-300 dark:text-[#e9ecef]`}
          >
            Admin Routes
          </h3>
          <div className="flex flex-col gap-3 px-1">
            <NavLink
              to="/dashboard/register"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <FiUserPlus />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Register
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/addProject"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <TbDatabasePlus className="ml-[-2px]" />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Add Project
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/addTask"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#f0f3fb] dark:bg-[#003554] hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                    : "hover:bg-[#F0F3FB] dark:hover:bg-[#003554] dark:text-[#e9ecef] px-3 py-3 rounded-md font-medium flex items-center gap-2"
                }`
              }
            >
              <AiOutlineMacCommand className="ml-[-2px]" />
              <span
                className={`${
                  isHovered ? "" : "hidden"
                } transition ease-out delay-150 duration-300`}
              >
                Add Task
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
