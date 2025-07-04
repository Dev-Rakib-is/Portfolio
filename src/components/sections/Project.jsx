import projectData from "../../data/projectData";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div
        className="max-w-7xl mx-auto px-4 text-center mb-12"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-2">
          My Projects
        </h2>
        <p className="text-gray-600">
          Some work I've done recently
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projectData.map((project, index) => (
          <div
            key={index}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              live={project.live}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
