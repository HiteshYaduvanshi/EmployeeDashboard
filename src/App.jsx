import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import Logout from "./pages/Logout";
import Leave from "./pages/Leave";
import TeamPage from "./pages/TeamPage";
import ProjectPage from "./pages/ProjectPage";
import SettingPage from "./pages/SettingPage";
import Register from "./components/Register";
import ErrorPage from "./pages/ErrorPage";
import AddProject from "./components/AddProject";
import AddTask from "./components/AddTask";
import TaskPage from "./pages/TaskPage";
import CalenderPage from "./pages/CalenderPage";
import TicketPage from "./pages/TicketPage";
import ChatPage from "./pages/ChatPage";
import AttendencePage from "./pages/AttendencePage";
import ForgetPassword from "./pages/ForgetPassword";
import WelcomeChat from "./components/WelcomeChat";
import ChatArea from "./components/ChatArea";
import ChatUsers from "./components/ChatUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="" element={<HomePage />} />
            <Route path="attendence" element={<AttendencePage />} />
            <Route path="leaves" element={<Leave />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="task" element={<TaskPage />} />
            <Route path="setting" element={<SettingPage />} />
            <Route path="register" element={<Register />} />
            <Route path="addProject" element={<AddProject />} />
            <Route path="addTask" element={<AddTask />} />
            <Route path="calender" element={<CalenderPage />} />
            <Route path="ticket" element={<TicketPage />} />
            <Route path="chat" element={<ChatPage />}>
              <Route path="" element={<WelcomeChat />} />
              <Route path="chatArea/:_id" element={<ChatArea />} /> 
              <Route path="users" element={<ChatUsers />} />
            </Route>
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
