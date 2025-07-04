import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div
          className="md:w-1/2"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <img
            src="/src/assets/Me.png"
            alt="About Me"
            className="rounded-lg shadow-lg max-w-[400px] mx-auto "
          />
        </div>

        {/* Text */}
        <div
          className="md:w-1/2 text-gray-800"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Me</h2>
          <p className="mb-4 text-gray-600">
            I am Rakibul Islam, a passionate frontend developer with strong skills in modern web development.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <li><strong>Name:</strong> Rakibul Islam</li>
            <li><strong>Age:</strong> 27</li>
            <li><strong>Email:</strong> ri3390990@gmail.com</li>
            <li><strong>Location:</strong> Dhaka, Bangladesh</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
