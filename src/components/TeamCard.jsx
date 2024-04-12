import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiSmartphoneFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

function TeamCard({username,phone,email,image,designation}) {
  return (
    <>
      <div className="border rounded-md shadow-lg w-full dark:border-slate-950 h-fit p-4 flex items-start gap-10">
        <div className="basis-[15%]">
          <img
            src={`https://dashboard-api-zc58.onrender.com/images/${image}`}
            alt="user Img"
            className="w-40 rounded-2xl shadow-xl border-4 border-white"
          />
        </div>
        <div className="basis-[50%]">
          <h1 className="text-[#00BDF2] font-medium text-2xl capitalize">{username}</h1>
          <p className="font-medium dark:text-[#96A2B4] capitalize">{designation}</p>
        </div>
        <div className="basis-[35%]">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 dark:text-[#96A2B4]">
              <IoLocationSharp /> Shanti Nagar Bldg No B 4, Sector No 6, Mira
              Road
            </li>
            <li className="flex items-center gap-2 dark:text-[#96A2B4]">
              <FaGithub />
              github.com/Example
            </li>
            <li className="flex items-center gap-2 dark:text-[#96A2B4]">
              <RiSmartphoneFill />
              {phone}
            </li>
            <li className="flex items-center gap-2 dark:text-[#96A2B4]">
              <IoIosMail className="mt-1" />
              {email}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
