import React from "react";
import "../App.css";

function Schedule() {
  const scheduleItems = [
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
    { text: "Meeting with manager", time: "10:00 AM", reason: "Discuss on new Project" },
  ];

  return (
    <div className="my-5 w-full h-[320px] overflow-y-scroll custom-scrollbar">
      <ul className="w-full h-96">
        {scheduleItems.map((item, index, array) => (
          <li key={index} className="flex gap-2 justify-between items-start opacity-80">
            <div className="basis-[20%]"><h1 className="text-[12px] md:text-lg mt-1 dark:text-[#96A2B4]">{item.time}</h1></div>
            <div className={`basis-[10%] flex flex-col justify-center items-center`}>
              <span className="w-2 h-2 mt-[9px] rounded-full border-2 border-[#0085db] block"></span>
              <span
                className={`w-[1px] h-[30px] block bg-[#efefef] my-2 ${index === array.length - 1 ? 'hidden' : ''}`}
              ></span>
            </div>
            <div className="basis-[70%]">
              <h1 className="text-center text-sm md:text-lg dark:text-[#96A2B4]">{item.text}</h1>
              {item.reason && <p className="text-center text-sm dark:text-[#96A2B4]">{item.reason}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
