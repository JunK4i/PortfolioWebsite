import { useNavigate } from "react-router-dom";
import useToggle from "../hooks/useToggle.jsx";
import { DarkThemeToggle, Button, Timeline } from "flowbite-react";

function NavBar() {
  const [isCollapsed, toggleIsCollapsed] = useToggle(true);
  const navigate = useNavigate();
  return (
    <div className="md:items-center md:grid md:grid-cols-3 text-slate-900 dark:text-gray-400 flex justify-between max-w-screen-xl p-4 mx-auto font-mono text-2xl font-extrabold">
      <div
        className="dark:text-amber-300 hover:cursor-pointer ml-1 text-4xl"
        onClick={() => {
          navigate("/");
        }}
      >
        Jun Kai.
      </div>
      <div
        className={`${
          isCollapsed && "hidden"
        } md:block md:w-auto  md:static w-full flex justify-center absolute top-16 right-0 left-0 p-3`}
      >
        <ul className="md:p-0 border-slate-900 md:flex-row md:space-x-8md:mt-0 md:border-0 dark:border-gray-700 dark:text-gray-400 text-slate-900 flex flex-col justify-center w-full gap-4 p-3 border rounded-lg">
          <li>
            <div
              className="group hover:dark:text-yellow-300 hover:cursor-pointer transition duration-150"
              onClick={() => navigate("/projectgallery")}
            >
              Projects
              <span className="block max-w-0 md:pt-1 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-gray-400 group-hover:h-1 bg-slate-900"></span>
            </div>
          </li>
          <li>
            <div
              className="group hover:dark:text-yellow-300 hover:cursor-pointer transition duration-150"
              onClick={() => navigate("/experience")}
            >
              Experience
              <span className="block max-w-0 md:pt-1 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-gray-400 group-hover:h-1  bg-slate-900"></span>
            </div>
          </li>
          <li>
            <div
              className="group hover:dark:text-yellow-300 hover:cursor-pointer transition duration-150"
              onClick={() => navigate("/contact")}
            >
              Contact
              <span className="block max-w-0 md:pt-1 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-gray-400 group-hover:h-1 bg-slate-900"></span>
            </div>
          </li>
        </ul>
      </div>
      <div id="right-items" className="flex justify-end mr-3">
        <DarkThemeToggle className="dark:text-yellow-300" />
        <button
          type="button"
          className=" md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dar:focus:ring-gray-600 inline-flex justify-center w-10 h-10 p-2 ml-1 text-sm text-gray-500 rounded-lg"
          onClick={toggleIsCollapsed}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
