import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import { useAuth } from "../Store/Auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SettingPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const {userID} = useAuth()

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dashboard-api-zc58.onrender.com/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userID,
          currentPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setMessage(responseData.message);
        setCurrentPassword("")
        setNewPassword("")
        toast.success("Password Change successfull",{
          theme: "colored",
        })
      }
      else{
        toast.error("Password change failed",{
          theme: "colored",
        });
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Error changing password:", error);
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl dark:text-[#E9ECEF]">
            My Settings
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
            <li className="dark:text-[#E9ECEF]">My Settings</li>
          </ul>
        </div>
        <div className="w-full h-fit mt-8 bg-white dark:bg-[#1F2937] rounded-md overflow-y-scroll custom-scrollbar">
          <div className="p-5">
            <h1 className="font-medium capitalize text-md dark:text-[#96A2B4]">
              change password
            </h1>
            <form
              className="flex flex-col gap-5 mt-10"
              onSubmit={handleChangePassword}
            >
              <input
                className="w-full border-2 p-3 dark:bg-[#1F2937]"
                type="Password"
                placeholder="CurrentPassword"
                name="password"
                id="CurrentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                className="w-full border-2 p-3 dark:bg-[#1F2937]"
                type="Password"
                placeholder="New Password"
                name="password"
                id="NewPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#4758B8] text-white p-4 rounded-md"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingPage;
