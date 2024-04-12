import React from "react";

function HomeCard({ heading, percent, data, icon, colorFrom, colorTo }) {
  return (
    <>
      <div
        className={`p-6 bg-gradient-to-r from-${colorFrom} to-${colorTo} basis-[48%] xl:basis-[23%] rounded-md`}
        style={{
          backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
        }}
      >
        <h6 className="text-white text-md font-medium capitalize">{heading}</h6>
        <h4 className="flex justify-between items-center my-2">
          <span className="text-white text-2xl font-medium">{data}</span>{" "}
          <span className="text-3xl">{icon}</span>
        </h4>
        <p className="capitalize text-white text-md">
          {percent}% higher than last month
        </p>
      </div>
    </>
  );
}

export default HomeCard;
