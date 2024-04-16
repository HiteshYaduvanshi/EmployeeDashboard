import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import { useAuth } from "../Store/Auth";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LuUserPlus } from "react-icons/lu";

function ChatPage() {
  const navigate = useNavigate();

  const { userID, fetchChat, conversations, setChatWithData, setRefresh } =
    useAuth();

  useEffect(() => {
    fetchChat();
  }, []);

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
          <h1 className="font-medium text-xl dark:text-[#E9ECEF]">Chat</h1>
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
            <li className="dark:text-[#E9ECEF]">Chat</li>
          </ul>
        </div>
        <div className="w-full h-[77vh] mt-8  dark:bg-[#1F2937] rounded-md overflow-y-scroll custom-scrollbar flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="basis-[30%] bg-[#e4e4f1] dark:bg-[#1B202D] h-full rounded-md p-4 flex flex-col">
            <NavLink to="/dashboard/chat/users">
              <div className="bg-white dark:bg-[#232B3E] rounded-lg cursor-pointer p-3 flex gap-3 items-center">
                <LuUserPlus className="text-2xl dark:text-white" />
                <p className="font-semibold dark:text-white">ALL USERS</p>
              </div>
            </NavLink>

            <div className="bg-white dark:bg-[#232B3E] rounded-lg p-3 mt-3 flex-1 flex flex-col gap-5">
              {conversations.map((conversation, index) => {
                let chatName = "";
                let imageName = "";
                let email = "";
                conversation.users.forEach((user) => {
                  if (user._id !== userID) {
                    chatName = user.username;
                    imageName = user.imageName;
                    email = user.email;
                  }
                });
                if (!conversation.latestMessage) {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(
                          `/dashboard/chat/chatArea/${conversation._id}`
                        );
                        setChatWithData({
                          name: chatName,
                          image: imageName,
                          email: email,
                        });
                        setRefresh(conversation._id);
                      }}
                      className="flex items-center gap-3 border p-2 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-600 flex justify-center items-center">
                        <img
                          src={`https://dashboard-api-zc58.onrender.com/images/${imageName}`}
                          alt=""
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                      <div className="flex-1 flex gap-3 items-end justify-between">
                        <div>
                          <p className="dark:text-white">{chatName}</p>
                          <p className="dark:text-white">Start Coversation</p>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(
                          `/dashboard/chat/chatArea/${conversation._id}`
                        );
                        setChatWithData({
                          name: chatName,
                          image: imageName,
                          email: email,
                        });
                        setRefresh(conversation._id);
                      }}
                      className="flex items-center gap-3 border p-2 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-full flex justify-center items-center">
                        <img
                          src={`https://dashboard-api-zc58.onrender.com/images/${imageName}`}
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1 flex gap-3 items-end justify-between">
                        <div className=" max-w-fit">
                          <p className="dark:text-white font-semibold">
                            {chatName}
                          </p>
                          <p className="line-clamp-1 w-20 dark:text-white text-sm">
                            {conversation.latestMessage.content}
                          </p>
                        </div>
                        <div>
                          <p className="dark:text-white text-xs">
                            {formatTimestampToHoursAndMinutes(
                              conversation.latestMessage.updatedAt
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="basis-[70%] gap-3 bg-[#dbdbe1] dark:bg-[#1B202D] h-full rounded-md flex flex-col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
