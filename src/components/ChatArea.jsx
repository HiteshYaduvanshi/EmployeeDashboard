import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import { useParams } from "react-router-dom";
import { useAuth } from "../Store/Auth";
import io from "socket.io-client";
import WelcomeChat from "./WelcomeChat";

const ENDPOINT = "https://dashboard-api-zc58.onrender.com/";

var socket;

function ChatArea() {
  const [messageContent, setMessageContent] = useState("");
  const { _id } = useParams();

  const {
    chatWithData,
    authorizedToken,
    messages,
    userID,
    setMessages,
    conversations,
    refresh,
    setRefresh,
  } = useAuth();
  console.log("hello", chatWithData);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", userID);
    socket.on("connection", () => {
      console.log("Socket connected"); // Just for debugging
    });

    return () => {
      socket.disconnect(); // Disconnect the socket when component unmounts
    };
  }, [userID]);

  useEffect(() => {
    socket.on("message recieved", (newMessage) => {
      // console.log("hello", newMessage);
      if (!messages || messages._id === newMessage._id) {
        console.log("error error");
        alert("hcusjb");
      } else {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });
  }, []);

  useEffect(() => {
    if (refresh) {
      const fetchMessages = async () => {
        try {
          const response = await fetch(
            `https://dashboard-api-zc58.onrender.com/sendMessage/${refresh}`,
            {
              method: "GET",
              headers: { Authorization: authorizedToken },
            }
          );

          if (response.ok) {
            const data = await response.json();
            // console.log("message", data);
            setMessages(data);
            // console.log(chatID);
            socket.emit("join chat", refresh);
          } else {
            console.error("Failed to fetch messages:", response.status);
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };

      fetchMessages();
      setRefresh(false);
    }
  }, [refresh, messages, setMessages, userID]);

  const sendMessage = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (messageContent.trim() !== "") {
      try {
        const response = await fetch("https://dashboard-api-zc58.onrender.com/sendMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizedToken,
          },
          body: JSON.stringify({
            content: messageContent,
            chatId: _id,
          }),
        });

        if (response.ok) {
          setMessageContent(""); // Reset message content after sending
          const data = await response.json();
          setMessages([...messages, data.messageCreated]); // Append the new message to the existing messages
          socket.emit("new message", data.messageCreated);
        } else {
          console.error("Failed to send message:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending message:", error.message);
      }
    }
  };

  // console.log(userID);
  return (
    <>
      {chatWithData.name != "" ? (
        <div className="flex flex-col p-4 gap-3 h-full">
          <div className="flex items-center gap-3 bg-white dark:bg-[#232B3E] p-3 rounded-lg">
            <p className="w-12 h-12 rounded-full flex justify-center items-center">
              <img src={`https://dashboard-api-zc58.onrender.com/images/${chatWithData.image}`} alt="" className="w-12 h-12 rounded-full" />
            </p>
            <div className="flex justify-center flex-col flex-1">
              <p className="dark:text-white capitalize">{chatWithData.name}</p>
              <p className="dark:text-white">today</p>
            </div>
          </div>
          <div className="flex-1 bg-white dark:bg-[#232B3E] p-3 rounded-lg overflow-y-scroll custom-scrollbar">
            {messages.map((message, index) => {
              if (message.sender._id === userID) {
                return <MessageSelf msg={message} key={index} />;
              } else {
                return <MessageOthers msg={message} key={index} />;
              }
            })}
          </div>
          <div className="bg-white dark:bg-[#232B3E] p-3 rounded-md">
            <form
              className="flex justify-between items-center"
              onSubmit={sendMessage}
            >
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full text-xl dark:bg-[#232B3E] dark:text-white outline-none focus:outline-none focus:border-none"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
              />
              <button type="submit">
                <IoMdSend className="text-xl ml-2 cursor-pointer dark:text-white" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col p-4 gap-3 h-full">
          <WelcomeChat />
        </div>
      )}
    </>
  );
}

export default ChatArea;
