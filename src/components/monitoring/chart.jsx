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

const initialData = [
  { time: "2023-01-01T00:00:00Z", value: 20 },
  { time: "2023-02-04T00:00:00Z", value: 80 },
  { time: "2023-03-05T00:00:00Z", value: 30 },
  { time: "2023-04-01T00:00:00Z", value: 40 },
  { time: "2023-05-06T00:00:00Z", value: 60 },
  { time: "2023-06-01T00:00:00Z", value: 55 },
  { time: "2023-07-01T00:00:00Z", value: 80 },
  { time: "2023-08-30T00:00:00Z", value: 70 },
  { time: "2023-09-11T00:00:00Z", value: 10 },
  { time: "2023-10-01T00:00:00Z", value: 30 },
  { time: "2023-11-04T00:00:00Z", value: 70 },
  { time: "2023-12-21T00:00:00Z", value: 85 },
];

const UPDATE_INTERVAL = 300000;

export default function WaterLevelChart() {
  const [points, setPoints] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => {
        const newArr = [...prev];
        newArr.pop();
        newArr.unshift({
          time: new Date().toISOString(),
          value: Math.floor(Math.random() * 100),
        });
        return newArr;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const data = {
    datasets: [
      {
        data: points.map(p => ({
          x: p.time,
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
        type: "time",
        adapters: {
          date: { locale: ru },
        },
        time: {
          unit: "month",
          displayFormats: {
            month: "LLLL",
          },
        },
        grid: { display: false },
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
