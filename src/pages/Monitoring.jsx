import React, { useState, useEffect } from "react";
import Filters from '../components/monitoring/filters';
import Cards from '../components/monitoring/cards';
import WaterLevelChart from '../components/monitoring/chart';
import WaterLevelHeatmap from '../components/monitoring/heatmap';

const UPDATE_INTERVAL = 3000;

const initialData = [
  { x: 1, value: 20 },
  { x: 2, value: 80 },
  { x: 3, value: 30 },
  { x: 4, value: 40 },
  { x: 5, value: 60 },
  { x: 6, value: 55 },
  { x: 7, value: 80 },
  { x: 8, value: 70 },
];

export const Monitoring = () => {
  const [points, setPoints] = useState(initialData);

  const getNextValue = (prevValue) => {
    const delta = Math.floor(Math.random() * 21) - 10; // -10..+10
    const next = prevValue + delta;
    return Math.max(0, Math.min(100, next));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => {
        const lastPoint = prev[prev.length - 1];
        const newX = lastPoint.x + 1; // просто увеличиваем число

        const newPoint = {
          x: newX,
          value: getNextValue(lastPoint.value),
        };

        // оставляем только последние 6 точек
        const newPoints = [...prev, newPoint];
        return newPoints.slice(-6);
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='monitoring-page'>
      <Filters/>
      <Cards/>
      <WaterLevelChart points={points}/>
      <WaterLevelHeatmap />
    </div>
  )
}
