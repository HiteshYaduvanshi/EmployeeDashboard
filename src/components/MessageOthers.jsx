import React from "react";

function MessageOthers({ msg }) {
  // console.log(msg);
  const prop1 = { name: "random user", message: "this is a sample message" };
  return (
    <>
      <div className=" flex justify-start items-center gap-3 my-2">
        <p className="w-12 h-12 rounded-full flex justify-center items-center text-[20px] bg-gray-300">
        <img src={`https://dashboard-api-zc58.onrender.com/${msg.sender.imageName}`} alt="" className="w-12 h-12 rounded-full" />
        </p>
        <div className="dark:bg-[#343840] bg-[#E8E8E8] px-3 rounded-2xl">
          <p className="dark:text-[#DDDDDD] capitalize text-sm">
            {msg.sender.username}
          </p>
          <p className="dark:text-white text-lg">{msg.content}</p>
          <p className="text-end dark:text-[#dddddd] text-xs">12:00am</p>
        </div>
      </div>
    </>
  );
}

export default MessageOthers;
