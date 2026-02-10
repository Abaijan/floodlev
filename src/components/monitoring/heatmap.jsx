import React, { useEffect, useMemo, useState } from "react";
import Chart from "react-apexcharts";
import './heatmap.css'
const UPDATE_INTERVAL = 3000;
const MAX_VALUE = 100;
const MIN_VALUE = 0;

const getNextValue = (prev) => {
    const delta = Math.floor(Math.random() * 21) - 10; // -10 .. +10
    return Math.max(MIN_VALUE, Math.min(MAX_VALUE, prev + delta));
};

const generateInitialHistory = () => {
    const res = [];
    let value = 50;

    // последние 3 дня по часам
    for (let d = 2; d >= 0; d--) {
        for (let h = 0; h < 24; h++) {
            value = getNextValue(value);

            res.push({
                time: new Date(
                    Date.now() - d * 24 * 60 * 60 * 1000 + h * 60 * 60 * 1000
                ).toISOString(),
                value,
            });
        }
    }

    return res;
};

const WaterLevelHeatmap = () => {
    const [historyPoints, setHistoryPoints] = useState(generateInitialHistory);

    useEffect(() => {
        const interval = setInterval(() => {
            setHistoryPoints(prev => {
                const lastValue = prev.at(-1)?.value ?? 50;

                return [
                    ...prev,
                    {
                        time: new Date().toISOString(),
                        value: getNextValue(lastValue),
                    },
                ];
            });
        }, UPDATE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const series = useMemo(() => {
        const map = {};

        historyPoints.forEach(({ time, value }) => {
            const date = new Date(time);
            const day = date.toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
            });
            const hour = date.getHours().toString().padStart(2, "0");

            if (!map[day]) map[day] = {};
            if (!map[day][hour]) map[day][hour] = [];

            map[day][hour].push(value);
        });

        return Object.entries(map).map(([day, hours]) => ({
            name: day,
            data: Array.from({ length: 24 }, (_, h) => {
                const hour = h.toString().padStart(2, "0");
                const values = hours[hour] || [];
                const avg =
                    values.length > 0
                        ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
                        : 0;

                return { x: hour, y: avg };
            }),
        }));
    }, [historyPoints]);

    const options = {
        chart: {
            type: "heatmap",
            toolbar: { show: false },
            animations: {
                enabled: true,
                easing: "linear",
                speed: 300,
            },
        },
        dataLabels: { enabled: false },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.6,
                colorScale: {
                    ranges: [
                        { from: 0, to: 30, color: "#2BF8D6", name: "Низкий" },
                        { from: 31, to: 60, color: "#FFD166", name: "Средний" },
                        { from: 61, to: 80, color: "#EF8A62", name: "Высокий" },
                        { from: 81, to: 100, color: "#EF476F", name: "Критический" },
                    ],
                },
            },
        },
        xaxis: { title: { text: "Часы" } },
        yaxis: { title: { text: "Дни" } },
        tooltip: {
            y: {
                formatter: val => `${val} м³`,
            },
        },
    };

    return (
        <div style={{ height: 550 }}>
            <div className="container " style={{minHeight: '400px'}}>

                <h3 className="chart-title">
                    Heatmap уровня воды по времени
                </h3>
                <Chart options={options} series={series} type="heatmap" height="100%" />
            </div>
        </div>
    );
};

export default WaterLevelHeatmap;
