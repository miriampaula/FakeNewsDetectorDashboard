"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    setIsDark(theme.includes("dark"));
  }, [theme]);

  const toggleCheckbox = () => {
    setIsDark(!isDark);
    changeTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      className={`w-10/12 lg:bg-transparent lg:shadow-transparent max-w-[450px] mx-auto ${
        isDark ? "bg-black/40" : "bg-white/30"
      }rounded-3xl shadow-md`}
    >
      {/*  <div
        className={`text-center   ${
          theme.includes("light") && "text-gray-600"
        } ${theme.includes("dark") && "text-gray-300"}`}
      >
        Theme
      </div>
      */}

      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center ">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isDark}
              onChange={toggleCheckbox}
            />
            <div
              className={`w-[70px] h-[35px] ${
                isDark ? "bg-black/40" : "bg-white/30"
              }  rounded-full shadow-inner flex items-center justify-between px-1`}
            ></div>
            <div
              className={`transform transition-all duration-300 ease-in-out w-[35px] h-[35px] absolute top-0 ${
                isDark
                  ? "translate-x-[35px] border-gray-700 border bg-black/80"
                  : "translate-x-0 bg-white"
              }  rounded-full shadow flex items-center justify-center`}
            >
              {isDark ? (
                <FiMoon className="text-gray-500" />
              ) : (
                <FiSun className="text-yellow-400" />
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
