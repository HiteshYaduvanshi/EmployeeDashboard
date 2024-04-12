import React from "react";
import forgetImage from "../assets/forgetPassword.png";
import { NavLink } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

function ForgetPassword() {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="basis-1/2">
          <img src={forgetImage} alt="" className="w-full h-full" />
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="max-w-full w-[410px] my-auto">
              <h1 className="text-4xl font-semibold">Reset Password</h1>
              <p className="text-[#96a2b4] mt-3 text-xl">Let Us Help You</p>
              <form className="">
                <div class="relative my-12">
                  <div class="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                    <MdOutlineMail className="text-xl" />
                  </div>
                  <input
                    type="text"
                    id="floating_outlined"
                    class="block w-full px-3 py-4 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute left-3 -top-2 -z-1 px-1 text-xs text-gray-500 bg-white"
                  >
                    Email*
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-center w-full bg-[#3f51b5] rounded py-4 text-white"
                >
                  Reset My Password
                </button>
              </form>
              <div className="py-6 text-center">
                <NavLink to="/" className="text-[#586acd]">
                  Login?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
