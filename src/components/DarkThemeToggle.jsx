import React, { useContext } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { ThemeContext } from "../hooks/ThemeContext";
const DarkThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="w-76 bg-red-500">
      {theme === "dark" ? (
        <FaRegMoon className="w-3/4 text-white" />
      ) : (
        <FaRegSun className="w-3/4 text-white" />
      )}
    </button>
  );
};

export default DarkThemeToggle;
