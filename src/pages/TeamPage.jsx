import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import TeamCard from "../components/TeamCard";
import { useAuth } from "../Store/Auth";

function TeamPage() {
  const { userID,clients } = useAuth();
  
  const otherClients = clients.filter(client => client._id !== userID);
  
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl dark:text-[#E9ECEF]">Employees</h1>
          <ul className="flex items-center gap-1">
            <li>
              <AiOutlineHome className="dark:text-[#E9ECEF]" />
            </li>
            <li>
              <RxTriangleRight className="dark:text-[#E9ECEF]" />
            </li>
            <li className="dark:text-[#E9ECEF]">Home</li>
            <li>
              <RxTriangleRight className="dark:text-[#E9ECEF]" />
            </li>
            <li className="dark:text-[#E9ECEF]">Employees</li>
          </ul>
        </div>
        <div className="w-full h-[77vh] flex flex-col gap-6 shadow-md p-4 mt-8 bg-white dark:bg-[#1F2937] rounded-md overflow-y-scroll custom-scrollbar">
          {otherClients.map((client,index)=>(
          <TeamCard key={index} designation={client.designation} username={client.username} image={client.imageName} phone={client.phone} email={client.email}  />
          ))}
        </div>
      </div>
    </>
  );
}

export default TeamPage;
