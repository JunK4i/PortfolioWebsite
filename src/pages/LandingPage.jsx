import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../index.css";
function LandingPage() {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const mainHeight = window.innerHeight - navBarHeight - 10;
  useEffect(() => {
    const navBar = document.querySelector("nav");
    setNavBarHeight(navBar.clientHeight);
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
      <nav>
        <NavBar />
      </nav>
      <div
        style={{
          height: `${mainHeight}px`,
          display: "flex",
        }}
      >
        <section className="text-slate-900 dark:text-gray-200 flex flex-col items-center justify-start flex-grow mt-40">
          <h1 className=" mb-2 text-4xl font-extrabold text-center">
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
        <ol className="border-s border-slate-500 dark:border-gray-700 relative">
          <li className="hide ms-6 mb-10">
            <span className="bg-amber-400 -start-4 absolute flex items-center justify-center w-10 h-10 rounded-full">
              <FaCalendar className="w-3/4 text-white" />
            </span>
            <h3 className="ms-9 dark:text-white flex items-center pt-2 mb-4 text-lg font-semibold text-gray-900">
              Flowbite Application UI v2.0.0{" "}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="ms-9 dark:text-gray-500 block mb-2 text-sm font-normal leading-none text-gray-400">
              Released on January 13th, 2022
            </time>
            <p className="ms-9 dark:text-gray-400 mb-4 text-base font-normal text-gray-500">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              className="ms-9 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"
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

export default LandingPage;
