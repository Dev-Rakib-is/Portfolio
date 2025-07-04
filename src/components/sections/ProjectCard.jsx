const ProjectCard = ({ title, description, image, live, github }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-2xl overflow-hidden"
      data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5" >
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
        <p className="text-gray-600 my-3">{description}</p>
        <div className="flex justify-between mt-4">
          <a
            href={live}
            target="_blank"
            className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-800"
          >
            Live Site
          </a>
          <a
            href={github}
            target="_blank"
            className="text-sm font-medium text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
