import React from "react";
import DashboardNavbarComponent from "../components/DashboardNavbarComponent";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Store/Auth";

function DashboardPage() {
  const {isHovered} = useAuth()
  
  return (
    <>
      <div className="relative w-full h-screen bg-[#ECF0F4] dark:bg-[#232B3E]">
        <DashboardNavbarComponent />
        <div className="relative">
          <SideBar />
          <div className={`${isHovered? "ml-[calc(100%-83%)]" : "ml-[calc(100%-96%)]"} ${isHovered? "w-[calc(100%-17%)]":"w-[calc(100%-4%)]"} fixed overflow-y-scroll h-[95vh] custom-scrollbar transition-width ease-in-out delay-150 duration-500`}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
