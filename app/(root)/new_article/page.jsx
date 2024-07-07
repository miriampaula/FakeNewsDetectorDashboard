"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { useTheme } from "@/contexts/ThemeContext";
import AnswerModal from "@/components/AnswerModal";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Page = () => {
  const { theme } = useTheme();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [value, setValue] = useState("");
  const titleRef = useRef(null);

  const handleCheck = async () => {
    setShowModal(true);
    setAccuracy(0);
    setValue("");

    try {
      const response = await fetch('http://localhost:5000/truth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      });

      const result = await response.json();
      alert(JSON.stringify(result));
      const certainty = result.certainty.toString().slice(2, 4); // Get first two digits after the decimal point
      setAccuracy(certainty);
      setValue(result.value);
    } catch (error) {
      console.error('Error fetching accuracy:', error);
      setAccuracy(0); // Default to 0 if there's an error
      setValue("Error");
    }
  };

  const handleSubmit = (e, status) => {
    e.preventDefault();
    console.log({ title, content, status });
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

  return (
    <div
      className={`relative min-h-screen ${
        theme.includes("light")
          ? "bg-gray-100/30 text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <h1 className="font-extrabold p-10 text-center">Add New Article</h1>
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
          <div className="spinningBorder rounded-3xl mx-auto grid w-32 h-10 relative">
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
          <div className="flex justify-evenly px-10 space-x-4 py-8">
            <button
              className={`p-4 w-40 text-center rounded-full ${
                theme.includes("light")
                  ? "bg-green-300 text-white font-bold"
                  : "bg-green-800 text-white font-bold"
              }`}
              type="button"
              onClick={(e) => handleSubmit(e, "true")}
            >
              Label as True
            </button>
            <button
              className={`p-4 w-40 text-center rounded-full ${
                theme.includes("light")
                  ? "bg-red-300 text-white font-bold"
                  : "bg-red-800 text-white font-bold"
              }`}
              type="button"
              onClick={(e) => handleSubmit(e, "false")}
            >
              Label as False
            </button>
          </div>
        </form>
      </div>

      <AnswerModal theme={theme} show={showModal} onClose={() => setShowModal(false)} accuracy={accuracy} value={value} />
    </div>
  );
};

export default Page;
