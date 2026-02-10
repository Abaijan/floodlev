import React, { useEffect, useState } from "react";
import "./chart.css";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  TimeScale,
  LinearScale,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { ru } from "date-fns/locale";

ChartJS.register(
  LineElement,
  PointElement,
  TimeScale,
  LinearScale,
  Tooltip
);


const UPDATE_INTERVAL = 3000;

export default function WaterLevelChart( { points }) {

 const data = {
  datasets: [
    {
      data: points.map(p => ({
        x: p.x, // <-- теперь число
        y: p.value,
      })),
      borderColor: "#2BF8D6",
      borderWidth: 5,
      tension: 0.45,
      pointRadius: 0,
    },
  ],
};


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: ctx => `Уровень: ${ctx.parsed.y} м³`,
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        adapters: {
          date: { locale: ru },
        },
         grid: { display: false },
  title: {
    display: true,
    text: "Время (порядковые числа)",
  },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: v => `${v} м³`,
        },
        grid: {
          color: "#EEEEEE",
        },
      },
    },
  };

  return (
    <div className="container">
      <h3 className="chart-title">
        Уровень воды (обновление каждые 5 минут)
      </h3>
      <div className="chart-box">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
