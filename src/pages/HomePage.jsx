import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import HomeCard from "../components/HomeCard";
import { FaTicket } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import StackedColumnCharts from "../components/StackedColumnCharts";
import RadialBars from "../components/RadialBars";
import Team from "../components/Team";
import Tasks from "../components/Tasks";
import TodoComponent from "../components/TodoComponent";
import WeatherComponent from "../components/WeatherComponent";
import Schedule from "../components/Schedule";
import { useAuth } from "../Store/Auth";

function HomePage() {
  const { leaveData, ticketData, projectData } = useAuth();

  const approvedLeaveCount = leaveData.filter(leave => leave.status === "Approved").length;
  
  const resolvedTicketCount = ticketData.reduce((count, ticket) => {
    if (ticket.status === "Resolved") {
      return count + 1;
    }
    return count;
  }, 0);
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl dark:text-[#e9ecef]">Dashboard</h1>
          <ul className="flex items-center gap-1">
            <li>
              <AiOutlineHome className="dark:text-[#e9ecef]" />
            </li>
            <li>
              <RxTriangleRight className="dark:text-[#e9ecef]" />
            </li>
            <li className="dark:text-[#e9ecef]">Home</li>
            <li>
              <RxTriangleRight className="dark:text-[#e9ecef]" />
            </li>
            <li className="dark:text-[#e9ecef]">Dashboard</li>
          </ul>
        </div>
        <div className="flex flex-col justify-between md:flex-wrap md:flex-row gap-6 my-7">
          <HomeCard
            heading="new tickets"
            data={ticketData.length}
            percent="18"
            icon={<FaTicket className="text-white" />}
            colorFrom="#664dc9"
            colorTo="#9884ea"
          />
          <HomeCard
            heading="ticket resolved"
            data={resolvedTicketCount}
            percent="21"
            icon={<IoCheckmarkCircleOutline className="text-white" />}
            colorFrom="#1d976c"
            colorTo="#2fd38a"
          />
          <HomeCard
            heading="project assigned"
            data={projectData.length}
            percent="37"
            icon={<FaBriefcase className="text-white" />}
            colorFrom="#fa5420"
            colorTo="#f6a800"
          />
          <HomeCard
            heading="Available Leaves"
            data={12 - approvedLeaveCount}
            percent="10"
            icon={<FaUmbrellaBeach className="text-white" />}
            colorFrom="#5b73e8"
            colorTo="#44c4fa"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
          <div className="basis-[65%] bg-white dark:bg-[#1A202E] rounded-xl p-4">
            <h1 className="capitalize mb-10 font-medium text-md dark:text-[#96A2B4]">
              Weekly working Hours
            </h1>
            <StackedColumnCharts />
          </div>
          <div className="basis-[35%] bg-white dark:bg-[#1A202E] rounded-xl p-4">
            <h1 className="capitalize mb-10 font-medium text-md dark:text-[#96A2B4]">
              Running Project Review
            </h1>
            <RadialBars />
            <ul className="flex justify-center gap-5">
              <li className="flex gap-2 items-center dark:text-[#96A2B4]">
                <span className="w-3 h-3 rounded-full bg-[#008ffbd9] block pr-3"></span>
                Project 1
              </li>
              <li className="flex gap-2 items-center dark:text-[#96A2B4]">
                <span className="w-3 h-3 rounded-full bg-[#00e396d9] block pr-3"></span>
                Project 2
              </li>
              <li className="flex gap-2 items-center dark:text-[#96A2B4]">
                <span className="w-3 h-3 rounded-full bg-[#feb019cc] block pr-3"></span>
                Project 3
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-stretch gap-6 w-full my-7">
          <div className="basis-[35%] bg-white dark:bg-[#1A202E] rounded-xl p-4">
            <h1 className="capitalize mb-4 font-medium text-md dark:text-[#96A2B4]">
              My Team
            </h1>
            <Team />
          </div>
          <div className="basis-[65%] bg-white dark:bg-[#1A202E] rounded-xl p-4">
            <h1 className="capitalize mb-4 font-medium text-md dark:text-[#96A2B4]">
              My Projects
            </h1>
            <Tasks />
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-6 w-full my-7">
          <div className="basis-1/2 xl:basis-1/3 dark:bg-[#1A202E] bg-white rounded-xl p-4 h-[400px]">
            <h1 className="capitalize mb-4 font-medium text-md dark:text-[#96A2B4]">
              Todo List
            </h1>
            <TodoComponent />
          </div>
          <div className="basis-[46%] xl:basis-[29%] bg-[#033F61] rounded-xl p-4 h-[400px]">
            <h1 className="capitalize mb-4 font-medium text-md text-white dark:text-[#96A2B4]">
              Today Weather
            </h1>
            <WeatherComponent />
          </div>
          <div className="basis-full xl:basis-1/3 bg-white dark:bg-[#1A202E] rounded-xl p-4 relative h-[400px]">
            <h1 className="capitalize mb-4 font-medium text-md dark:text-[#96A2B4]">
              Upcoming Schedules
            </h1>
            <Schedule />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
