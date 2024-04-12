import React from 'react'

function MessageSelf({msg}) {
  // console.log(msg);
    
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
         <div className='flex justify-end mx-5 my-2 '>
            <div className='dark:bg-[#3B4453] bg-[#D9E7EA]  w-fit px-3 rounded-2xl'>
                <p className='dark:text-white text-xl'>{msg.content}</p>
                <p className='text-end dark:text-white text-xs'>{formatTimestampToHoursAndMinutes(msg.updatedAt)}</p>
            </div>
         </div>
    </>
  )
}

export default MessageSelf
