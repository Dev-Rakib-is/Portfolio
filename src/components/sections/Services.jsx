import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceItems = [
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      description: "Creative and modern design.",
      details:
        "I create stunning UI/UX experiences using Figma, Adobe XD and frontend best practices.",
      delay: 0,
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Clean and scalable websites.",
      details:
        "Using React, Tailwind, and modern JavaScript, I build lightning-fast and maintainable apps.",
      delay: 100,
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Mobile-first design for all devices.",
      details:
        "Your website will look perfect on phones, tablets, and desktops — with pixel perfection.",
      delay: 200,
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2
          className="text-4xl font-bold text-blue-900 mb-2"
          data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          My Services
        </h2>
        <p
          className="text-gray-600"
          data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          What I Provide
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3">
        {serviceItems.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            details={item.details}
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
