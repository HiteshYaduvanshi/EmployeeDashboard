import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { useAuth } from "../Store/Auth";

function Tasks() {
  const { projectData } = useAuth();

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#F5F5F5] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                Project Id
              </th>
              <th scope="col" className="px-3 py-3">
                Project Name
              </th>
              <th scope="col" className="px-3 py-3">
                Priority
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-3 py-4 font-semibold text-md">{project.id}</td>
                <td className="px-3 py-4 font-semibold text-md">{project.projectTitle}</td>
                <td className="px-3 py-4 font-semibold text-md">{project.priority}</td>
                <td className="px-3 py-4 font-semibold text-md">{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tasks;
