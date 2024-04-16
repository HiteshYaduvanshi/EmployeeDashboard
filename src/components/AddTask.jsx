import React, { useState } from "react";
import { useAuth } from "../Store/Auth";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import SignupImg from "../assets/signup-image.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask() {
  const { clients } = useAuth();

  const [taskRequest, setTaskRequest] = useState({
    id: "",
    project: "",
    type: "",
    priority: "",
    details: "",
    user: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setTaskRequest({
      ...taskRequest,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dashboard-api-zc58.onrender.com/add-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...taskRequest,
          // user: userID,
        }),
      });
      if (response.ok) {
        toast.success("Task assign successfully", {
          theme: "colored",
        });
        setTaskRequest({
          id: "",
          project: "",
          type: "",
          priority: "",
          details: "",
          user: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl dark:text-[#E9ECEF]">Add Task</h1>
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
            <li className="dark:text-[#E9ECEF]">Add Task</li>
          </ul>
        </div>
        <div className="w-full h-[77vh]  mt-8 bg-white dark:bg-[#1F2937] rounded-md overflow-y-scroll custom-scrollbar">
          <div className="p-5">
            <h1 className="font-medium capitalize text-md dark:text-[#96A2B4]">
              Add Task
            </h1>
            <div className="flex  h-full justify-between items-center mt-10">
              <div className="basis-1/2 ">
                <img src={SignupImg} alt="" className="mx-auto" />
              </div>
              <div className="basis-1/2">
                <form
                  className="max-w-md h-[400px] flex flex-col justify-center"
                  onSubmit={handleSubmit}
                >
                  <div className="relative z-0 w-full mb-7 group">
                    <input
                      type="number"
                      placeholder=""
                      name="id"
                      value={taskRequest.id}
                      onChange={handleInput}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      ID
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-7 group">
                    <input
                      type="text"
                      placeholder=""
                      name="project"
                      value={taskRequest.project}
                      onChange={handleInput}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Tittle
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-7 group">
                    <input
                      type="text"
                      placeholder=""
                      name="priority"
                      value={taskRequest.priority}
                      onChange={handleInput}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Priority
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-7 group">
                    <input
                      type="text"
                      placeholder=""
                      name="type"
                      value={taskRequest.type}
                      onChange={handleInput}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Type
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-7 group">
                    <input
                      type="text"
                      placeholder=""
                      name="details"
                      value={taskRequest.details}
                      onChange={handleInput}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Details
                    </label>
                  </div>
                  <select
                    id="underline_select"
                    className="block py-2.5 px-0 mb-7 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    name="user"
                    value={taskRequest.user}
                    onChange={handleInput}
                  >
                    <option>Assign Task To User</option>
                    {clients.map((client, index) => (
                      <option
                        key={index}
                        value={client._id}
                        className="capitalize"
                      >
                        {client.username}
                      </option>
                    ))}
                  </select>

                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
