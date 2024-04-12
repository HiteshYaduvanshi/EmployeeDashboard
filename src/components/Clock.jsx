import React, { useState, useEffect } from 'react';

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDateWithDay = dateTime.toLocaleDateString(undefined, options);

  return (
    <div className='py-4 flex flex-col items-center'>
      <p className='text-white text-4xl'>{formattedTime}</p>
      <p className='text-white text-lg'>{formattedDateWithDay}</p>
    </div>
  );
}

export default Clock;
