// components/Modal.js
import React from "react";

const Modal = ({ theme, title, content, onClose, onMarkTrue, onMarkFalse }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${theme.includes("light") ? "bg-white text-black" : "bg-gray-900 text-white"} relative rounded-3xl overflow-hidden max-w-lg max-h-full p-4 flex flex-col`}>
        <button className="absolute top-4 right-4" onClick={onClose}>Close</button>
        <h2 className="text-2xl font-bold mb-4 py-8 px-6 pt-10 ">{title}</h2>
        <div className="overflow-auto max-h-96 mb-4  px-6  flex-grow">
          <p>{content}</p>
        </div>
        <div className={`flex justify-between mt-2 p-6 `}>
          <button  className={` p-4 w-32 text-center border  rounded-full ${theme.includes("light") ? "border-green-500 text-green-500 font-bold" : "border-green-300 text-green-300 font-bold"}`} onClick={onMarkTrue}>True</button>
          <button className={` p-4 w-32 text-center  border rounded-full ${theme.includes("light") ? "border-red-500 text-red-500 font-bold" : "border-red-300 text-red-300 font-bold"}`}  onClick={onMarkFalse}>False</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
