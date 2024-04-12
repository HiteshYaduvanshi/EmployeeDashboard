import React, { useEffect, useState } from "react";
import Clock from "./Clock";

function WeatherComponent() {
  const [location, setLocation] = useState("gurugram");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    try {
      const apiKey = "ba3a097fe8393151dd2e9d023b2a4c48";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } else {
        console.error("Error fetching weather data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="bg-[#033F61]">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-white text-2xl">{weatherData.name}</h2>
          {weatherData && (
            <div className="flex justify-between items-center my-4">
              <p className="text-xl text-white flex items-center gap-2">{weatherData.main.temp} °C</p>
              <p className="text-xl text-white capitalize">{weatherData.weather[0].description}</p>
            </div>
          )}
          <div className="w-full border-t border-[#EEEEEE] opacity-20"></div>
          <div className="flex justify-between mt-4">
            <div className="w-full">
              <p className="text-white flex justify-between">Humidity: <span>{weatherData.main.humidity}%</span></p>
              <p className="text-white flex justify-between my-2">Pressure: <span>{weatherData.main.pressure} hPa</span></p>
              <p className="text-white flex justify-between">Wind Speed: <span>{weatherData.wind.speed} m/s</span> </p>
            </div>
          </div>
          <div className="border border-[#eeeeee] opacity-70 my-4">
            <Clock />
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherComponent;