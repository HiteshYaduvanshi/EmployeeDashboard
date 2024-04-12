import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaCirclePlus } from "react-icons/fa6";
import { useAuth } from "../Store/Auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const localizer = momentLocalizer(moment);

const MyCalender = () => {
  const { themeMode } = useAuth();
  const [isTooltipAddVisible, setTooltipAddVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    toast.success("Event added successfully",{
      theme: "colored"
    })
    setNewEvent({
      title: "",
      start: new Date(),
      end: new Date(),
    });
  };

  const handleAddIconClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const today = moment().startOf('day');

  const isDateOutsideCurrentMonth = (date) => {
    const isOutside = !moment(date).isSame(moment(), 'month');
    return isOutside;
  };
  
  const dayStyleGetter = (date) => {
    const isToday = moment(date).isSame(today, 'day');

    if (isToday) {
      return {
        style: {
          backgroundColor: themeMode === 'dark' ? '#003554' : '',
        },
      };
    }

    if (isDateOutsideCurrentMonth(date)) {
      return {
        style: {
          color: 'red',
        },
      };
    }

    return {};
  };

  return (
    <>
      <div className="w-full bg-[#DAE1F3] dark:bg-[#020910] h-16 rounded-t-md flex justify-between items-center px-5">
        <h1 className="font-medium dark:text-[#96A2B4]">Calendar</h1>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div
              onMouseOver={() => setTooltipAddVisible(true)}
              onMouseOut={() => setTooltipAddVisible(false)}
              onClick={handleAddIconClick}
            >
              <FaCirclePlus className="text-4xl shadow-md rounded-full text-[#3d4eb2] hover:text-[#4758B8]" />
            </div>
            {isTooltipAddVisible && (
              <div className="absolute bg-gray-700 text-white right-5 w-28 text-center text-sm px-2 py-1 mt-2 rounded whitespace-no-wrap">
                ADD EVENTS
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 m-5">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, color: themeMode === 'dark' ? '#96A2B4' : '' }}
          dayPropGetter={dayStyleGetter}
        />
      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <ToastContainer/>
          <div className="bg-white dark:bg-[#232B3E] p-8 rounded-md w-1/2">
            <form className="max-w-full mx-auto" onSubmit={handleAddEvent}>
              <div className="relative z-0 w-full mb-5 group">
                <label className="block mb-3 dark:text-white">Tittle</label>
                <input
                  type="text"
                  name="title"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="z-0 w-full mb-5 group">
                <label className="dark:text-white">Start Date:</label>
                <input
                  type="datetime-local"
                  name="start"
                  id="floating_email"
                  className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="z-0 w-full mb-5 group">
                <label htmlFor="floating_email" className="dark:text-white">
                  End Date:
                </label>
                <input
                  type="datetime-local"
                  name="end"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseDialog}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCalender;