import React from "react";
import { useAuth } from "../Store/Auth";

function Team() {
  const { userID, clients } = useAuth();

  const otherClients = clients.filter((client) => client._id !== userID);
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#F5F5F5] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                #
              </th>
              <th scope="col" className="px-3 py-3">
                Employee Name
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {otherClients.map((client, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-3 py-4">
                  <img
                    className="rounded-full w-9 h-9"
                    src={`https://dashboard-api-zc58.onrender.com/images/${client.imageName}`}
                    alt=""
                  />
                </td>
                <td className="px-3 py-4">
                  <div>
                    <h2 className="text-[17px] font-medium text-[#0A58CA] capitalize">
                      {client.username}
                    </h2>
                    <p className="text-xs font-medium capitalize">
                      {client.designation}
                    </p>
                  </div>
                </td>
                <td className="px-3 py-4">
                  <h1 className="border text-center text-[#4CAF50] font-medium w-fit px-2 py-1 rounded-lg border-[#4CAF50]">
                    Available
                  </h1>
                </td>
              </tr>
            ))}

            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-3 py-4">
                <img className="rounded-full w-9 h-9" src={userFive} alt="" />
              </td>
              <td className="px-3 py-4">
                <div>
                  <h2 className="text-[17px] font-medium text-[#0A58CA]">
                    Sarah Smith
                  </h2>
                  <p className="text-xs font-medium">Manager</p>
                </div>
              </td>
              <td className="px-3 py-4">
                <h1 className="border text-center text-[#F44336] font-medium w-fit px-2 py-1 rounded-lg border-[#F44336]">
                  Absend
                </h1>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-3 py-4">
                <img className="rounded-full w-9 h-9" src={userFive} alt="" />
              </td>
              <td className="px-3 py-4">
                <div>
                  <h2 className="text-[17px] font-medium text-[#0A58CA]">
                    Dr.Megha Trivedi
                  </h2>
                  <p className="text-xs font-medium">Manager</p>
                </div>
              </td>
              <td className="px-3 py-4">
                <h1 className="border text-center text-[#4CAF50] font-medium w-fit px-2 py-1 rounded-lg border-[#4CAF50]">
                  Available
                </h1>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-3 py-4">
                <img className="rounded-full w-9 h-9" src={userFive} alt="" />
              </td>
              <td className="px-3 py-4">
                <div>
                  <h2 className="text-[17px] font-medium text-[#0A58CA]">
                    Jay Soni
                  </h2>
                  <p className="text-xs font-medium">Manager</p>
                </div>
              </td>
              <td className="px-3 py-4">
                <h1 className="border text-center text-[#4CAF50] font-medium w-fit px-2 py-1 rounded-lg border-[#4CAF50]">
                  Available
                </h1>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-3 py-4">
                <img className="rounded-full w-9 h-9" src={userFive} alt="" />
              </td>
              <td className="px-3 py-4">
                <div>
                  <h2 className="text-[17px] font-medium text-[#0A58CA]">
                    Jay Soni
                  </h2>
                  <p className="text-xs font-medium">Manager</p>
                </div>
              </td>
              <td className="px-3 py-4">
                <h1 className="border text-center text-[#4CAF50] font-medium w-fit px-2 py-1 rounded-lg border-[#4CAF50]">
                  Available
                </h1>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-3 py-4">
                <img className="rounded-full w-9 h-9" src={userFive} alt="" />
              </td>
              <td className="px-3 py-4">
                <div>
                  <h2 className="text-[17px] font-medium text-[#0A58CA]">
                    Jay Soni
                  </h2>
                  <p className="text-xs font-medium">Manager</p>
                </div>
              </td>
              <td className="px-3 py-4">
                <h1 className="border text-center text-[#4CAF50] font-medium w-fit px-2 py-1 rounded-lg border-[#4CAF50]">
                  Available
                </h1>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-3 py-4">
                <img className="rounded-full w-9 h-9" src={userFive} alt="" />
              </td>
              <td className="px-3 py-4">
                <div>
                  <h2 className="text-[17px] font-medium text-[#0A58CA]">
                    Jay Soni
                  </h2>
                  <p className="text-xs font-medium">Manager</p>
                </div>
              </td>
              <td className="px-3 py-4">
                <h1 className="border text-center text-[#4CAF50] font-medium w-fit px-2 py-1 rounded-lg border-[#4CAF50]">
                  Available
                </h1>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Team;
