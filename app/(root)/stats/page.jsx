"use client";

import React from "react";
import { Bar, Line, Scatter, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "@/contexts/ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { theme } = useTheme();
  const isLightTheme = theme.includes("light");

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: isLightTheme ? 'black' : 'white'
        }
      },
      title: {
        display: true,
        text: '',
        color: isLightTheme ? 'black' : 'white'
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: '',
          color: isLightTheme ? 'black' : 'white'
        },
        ticks: {
          color: isLightTheme ? 'black' : 'white'
        },
        grid: {
          color: isLightTheme ? '#e0e0e0' : '#333'
        }
      },
      y: {
        title: {
          display: true,
          text: '',
          color: isLightTheme ? 'black' : 'white'
        },
        ticks: {
          color: isLightTheme ? 'black' : 'white'
        },
        grid: {
          color: isLightTheme ? '#e0e0e0' : '#333'
        }
      }
    }
  };

  const scatterData = {
    datasets: [
      {
        label: 'Algorithm 1',
        data: [
          { x: 1.2, y: 90 },
          { x: 1.1, y: 85 },
          { x: 1.3, y: 88 },
          { x: 1.4, y: 92 },
          { x: 1.2, y: 87 },
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: 'Algorithm 2',
        data: [
          { x: 1.5, y: 85 },
          { x: 1.4, y: 80 },
          { x: 1.6, y: 82 },
          { x: 1.5, y: 84 },
          { x: 1.6, y: 83 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: 'Algorithm 3',
        data: [
          { x: 0.8, y: 95 },
          { x: 0.9, y: 93 },
          { x: 0.85, y: 94 },
          { x: 0.9, y: 96 },
          { x: 0.87, y: 95 },
        ],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
      },
    ],
  };

  const lineData = {
    labels: ["Epoch 1", "Epoch 2", "Epoch 3", "Epoch 4", "Epoch 5"],
    datasets: [
      {
        label: 'Algorithm 1',
        data: [90, 85, 88, 92, 87],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: 'Algorithm 2',
        data: [85, 80, 82, 84, 83],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: 'Algorithm 3',
        data: [95, 93, 94, 96, 95],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  const barData = {
    labels: ["Algorithm 1", "Algorithm 2", "Algorithm 3"],
    datasets: [
      {
        label: 'Accuracy (%)',
        data: [90, 82, 95],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Algorithm 1", "Algorithm 2", "Algorithm 3"],
    datasets: [
      {
        data: [90, 82, 95],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)"
        ],
        hoverBackgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)"
        ],
      },
    ],
  };

  return (
    <div className={`p-4 min-h-screen ${isLightTheme ? "bg-gray-100/30 text-black" : "bg-gray-900 text-white"}`}>
      <h1 className="font-extrabold p-10 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-10 pt-6">
        <div className={`${isLightTheme ? "bg-white text-black" : "bg-gray-800 text-white"} shadow-md rounded-3xl p-4`}>
          <Scatter data={scatterData} options={{...chartOptions, title: { ...chartOptions.title, text: 'Algorithm Performance: Speed vs. Accuracy' }}} />
        </div>
        <div className={`${isLightTheme ? "bg-white text-black" : "bg-gray-800 text-white"} shadow-md rounded-3xl p-4`}>
          <Line data={lineData} options={{...chartOptions, title: { ...chartOptions.title, text: 'Training Accuracy over Epochs' }}} />
        </div>
        <div className={`${isLightTheme ? "bg-white text-black" : "bg-gray-800 text-white"} shadow-md rounded-3xl p-4`}>
          <Bar data={barData} options={{...chartOptions, title: { ...chartOptions.title, text: 'Accuracy Comparison' }}} />
        </div>
        <div className={`${isLightTheme ? "bg-white text-black" : "bg-gray-800 text-white"} shadow-md rounded-3xl p-4`}>
          <Pie data={pieData} options={{...chartOptions, title: { ...chartOptions.title, text: 'Accuracy Distribution' }}} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
