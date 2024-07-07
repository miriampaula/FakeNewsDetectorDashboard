"use client"
import React from "react";

const Article = ({ theme, title, content, onClick, onMarkTrue, onMarkFalse }) => {
  const getShortContent = (text) => {
    const words = text.split(" ");
    if (words.length > 50) {
      return words.slice(0, 25).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className={`w-[300px] h-[350px] shadow-md rounded-3xl ${theme.includes("light") ? "bg-white text-black" : "bg-gray-800 text-gray-100"} flex flex-col`}>
      <div className="font-extrabold mb-2 p-4 rounded-t-3xl ">{title}</div>
      <div className="flex-grow mb-2 px-4 overflow-hidden">
        {getShortContent(content)}
      </div>
      <div className="text-blue-500 hover:cursor-pointer px-4" onClick={onClick}>
        See more
        </div>
      <div className={`flex justify-between mt-2 p-4 border-t ${theme.includes("light") ? "border-gray-200" : "border-gray-800"}`}>
        <button className={` p-3 w-28 text-center border  rounded-full ${theme.includes("light") ? "border-green-500 text-green-500 font-bold" : "border-green-300 text-green-300 font-bold"}`} onClick={(e) => { e.stopPropagation(); onMarkTrue(); }}>True</button>
        <button className={` p-3 w-28 text-center  border rounded-full ${theme.includes("light") ? "border-red-500 text-red-500 font-bold" : "border-red-300 text-red-300 font-bold"}`}  onClick={(e) => { e.stopPropagation(); onMarkFalse(); }}>False</button>
      </div>
    </div>
  );
};

export default Article;
