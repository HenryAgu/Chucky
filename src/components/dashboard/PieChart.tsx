"use client"
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart: React.FC = () => {
  // Series for the donut chart
  const series = [65, 35]; // Percentage of Current customers vs New customers

  // Chart options
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Current customers", "New customers"],
    colors: ["#775DD0", "#00E396"], // Purple for current, Green for new
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    legend: {
      position: "bottom",
      markers: {
        customHTML: function () {
          return '<div style="width:12px;height:12px;border-radius:50%;background-color:currentColor;"></div>';
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: "bold",
              formatter: () => "82.3%", // Central value
            },
          },
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val.toFixed(1)}%`,
      },
    },
  };

  return (
    <div className="flex items-center justify-center font-[inter]">
      {/* Render the donut chart */}
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={300}
      />

      {/* Additional Metrics */}
      <div className="mt-8 flex flex-col gap-y-5">
        {/* Daily Customers */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#775DD0]/10 flex items-center justify-center">
            <span className="text-[#775DD0] font-[inter] font-bold text-lg">+18%</span>
          </div>
          <div>
            <p className="font-bold">+18%</p>
            <p className="text-sm text-gray-500 font-[inter]">Daily customers</p>
          </div>
        </div>

        {/* Weekly New Customers */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#00E396]/10 flex items-center justify-center">
            <span className="text-[#00E396] font-bold text-lg font-[inter]">+14%</span>
          </div>
          <div>
            <p className="font-bold">+14%</p>
            <p className="text-sm text-gray-500 font-[inter]">Weekly new customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
