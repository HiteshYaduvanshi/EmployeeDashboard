import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useAuth } from "../Store/Auth";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginComponent() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const {storeTokenInLocalStorage,storeUserIDLocalStorage,clientData} = useAuth()
  const navigate = useNavigate()

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
    e.preventDefault()
    try {
      const response = await fetch("https://dashboard-api-zc58.onrender.com/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
      })
      if(response.ok){
        const resData = await response.json();
        storeTokenInLocalStorage(resData.token)
        storeUserIDLocalStorage(resData.userID)
        toast.success("Login success",{
          theme: "colored",
        })
        setTimeout(() => {
          navigate("/dashboard");
          window.location.reload(true);
        }, 2000); 
        // navigate("/dashboard")
        // window.location.reload(true);
      }
      else{
        toast.error("Invalid Email or Password",{
          theme: "colored",
        });
      }
    } catch (error) {
      // console.error(error.message)
    }
  }
  return (
    <>
    <ToastContainer />
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
              value={inputData.username}
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