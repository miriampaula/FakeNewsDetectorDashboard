"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { useTheme } from "@/contexts/ThemeContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const Page = () => {
  const { theme } = useTheme();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);
  const [modelResults, setModelResults] = useState([]);
  const titleRef = useRef(null);
  const resultSectionRef = useRef(null);

  const handleCheck = async () => {
    setResult(null);
    setModelResults([]);

    try {
      const response = await fetch("http://localhost:8080/truth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();
      const certainty = result.certainty.toString().slice(2, 4); // Get first two digits after the decimal point
      const value = result.value; // Get the result value
      setResult({ answer: value, certainty: certainty });

      // Simulate model results
      const simulatedResults = [
        {
          model: "Model A",
          time: 0.2,
          accuracy: (Math.random() * 20 + 80).toFixed(2),
          value: Math.random() > 0.5 ? "True" : "False",
        },
        {
          model: "Model B",
          time: Math.random() * 1 + 1,
          accuracy: (Math.random() * 20 + 80).toFixed(2),
          value: Math.random() > 0.5 ? "True" : "False",
        },
        {
          model: "Model C",
          time: Math.random() * 1 + 1,
          accuracy: (Math.random() * 20 + 80).toFixed(2),
          value: Math.random() > 0.5 ? "True" : "False",
        },
        {
          model: "Model D",
          time: Math.random() * 1 + 1,
          accuracy: (Math.random() * 20 + 80).toFixed(2),
          value: Math.random() > 0.5 ? "True" : "False",
        },
      ];

      setModelResults(simulatedResults);

      // Scroll to the results section
      setTimeout(() => {
        resultSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 200); // Delay to ensure the results are rendered before scrolling

      // Start the animations
      setTimeout(() => {
        simulatedResults.forEach((model, index) => {
          const bar = document.getElementById(`bar-${index}`);
          if (bar) {
            bar.style.height = "100%";
            bar.style.transition = `height ${model.time}s linear`;
          }
        });
      }, 100); // Delay to ensure bars are rendered before animation starts
    } catch (error) {
      console.error("Error fetching accuracy:", error);
      setResult({ answer: "Error", certainty: 0 }); // Default to error if there's an error
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [title]);

  // Determine the model with the highest accuracy
  const maxAccuracyModel = modelResults.reduce(
    (max, model) => {
      return parseFloat(model.accuracy) > parseFloat(max.accuracy)
        ? model
        : max;
    },
    { accuracy: 0 }
  );

  return (
    <div
      className={`relative min-h-screen ${
        theme.includes("light")
          ? "bg-gray-100/30 text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-extrabold p-9 text-center">Add New Article</h1>
        <form
          className={`shadow-md ${
            theme.includes("light")
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          } rounded-3xl w-1/2 max-w-[1500px] grid mx-auto`}
        >
          <div className="p-8 text-lg grid">
            <textarea
              ref={titleRef}
              placeholder="Title..."
              type="text"
              value={title}
              onChange={handleTitleChange}
              className={`p-2 rounded-lg ${
                theme.includes("light")
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              } focus:outline-none focus:ring focus:ring-transparent resize-none overflow-hidden`}
              rows={1}
            />
          </div>
          <div className="px-8">
            <textarea
              placeholder="Content..."
              className={`w-full h-64 focus:outline-none focus:ring focus:ring-transparent p-2 rounded-lg ${
                theme.includes("light")
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              }`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="spinningBorder m-10 rounded-3xl mx-auto grid w-32 h-10 relative">
            <button
              type="button"
              onClick={handleCheck}
              className={`${
                theme.includes("light")
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              } absolute w-full h-full flex justify-center items-center gap-3 text-center mx-auto font-extrabold rounded-3xl`}
            >
              <IoSparklesSharp /> Check
            </button>
          </div>
        </form>
      </div>

      <div
        id="results-section"
        ref={resultSectionRef}
        className="w-full mt-10 p-10"
      >
        {result && (
          <>
            <div className="text-center">
              <h2
                className={`text-2xl font-bold ${
                  result.answer === true ? "text-green-500" : "text-red-500"
                }`}
              >
                {String(result.answer).toLocaleUpperCase()}
              </h2>
              <p className="text-lg">Certainty: {result.certainty}%</p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold text-center mb-4">
                Model Comparison
              </h3>
              <div className="flex relative space-x-4 justify-center">
                {modelResults.map((model, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center`}
                  >
                    <span className={`mb-2  ${
                      model.model === maxAccuracyModel.model
                        ? "text-green-600"
                        : ""
                    }`}>{model.model}</span>
                    <div className="relative w-12 mx-14 bg-gray-200 rounded h-64 overflow-hidden">
                      <div
                        id={`bar-${index}`}
                        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t ${
                          theme.includes("light")
                            ? "from-blue-500 to-purple-500"
                            : "from-blue-800 to-purple-800"
                        } rounded`}
                        style={{ height: "0%" }}
                      ></div>
                    </div>
                    <span className="mt-2">{model.time.toFixed(2)}s</span>
                    <p>{model.accuracy}%</p>
                    <p
                      className={`${
                        model.value === "True"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {model.value}
                    </p>
                  </div>
                ))}
                <div className="absolute bottom-7 left-20 font-bold">
                  <div className="pl-4">Speed:</div>
                  <div>Certainty:</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
