import React from "react";
import Chart from "react-apexcharts";

function RadialBars() {
  
  const seriesData = [44, 55, 67];

  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        radialBar: {
          barWidth: 10,
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: false,
            label: "Total",
            formatter: function (w) {
              const totalValue = seriesData.reduce(
                (acc, value) => acc + value,
                0
              );
              return totalValue;
            },
          },
        },
      },
    },
    labels: ["Project 1", "Project 2", "Project 3"],
    colors: ["#008ffbd9", "#00e396d9", "#feb019cc"],
  };

  return (
    <>
      <div className="dark:text-red-400">
        <Chart
          options={options}
          series={seriesData}
          type="radialBar"
          height={330}
        />
      </div>
    </>
  );
}

export default RadialBars;
