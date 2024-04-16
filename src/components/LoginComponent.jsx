import React, { useRef, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useAuth } from "../Store/Auth";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'; // Import the LoadingBar component

function LoginComponent() {
  const [inputData, setInputData] = useState({
    email: "example@gmail.com",
    password: "Example@123",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to control loading bar

  const { storeTokenInLocalStorage, storeUserIDLocalStorage, clientData } = useAuth();
  const navigate = useNavigate();
  let loadingRef = useRef(null); // Ref to access the LoadingBar component

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading bar when login process starts
    loadingRef.current.staticStart(); // Start the loading animation
    try {
      const response = await fetch("https://dashboard-api-zc58.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
      });
      if (response.ok) {
        const resData = await response.json();
        storeTokenInLocalStorage(resData.token);
        storeUserIDLocalStorage(resData.userID);
        toast.success("Login success", {
          theme: "colored",
        });
        loadingRef.current.complete(); // Complete the loading animation
        setTimeout(() => {
          navigate("/dashboard");
          window.location.reload(true);
          setLoading(false); // Hide loading bar when login is successful
        }, 2000);
      } else {
        toast.error("Invalid Email or Password", {
          theme: "colored",
        });
        setLoading(false); // Hide loading bar when login fails
        loadingRef.current.complete(); // Complete the loading animation
      }
    } catch (error) {
      // console.error(error.message)
      setLoading(false); // Hide loading bar when login fails due to error
      loadingRef.current.complete(); // Complete the loading animation
    }
  };

  return (
    <>
      <ToastContainer />
      <LoadingBar color="#0085DB" ref={loadingRef} /> {/* Loading bar */}
      <div className="max-w-[400px] w-full h-auto bg-white rounded-2xl shadow-lg p-5">
        <h1 className="text-center text-2xl font-semibold pt-4">Brand-Name</h1>
        <form className="pt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="username">
              Email
            </label>
            <input
              className="rounded-md border border-black p-4"
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={inputData.email}
              onChange={handleInputData}
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md border border-black p-4"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="off"
              value={inputData.password}
              onChange={handleInputData}
            />
            <span
              onClick={handleShowPassword}
              className="absolute top-[57%] right-4 cursor-pointer"
            >
              {showPassword ? (
                <IoEye className="text-xl" />
              ) : (
                <IoEyeOff className="text-xl" />
              )}
            </span>
          </div>
          <div className="w-full">
            <NavLink to="/forgetPassword" className="text-[#0085DB] font-medium text-right block">
              Forgot Password?
            </NavLink>
          </div>
          <button
            className="my-4 bg-[#0085DB] rounded-full py-4 text-white"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginComponent;
