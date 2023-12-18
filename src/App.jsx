import { DarkThemeToggle, Button, Timeline } from "flowbite-react";
import useToggle from "./hooks/useToggle";
import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [isCollapsed, toggleIsCollapsed] = useToggle(true);

  const [navBarHeight, setNavBarHeight] = useState(0);
  const mainHeight = window.innerHeight - navBarHeight - 10;

  useEffect(() => {
    const navBar = document.querySelector("nav");
    setNavBarHeight(navBar.clientHeight);

    const eyeContainer = document.querySelector(".eye-container");

    const angle = (cx, cy, ex, ey) => {
      const dy = ey - cy;
      const dx = ex - cx;
      let theta = Math.atan2(dy, dx);
      theta *= 180 / Math.PI;
      return theta;
    };
    const boundingBox = eyeContainer.getBoundingClientRect();
    const centerX = boundingBox.left + boundingBox.width / 2;
    const centerY = boundingBox.top + boundingBox.height / 2;
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angleDeg = angle(mouseX, mouseY, centerX, centerY);
    };

    eyeContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      eyeContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // run everytime the element visibility changes
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {});

  // observe all elements with the className "hidden"
  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach((element) => observer.observe(element));

  return (
    <main className="max-w-screen bg-orange-50 dark:bg-stone-900">
      <nav className="border-gray-200">
        <div className="max-w-screen-xl flex justify-between md:items-center md:grid md:grid-cols-3 mx-auto p-4 text-slate-900 font-extrabold  dark:text-gray-400 font-mono text-2xl">
          <a href="#" className="text-4xl dark:text-amber-300 ml-1">
            Jun Kai.
          </a>
          <div
            className={`${
              isCollapsed && "hidden"
            } md:block md:w-auto  md:static w-full flex justify-center absolute top-16 right-0 left-0 p-3`}
          >
            <ul className="w-full flex flex-col justify-center md:p-0 border border-slate-900 p-3 rounded-lg  md:flex-row md:space-x-8md:mt-0 md:border-0 dark:border-gray-700 dark:text-gray-400 text-slate-900 gap-4 ">
              <li>
                <a
                  href="#"
                  className="group transition duration-150 hover:dark:text-yellow-300"
                >
                  Projects
                  <span className="block max-w-0 md:pt-1 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-gray-400 group-hover:h-1 bg-slate-900"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group transition duration-150 hover:dark:text-yellow-300"
                >
                  Experience
                  <span className="block max-w-0 md:pt-1 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-gray-400 group-hover:h-1  bg-slate-900"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group transition duration-150 hover:dark:text-yellow-300"
                >
                  Contact
                  <span className="block max-w-0 md:pt-1 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-gray-400 group-hover:h-1 bg-slate-900"></span>
                </a>
              </li>
            </ul>
          </div>
          <div id="right-items" className="flex  justify-end mr-3">
            <DarkThemeToggle className="dark:text-yellow-300" />
            <button
              type="button"
              className="  inline-flex  ml-1 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dar:focus:ring-gray-600"
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
      </nav>
      <div
        style={{
          height: `${mainHeight}px`,
          display: "flex",
        }}
      >
        <section className="flex flex-grow flex-col justify-center items-center text-slate-900 dark:text-gray-200">
          <div className="eye-container">
            <div id="eye" className="eye"></div>
          </div>
          <div className="eye-container">
            <div id="eye" className="eye"></div>
          </div>
          <h1 className=" text-center font-extrabold text-4xl mb-2">
            hey, welcome to my portfolio website.
          </h1>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
              width: "350px",
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
            }}
            className="text-xl"
            sequence={[
              `i'm Jun Kai, a Y4 NTU CS student.\n\n i specialise in software engineering, A.I. and cyber security.\n\ni'm passionate about making a difference.`,
              1000,
              "",
            ]}
            speed={80}
            repeat={Infinity}
            omitDeletionAnimation={true}
          />
        </section>
      </div>
      <section className="h-screen p-5">
        <ol className="relative border-s border-slate-500 dark:border-gray-700">
          <li className="hide mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-amber-400 rounded-full -start-4 ">
              <FaCalendar className="text-white w-3/4" />
            </span>
            <h3 className="flex items-center ms-9 mb-4 pt-2 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Application UI v2.0.0{" "}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="block ms-9 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 ms-9 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              className="ms-9 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download ZIP
            </a>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default App;
