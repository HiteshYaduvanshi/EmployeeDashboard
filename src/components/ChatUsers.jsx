import React from "react";
import { useAuth } from "../Store/Auth";

function ChatUsers() {
  const { clients, accessChat, userID } = useAuth();
  const otherClients = clients.filter((client) => client._id !== userID);

  return (
    <>
      <div className="flex items-center gap-3 bg-white dark:bg-[#232B3E] p-3 m-3 rounded-lg">
        <p className="font-bold text-xl dark:text-white">All Users</p>
      </div>
      <div className="flex-1 dark:bg-[#232B3E] flex flex-col gap-3 p-3 mx-3 mb-3 rounded-lg border overflow-y-scroll custom-scrollbar">
        {otherClients &&
          otherClients.map((client, index) => (
            <div
              key={client._id}
              className="bg-white dark:bg-[#1A202D] rounded-lg cursor-pointer"
              onClick={() => accessChat(client._id)}
            >
              <div className="flex items-center gap-3  p-2">
                <div className="w-12 h-12 rounded-full  flex justify-center items-center">
                  {/* <p className='dark:text-white'>{client.username[0]}</p> */}
                  <img
                    src={`https://dashboard-api-zc58.onrender.com/images/${client.imageName}`}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1 flex gap-3 items-end justify-between">
                  <div>
                    <p className="dark:text-white capitalize">{client.username}</p>
                    <p className="dark:text-white">{client.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ChatUsers;
