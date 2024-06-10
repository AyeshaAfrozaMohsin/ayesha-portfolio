"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  // Fetch the theme from localStorage only once on initial render
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else if (theme === "light") {
      setDarkMode(false);
    }
  }, []); // Add empty dependency array to run only once

  // Apply the theme to the document whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1 transition-colors duration-300"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className={`text-white`} size={18} />
      <div
        className={`absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
      <BsSunFill className="ml-auto text-yellow-200" size={20} />
    </div>
  );
}
