import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userID, setUserID] = useState(localStorage.getItem("userID"));
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [leaveData, setLeaveData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [attendenceData, setAttendenceData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [clients, setClients] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [chatWithData, setChatWithData] = useState({
    name: "",
    image: "",
    email: "",
  });
  // const [selectedChat, setSelectedChat] = useState();
  // const [chats, setChats] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // const [chatname, setChatName] = useState("");
  // const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const authorizedToken = `Bearer ${token}`;

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const storeUserIDLocalStorage = (userID) => {
    setToken(userID);
    return localStorage.setItem("userID", userID);
  };

  const logout = () => {
    setToken("");
    setUserID("");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isMenueClicked, setIsMenueClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    if (isMenueClicked) {
      setIsHovered(false);
    }
  };

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const clientData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://dashboard-api-zc58.onrender.com/getData",
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserData(data.userData);
      } else {
        console.log(
          `Error on fetching data: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error on fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    clientData();
  }, []);

  // get leave data
  const getLeaveData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://dashboard-api-zc58.onrender.com/get-leaves",
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLeaveData(data.leaveData);
      } else {
        console.log(
          `Error on fetching data: ${response.status} - ${response.statusText}`
        );
        // Handle specific error scenarios if needed
      }
    } catch (error) {
      console.error("Error on fetching user data:", error);
      // Handle specific error scenarios if needed
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLeaveData();
  }, [leaveData, getLeaveData]);

  const getProjectData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://dashboard-api-zc58.onrender.com/get-project",
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setProjectData(data.projectData);
      } else {
        console.log(
          `Error on fetching data: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error on fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProjectData();
  }, [projectData,setProjectData]);

  const fetchClient = async () => {
    try {
      const response = await fetch(
        "https://dashboard-api-zc58.onrender.com/getAllclient",
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setClients(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchClient();
  }, [clients, setClients]);

  const getTaskData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://dashboard-api-zc58.onrender.com/get-task",
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTaskData(data.taskData);
      } else {
        console.log(
          `Error on fetching data: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error on fetching user data:", error);
      // Handle specific error scenarios if needed
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTaskData();
  }, [taskData,setTaskData]);

  const getAttendenceData = async () => {
    try {
      const response = await fetch(
        "https://dashboard-api-zc58.onrender.com/attendance",
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAttendenceData(data.attendence);
      }
    } catch (error) {
      console.error("Error on fetching user data:", error);
    }
  };
  useEffect(() => {
    getAttendenceData();
  }, []);

  const getTicketData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://dashboard-api-zc58.onrender.com/get-ticket",
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTicketData(data.ticketData);
      } else {
        console.log(
          `Error on fetching data: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error on fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTicketData();
  }, [ticketData,setTicketData]);

  const handleSearchChatSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue) {
      alert("Please enter valid search value");
      return;
    }
    try {
      const response = await fetch(
        `https://dashboard-api-zc58.onrender.com/get-users?search=${searchValue}`,
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSearchData(data.users);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const accessChat = async (userId) => {
    try {
      setIsLoading(true);

      const response = await fetch("https://dashboard-api-zc58.onrender.com/accessChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizedToken,
        },
        body: JSON.stringify({ userId }),
      });

      // if (response.ok) {
      //   const data = await response.json();
      //   // if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      //   // setSelectedChat(data);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChat = async () => {
    try {
      const response = await fetch(`https://dashboard-api-zc58.onrender.com/fetchChat`, {
        method: "GET",
        headers: { Authorization: authorizedToken },
      });

      if (response.ok) {
        const data = await response.json();
        setConversations(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const getSender = (users) => {
  //   if (users && users.length >= 2 && userData) {
  //     const currentUserID = userData._id;
  //     if (users[0]._id === currentUserID) {
  //       setChatName(users[1].username);
  //       return users[1].username;
  //     } else {
  //       setChatName(users[0].username);
  //       return users[0].username;
  //     }
  //   }
  //   return "user";
  // };

  // const sendMessage = async (event) => {
  //   if (event.key === "Enter" && newMessage) {
  //     event.preventDefault();
  //     try {
  //       const response = await fetch("http://localhost:5001/sendMessage", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: authorizedToken,
  //         },
  //         body: JSON.stringify({
  //           content: newMessage,
  //           chatId: selectedChat,
  //         }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setNewMessage("");
  //         setMessages([...messages, data.messageCreated]);
  //         console.log("bye", data.messageCreated);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  // };

  const fetchMessages = async (chatID) => {
    try {
      const response = await fetch(
        `https://dashboard-api-zc58.onrender.com/sendMessage/${chatID}`,
        {
          method: "GET",
          headers: { Authorization: authorizedToken },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("message", data);
        setMessages(data);
        socket.emit("join chat", chatID);
      } else {
        console.error("Failed to fetch messages:", response.status);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLocalStorage,
        isHovered,
        handleHover,
        handleLeave,
        setIsHovered,
        isMenueClicked,
        setIsMenueClicked,
        logout,
        themeMode,
        setThemeMode,
        userData,
        authorizedToken,
        leaveData,
        userID,
        storeUserIDLocalStorage,
        projectData,
        taskData,
        ticketData,
        searchValue,
        setSearchValue,
        handleSearchChatSubmit,
        searchData,
        fetchClient,
        // selectedChat,
        // setSelectedChat,
        accessChat,
        fetchChat,
        conversations,
        // chats,
        // setChats,
        // getSender,
        // chatname,
        // newMessage,
        // setNewMessage,
        // sendMessage,
        fetchMessages,
        messages,
        setMessages,
        clientData,
        clients,
        attendenceData,
        setChatWithData,
        chatWithData,
        setRefresh,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
