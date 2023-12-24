import NavBar from "../components/NavBar";
import projectData from "../projectData.json";
import { useNavigate } from "react-router-dom";
function ProjectPage() {
  const navigate = useNavigate();
  const projects = projectData;
  console.log(projects);
  const renderCard = (title, image) => {
    return (
      <div
        class="project-image"
        onClick={() => {
          navigate("/project/" + title);
        }}
      >
        <img className="h-auto max-w-full rounded-lg" src={image} alt=""></img>
        <title className="absolute inset-0 flex items-center justify-center font-sans text-5xl font-extrabold text-center">
          {title}
        </title>
        <div class="hover-lines">
          <span class="top-line"></span>
          <span class="right-line"></span>
          <span class="bottom-line"></span>
          <span class="left-line"></span>
        </div>
      </div>
    );
  };

  return (
    <main className="max-w-screen bg-orange-50 dark:bg-stone-900">
      <nav>
        <NavBar />
      </nav>
      <section>
        <div className="md:grid-cols-4 grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <div>{renderCard(project.title, project.images[0])}</div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
