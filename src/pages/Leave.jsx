import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import { FaCirclePlus } from "react-icons/fa6";
import Datepicker from "react-tailwindcss-datepicker";
import { useAuth } from "../Store/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Leave() {
  const { leaveData, userID } = useAuth();
  const [isTooltipAddVisible, setTooltipAddVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const [leaveRequest, setLeaveRequest] = useState({
    leaveType: "",
    leaveReason: "",
    startDate: "",
    endDate: "",
  });

  const handleDateChange = (newDate) => {
    setDateRange(newDate);
    setLeaveRequest({
      ...leaveRequest,
      startDate: newDate.startDate,
      endDate: newDate.endDate,
    });
  };

  const calculateNoOfDays = (fromDate, toDate) => {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference+1;
  };

  const handleAddIconClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLeaveRequest({
      ...leaveRequest,
      [name]: value,
    });
  };

  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dashboard-api-zc58.onrender.com/add-leaves", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...leaveRequest,
          user: userID,
        }),
      });

      if (response.ok) {
        toast.success("leave request successfull", {
          theme: "colored",
        });
        setLeaveRequest({
          leaveType: "",
          leaveReason: "",
          startDate: "",
          endDate: "",
        });
        setDateRange({
          startDate: null,
          endDate: null,
        });
      } else {
        toast.error("leave request failed", {
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          <h1 className="font-medium text-xl dark:text-[#E9ECEF]">My Leaves</h1>
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
            <li className="dark:text-[#E9ECEF]">My Leaves</li>
          </ul>
        </div>
        <div className="w-full h-[77vh] mt-8 bg-white dark:bg-[#1F2937] rounded-md overflow-y-scroll custom-scrollbar">
          <div className="w-full bg-[#DAE1F3] dark:bg-[#020910] h-16 rounded-t-md flex justify-between items-center px-5">
            <h1 className="font-medium dark:text-[#96A2B4]">My Leaves</h1>
            <div className="flex items-center gap-5">
              <div className="relative">
                <div
                  onMouseOver={() => setTooltipAddVisible(true)}
                  onMouseOut={() => setTooltipAddVisible(false)}
                  onClick={handleAddIconClick}
                >
                  <FaCirclePlus className="text-4xl shadow-md rounded-full  text-[#3d4eb2] hover:text-[#4758B8]" />
                </div>
                {isTooltipAddVisible && (
                  <div className="absolute bg-gray-700 text-white text-sm px-2 py-1 mt-2 rounded whitespace-no-wrap">
                    ADD
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Apply Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      No of Days
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Types
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaveData.map((leave, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 font-medium py-4">
                        {formatDate(leave.applyDate)}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {formatDate(leave.startDate)}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {formatDate(leave.endDate)}
                      </td>
                      <td className="px-6 font-medium py-4">
                        {calculateNoOfDays(leave.startDate, leave.endDate)} Days
                      </td>
                      <td className="px-6 font-medium py-4">
                        {leave.leaveType} Leave
                      </td>
                      <td className="px-6 font-medium py-4">
                        <div className="border border-[#2196F3] text-[#2196F3] w-fit px-3 py-1 rounded-md capitalize">
                          {leave.status}
                        </div>
                      </td>
                      <td className="px-6 font-medium py-4 line">
                        {leave.leaveReason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white dark:bg-[#232B3E] p-8 rounded-md w-1/2">
            <form className="max-w-full mx-auto" onSubmit={handleLeaveSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <label className="block mb-3 dark:text-white">
                  Select Date
                </label>
                <Datepicker
                  value={dateRange}
                  onChange={handleDateChange}
                  showShortcuts={false}
                  classNames="z-50"
                />
              </div>
              <div className="z-0 w-full mb-5 group">
                <label className="dark:text-white">Leave Type</label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
                  value={leaveRequest.leaveType}
                  name="leaveType"
                  onChange={handleInput}
                >
                  <option>Select Leave Type</option>
                  <option value="Casual">Casual Leave</option>
                  <option value="Sick">Sick Leave</option>
                  <option value="Privilege">Privilege Leave</option>
                  <option value="Marriage">Marriage Leave</option>
                  <option value="Maternity">Maternity Leave</option>
                </select>
              </div>
              <div className="z-0 w-full mb-5 group">
                <label htmlFor="floating_email" className="dark:text-white">
                  Reason
                </label>
                <input
                  type="text"
                  name="leaveReason"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={leaveRequest.leaveReason}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseDialog}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default Leave;
