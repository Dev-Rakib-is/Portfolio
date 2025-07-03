// src/components/sections/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="text-4xl mb-4 text-blue-700">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-700 font-semibold hover:underline">
        Read More →
      </button>
    </div>
  );
};

export default ServiceCard;
