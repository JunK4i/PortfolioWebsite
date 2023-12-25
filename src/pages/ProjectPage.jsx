import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import projectsData from "../projectData.json";
import NavBar from "../components/NavBar";
import ReactPlayer from "react-player/lazy";

const ProjectPage = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const matchedProject = projectsData.find((p) => p.title === title);
    setProject(matchedProject);
  }, [title]);

  if (!project) {
    return (
      <div className="text-xl font-bold text-center">Project not found</div>
    );
  }

  const { images, videos, techStack, description, links, date } = project;

  const formatDescription = (description) => {
    return description.split("\n\n").map((paragraph, paraIndex) => {
      const lines = paragraph.split("\n").map((line, lineIndex) => {
        return <span key={lineIndex}>{line}</span>;
      });
      return (
        <p key={paraIndex}>
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

  return (
    <div className="project-container p-4">
      <nav>
        <NavBar />
      </nav>
      <Carousel
        className="px-5 mb-4"
        dynamicHeight={false}
        showThumbs={false}
        useKeyboardArrows={true}
      >
        {videos.map((video, index) => (
          <div className="flex justify-center w-full pb-8">
            <ReactPlayer
              url={video}
              height="500px"
              width="800px"
              controls="true"
              screenfull="true"
            />{" "}
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index} className=" h-[30rem]">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </Carousel>
      <div className="flex items-center justify-start">
        <h1 className="text-slate-900 dark:text-amber-300 relative mb-4 text-2xl font-extrabold">
          {title}
        </h1>
        <span className="text-slate-900 dark:text-green-200 text-md px-1 mb-3 ml-4 font-sans font-bold bg-green-700 rounded-sm">
          {date}
        </span>
      </div>
      <div className="tech-stack mb-4">
        <h2 className="text-slate-900 dark:text-amber-300 text-xl font-bold">
          Stack
        </h2>
        <ul className="text-slate-900 dark:text-white flex">
          {techStack.map((tech, index) => (
            <li key={index} className="mr-2">
              {tech}
              {index < techStack.length - 1 && <span className="mx-2">•</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-description mb-4">
        <h2 className="text-slate-900 dark:text-amber-300 text-xl font-bold">
          Description
        </h2>
        {formatDescription(description)}
      </div>

      <div className="additional-links">
        <h2 className="text-slate-900 dark:text-amber-300 text-xl font-bold">
          More Information
        </h2>
        <div className="flex flex-wrap">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:cursor-pointer hover:underline dark:text-white dark:hover:text-yellow-300 mr-2"
              >
                {link.title}
              </a>
              {index < links.length - 1 && (
                <span className="text-slate-900 dark:text-white mr-2">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
