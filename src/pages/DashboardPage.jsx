import React from "react";
import DashboardNavbarComponent from "../components/DashboardNavbarComponent";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Store/Auth";

function DashboardPage() {
  const { isHovered, isDrawerOpen } = useAuth();

  return (
    <>
      <div className="relative w-full h-screen bg-[#ECF0F4] dark:bg-[#232B3E]">
        <DashboardNavbarComponent />
        <div className="relative bg-red-400">
          <SideBar />
          <div
            className={`${
              isHovered ? "lg:ml-[calc(100%-83%)]" : "lg:ml-[calc(100%-96%)]"
            } ${
              isHovered
                ? "lg:w-[calc(100%-17%)] w-full"
                : "lg:w-[calc(100%-4%)] w-full"
            }  fixed overflow-y-scroll h-[95vh] custom-scrollbar transition-width ease-in-out delay-150 duration-500`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
