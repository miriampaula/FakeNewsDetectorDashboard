import { Gradient } from "@/components/Gradient";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { FiCheckCircle, FiAlertCircle, FiXCircle } from "react-icons/fi";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AnswerModal = ({ theme, show, onClose, value, accuracy }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (show) {
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [show]);

  useEffect(() => {
    if (!show) {
      setIsLoading(true);
    }
  }, [show]);

  if (!show) return null;

  const getResultText = () => {
    if (Number(accuracy) < 60) return "We're uncertain";
    return value === true ? "True News" : "False News";
  };

  const getResultIcon = () => {
    if (Number(accuracy) < 60)
      return <FiAlertCircle className="text-white" size={80} />;
    return value === true ? (
      <FiCheckCircle className="text-white" size={80} />
    ) : (
      <FiXCircle className="text-white" size={80} />
    );
  };

  const getCardBgColor = () => {
    if (Number(accuracy) < 60) return "bg-yellow-500";
    return value === true ? "bg-green-500" : "bg-red-500";
  };

  const data = {
    labels: ["Accuracy"],
    datasets: [
      {
        data: [accuracy, 100 - accuracy],
        backgroundColor: ["#76b75b", "#ebebeb"],
        hoverBackgroundColor: ["#76b75b", "#ebebeb"],
        cutout: "85%", // Adjust cutout percentage for thinner chart
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative w-auto h-auto mx-auto rounded-3xl bg-white shadow-lg z-20">
        <canvas
          id="gradient-canvas"
          className="absolute rounded-3xl top-0 left-0 w-full h-full"
          data-transition-in
        ></canvas>
        <div className="relative text-white z-30 flex flex-col items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center p-20">
              <h2 className="text-lg mb-10 text-center">
                Checking for Accuracy...
              </h2>
              <Puff
                color="white"
                className="text-white"
                height="100"
                width="100"
                ariaLabel="loading"
              />
            </div>
          ) : (
            <div
              className={`p-10  rounded-3xl ${getCardBgColor()} flex items-center gap-4`}
            >
              <div className="w-1/4">{getResultIcon()}</div>
              <div className="flex  w-3/4 pl-10 flex-col">
                <div className="text-white text-xl font-bold">
                  {getResultText()}
                </div>
                <div className="flex justify-start  gap-2 place-items-center">
                  <div className="text-white text-xs">certainty:</div>
                  {/*   <div className="mt-2 w-[60px] h-[60px] relative">
                    <Doughnut data={data} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs font-bold text-white">
                        {accuracy}%
                      </div>
                    </div>
                  </div>
                  */}
                   <div className="text-sm font-bold text-white">
                        {accuracy}%
                      </div>
                
                </div>
              </div>
            </div>
          )}
          <button
            className="absolute text-center grid place-content-center h-8 w-8 top-1 right-1 text-xl text-black rounded-full bg-white hover:bg-gray-100 transition duration-200"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
