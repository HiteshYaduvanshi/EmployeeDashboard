import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import { useAuth } from "../Store/Auth";

function AttendencePage() {
  const { attendenceData } = useAuth();

  function calculateTimeDifference(timestamp1, timestamp2) {
    
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);

    const timeDifferenceMs = date2 - date1;

    const totalMinutes = Math.floor(timeDifferenceMs / (1000 * 60));

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} hours ${minutes} minutes`;
  }

  function formatTimestampToHoursAndMinutes(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes} ${amOrPm}`;
  }

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl dark:text-[#E9ECEF]">
            Attendance
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
            <li className="dark:text-[#E9ECEF]">Attendance</li>
          </ul>
        </div>
        <div className="w-full h-[77vh] mt-8 bg-white dark:bg-[#1F2937] rounded-md overflow-y-scroll custom-scrollbar">
          <div className="w-full bg-[#DAE1F3] dark:bg-[#020910] h-16 rounded-t-md flex justify-between items-center px-5">
            <h1 className="font-medium dark:text-[#96A2B4]">Attendances</h1>
          </div>
          <div className="mt-5 px-5">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Check-IN
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Break
                    </th>
                    <th scope="col" className="px-6 py-3">
                      check-out
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendenceData.map((attendance, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 font-medium py-4">
                        {attendance.date}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {formatTimestampToHoursAndMinutes(
                          attendance.checkInTime
                        )}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {attendance.breakStart
                          ? calculateTimeDifference(
                              attendance.breakStart,
                              attendance.breakEnd
                            )
                          : "-----"}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {attendance.checkOutTime
                          ? formatTimestampToHoursAndMinutes(
                              attendance.checkOutTime
                            )
                          : "-----"}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {attendance.checkOutTime
                          ? calculateTimeDifference(attendance.checkInTime,attendance.checkOutTime)
                          : "-----"}
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

export default AttendencePage;
