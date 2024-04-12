import React from "react";
import Chart from "react-apexcharts";
import { useAuth } from "../Store/Auth";

function StackedColumnCharts() {
  const { themeMode } = useAuth();
  const options = {
    chart: {
      type: "bar",
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%", 
      },
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday",
      ],
      labels: {
        style: {
          colors: themeMode == "dark" ? "#96A2B4" : "",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
    colors: ["#3652AD", "#B6BBC4"],
    yaxis: {
      tickAmount: 10,
      max: 100,
      labels: {
        style: {
          colors: themeMode == "dark" ? "#96A2B4" : "",
        },
      },
    },
  };

  const series = [
    {
      name: "Working Hours",
      data: ["83%", 40, 60, 30, 80, 50],
    },
    {
      name: "Break Hours",
      data: ["17%", 60, 40, 70, 20, 50],
    },
  ];
  return (
    <>
      <Chart options={options} series={series} type="bar" height={350} />
    </>
  );
}

export default StackedColumnCharts;
