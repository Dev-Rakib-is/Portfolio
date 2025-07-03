// src/components/sections/Services.jsx
import React from "react";
import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceItems = [
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      description: "Creative and modern design with user-friendly experience.",
      delay: 0,
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive and scalable websites using latest tech.",
      delay: 100,
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Ensuring your site looks perfect on every device.",
      delay: 200,
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2
          className="text-4xl font-bold text-blue-900 mb-2"
          data-aos="fade-up"
        >
          My Services
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
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
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
