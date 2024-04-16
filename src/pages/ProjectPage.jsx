import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import { useAuth } from "../Store/Auth";

function ProjectPage() {
  const { projectData } = useAuth();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl dark:text-[#E9ECEF]">
            My Projects
          </h1>
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
            <li className="dark:text-[#E9ECEF]">My Projects</li>
          </ul>
        </div>
        <div className="w-full h-[77vh] mt-8 bg-white dark:bg-[#1F2937] rounded-md overflow-y-scroll custom-scrollbar">
          <div className="w-full bg-[#DAE1F3] dark:bg-[#020910] h-16 rounded-t-md flex justify-between items-center px-5">
            <h1 className="font-medium dark:text-[#96A2B4]">My Projects</h1>
          </div>
          <div className="mt-5 px-5">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Project Tittle
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DeadLine
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 font-medium py-4">{project.id}</td>
                      <td className="px-6 font-medium py-4 capitalize">
                        {project.projectTitle}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {formatDate(project.startDate)}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {formatDate(project.endDate)}
                      </td>
                      <td className="px-6 font-medium py-4">
                        <div
                          className="border  w-fit px-3 py-1 rounded-md capitalize"
                          style={{
                            color:
                              project.priority === "low"
                                ? "#008000"
                                : project.priority === "medium"
                                ? "#2196F3"
                                : "#FF0000",
                            borderColor:
                              project.priority === "low"
                                ? "#008000"
                                : project.priority === "medium"
                                ? "#2196F3"
                                : "#FF0000",
                          }}
                        >
                          {project.priority}
                        </div>
                      </td>
                      <td className="px-6 font-medium py-4">
                        <div
                          className="border w-fit px-3 py-1 rounded-md capitalize"
                          style={{
                            color:
                              project.status === "active"
                                ? "#008000"
                                : "#FF0000",
                            borderColor:
                              project.status === "active"
                                ? "#008000"
                                : "#FF0000",
                          }}
                        >
                          {project.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
