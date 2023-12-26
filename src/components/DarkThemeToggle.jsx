import React, { useContext } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "../hooks/ThemeContext";
const DarkThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className=" place-items-center dark:bg-stone-600 bg-stone-400 grid w-8 h-8 p-0.5 bg-transparent rounded-md"
    >
      {theme === "dark" ? (
        <FaRegMoon className="text-amber-300 w-3/4" />
      ) : (
        <MdOutlineWbSunny className="text-slate-900 w-3/4" />
      )}
    </button>
  );
};

export default DarkThemeToggle;
