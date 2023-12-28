import NavBar from "../components/NavBar";
import projectData from "../projectData.json";
import { useNavigate } from "react-router-dom";
function ProjectPage() {
  const navigate = useNavigate();
  const projects = projectData;
  const renderCard = (title, cover) => {
    return (
      <div
        className="project-image"
        onClick={() => {
          navigate("/project/" + title);
        }}
      >
        <img className="h-auto max-w-full rounded-lg" src={cover} alt=""></img>
        <title className="dark:text-white text-slate-900 absolute inset-0 flex items-center justify-center font-sans text-5xl font-extrabold text-center">
          {title}
        </title>
        <div className="hover-lines">
          <span className="top-line"></span>
          <span className="right-line"></span>
          <span className="bottom-line"></span>
          <span className="left-line"></span>
        </div>
      </div>
    );
  };

  return (
    <main className="max-w-screen bg-orange-50 dark:bg-stone-900 h-screen">
      <nav>
        <NavBar />
      </nav>
      <section>
        <div className="md:grid-cols-3 grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <div>{renderCard(project.title, project.cover)}</div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
