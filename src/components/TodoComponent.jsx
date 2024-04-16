import React, { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { GoDash } from "react-icons/go";
import { useAuth } from "../Store/Auth";

function TodoComponent() {
  const [todoData, setTodoData] = useState([]);
  const [inputData, setInputData] = useState({
    data: "",
    priority: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.data !== "" && inputData.priority !== "") {
      setTodoData([...todoData, inputData]);
      setInputData({
        data: "",
        priority: "",
      });
    }
  };

  const getPriorityColorClass = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-700";
      case "normal":
        return "text-gray-400";
      case "low":
        return "text-green-700";
      default:
        return "";
    }
  };

  const { isHovered } = useAuth();
  return (
    <>
      <div className="">
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap lg:flex-nowrap gap-4 justify-between items-stretch"
          >
            <input
              type="text"
              placeholder="Add Todo"
              name="data"
              value={inputData.data}
              onChange={handleInput}
              className={`${
                isHovered ? "max-w-32" : "max-w-48"
              } border-2 px-1 py-2 focus:outline-none dark:bg-transparent dark:text-white`}
            />
            <select
              name="priority"
              value={inputData.priority}
              onChange={handleInput}
              className="max-w-40 border-2 px-1 py-2 focus:outline-none bg-transparent dark:text-white"
            >
              <option value="" disabled hidden>
                Priority
              </option>
              <option value="high" className="dark:bg-[#232B3E]">High</option>
              <option value="normal" className="dark:bg-[#232B3E]">Normal</option>
              <option value="low" className="dark:bg-[#232B3E]">Low</option>
            </select>
            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center "
            >
              Add Todo
            </button>
          </form>
        </div>
        <div className="w-full h-[245px]">
          <div
            className="relative overflow-x-auto border mt-7 w-full h-[245px] overflow-y-scroll custom-scrollbar"
            style={{
              border: todoData.length == 0 ? "none" : "1px solid #C7C8CC",
            }}
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                {todoData.map((todo, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">
                      <RxDragHandleDots2 className="text-md cursor-move" />
                    </td>
                    <td className="px-6 py-4">
                      <MdDeleteOutline className="text-red-500 text-md cursor-pointer" />
                    </td>
                    <td className="px-6 py-4 capitalize font-medium">
                      {todo.data}
                    </td>
                    <td
                      className={`px-6 py-4 capitalize flex items-center gap-3 ${getPriorityColorClass(
                        todo.priority
                      )}`}
                    >
                      {todo.priority === "high" && (
                        <IoMdArrowUp className="text-md" />
                      )}
                      {todo.priority === "normal" && (
                        <GoDash className="text-md" />
                      )}
                      {todo.priority === "low" && (
                        <IoArrowDown className="text-md" />
                      )}
                      {todo.priority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoComponent;
