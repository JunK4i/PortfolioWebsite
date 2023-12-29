import { useEffect, useState, useRef } from "react";
import { FaCalendar } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../index.css";
function LandingPage() {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const mainHeight = window.innerHeight - navBarHeight - 10;
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const navBar = document.querySelector("nav");
    setNavBarHeight(navBar.clientHeight);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      if (section === "experience" && experienceRef.current) {
        experienceRef.current.scrollIntoView();
      } else if (section === "contact" && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const formatDescription = (description) => {
    return description.split("\n\n").map((paragraph, paraIndex) => {
      const lines = paragraph.split("\n").map((line, lineIndex) => {
        return <span key={lineIndex}>{line}</span>;
      });
      return (
        <p
          key={paraIndex}
          className="ms-9 dark:text-gray-400 mb-4 text-base font-normal text-gray-500"
        >
          {lines.reduce(
            (acc, line) =>
              acc === null
                ? [line]
                : [...acc, <br key={`br-${paraIndex}-${line.key}`} />, line],
            null
          )}
        </p>
      );
    });
  };

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
        <NavBar experienceRef={experienceRef} contactRef={contactRef} />
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
              paddingTop: "1rem",
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
      <section ref={experienceRef} className="h-min-screen p-5">
        <ol className="border-s border-slate-500 dark:border-gray-700 relative">
          <li className="hide ms-6 mb-10">
            <span className="bg-amber-400 -start-4 absolute flex items-center justify-center w-10 h-10 rounded-full">
              <img
                src="/experiences/MHA.jpg"
                className="object-cover p-1 rounded-full"
              />
            </span>
            <h3 className="ms-9 dark:text-white flex items-center pt-2 mb-4 text-lg font-semibold text-gray-900">
              Full-stack Developer{" "}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="ms-9 dark:text-gray-500 block mb-2 text-sm font-normal leading-none text-gray-400">
              9 Jan 2023 - 26 May 2023
            </time>

            {formatDescription(` •	Lead the team in designing the Tech Stack and software architecture for this project. 
•	Designed and implemented an interactive and extensible dashboard interface using TailwindCSS and React libraries, with customizable widget types, sizes, and layouts.
•	Developed diverse widget functions, including interactive maps, social media embeddings, OpenAI Whisper translations and transcriptions, report summary, sentiment analysis, email automation, A.I. email template generation, text-to-speech, and speech-to-text capabilities.
•	Enhanced Frontend performance through efficient state management using Zustand, resulting in faster load times.
•	Integrated an intelligent chatbot assistant powered by OpenAI's ChatGPT API and Google's BERT. Leveraged intent classification and entity extraction to enable seamless triggering of widget functions and natural conversation with users.
•	Set up the Python REST API Flask server which stores data locally on Excel as the backend store. 
•	Sole Developer of the ChatGPT webapp for internal department use, storing user queries for analysis.
•	Implemented ChatGPT chatbot clone using OpenAI's API, incorporating the ability to select different versions of ChatGPT for enhanced performance and user experience.
•	Utilized Azure's OpenAI API for GPT4 models, staying up-to-date with cutting-edge advancements.
•	Ensure CI/CD cloud deployment of webapp on Azure’s Static Web App, Azure SQL Server, and Azure SQL Database. 
•	Initially hosted the app on Firebase with FireStore as backend as well.  
•	Developed key features, including token management, response regeneration, and real-time data streaming using server-side events.
•	Successfully integrated Langchain with Azure OpenAI API, paving the way for further extensions of the webapp's capabilities through the combination of additional models and cutting edge features available within the library.

`)}
            {/* <a
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
            </a> */}
          </li>
          <li className="hide ms-6 mb-10">
            <span className="bg-amber-400 -start-4 absolute flex items-center justify-center w-10 h-10 rounded-full">
              <img src="/experiences/_icons_learna.png" className="p-1" />
            </span>
            <h3 className="ms-9 dark:text-white flex items-center pt-2 mb-4 text-lg font-semibold text-gray-900">
              Software Developer{" "}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span> */}
            </h3>
            <time className="ms-9 dark:text-gray-500 block mb-2 text-sm font-normal leading-none text-gray-400">
              Jan 2022 - Aug 2022
            </time>

            {formatDescription(` • Enhance the UX of the application through redesign of the UIwhilst revamping its functionality by refactoring existing app components.
            • Improved the responsiveness of the application by incorporating Dexie LiveQuery into the app. • Created and documented reusable functional components.
            • Create and revamp REST API calls using PHP (Laravel) and MySQL in the backend.`)}
            {/* <a
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
            </a> */}
          </li>
        </ol>
      </section>
      <section
        ref={contactRef}
        className="text-slate-900 dark:text-white w-full h-screen"
      >
        <div className="text-7xl dark:text-amber-300 m-5">CONTACT</div>
        <div className="dark:border-amber-300 border-slate-900 border-t"></div>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-slate-900 dark:text-amber-300 pr-2 text-2xl">
            E-mail
          </div>
          <div>kohjunkai31@gmail.com</div>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-slate-900 dark:text-amber-300 pr-2 text-2xl">
            Github
          </div>
          <a href="https://github.com/JunK4i">https://github.com/JunK4i</a>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-slate-900 dark:text-amber-300 pr-2 text-2xl">
            Linkedin
          </div>
          <a href="https://www.linkedin.com/in/koh-jun-kai-398191207/">
            https://www.linkedin.com/in/koh-jun-kai-398191207/
          </a>
        </div>
        <a
          href="/experiences/KohJunKaiResume.pdf"
          className="ms-5 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"
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
          Resume
        </a>
      </section>
    </main>
  );
}

export default LandingPage;
