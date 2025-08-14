import { Github, Linkedin, Mail, Download } from "lucide-react";
import myImage from "../../assets/Me.png";

const Banner = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-purple-900 to-sky-800 text-white"
      id="banner"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div
          className="text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Hi, I’m Rakibul
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Frontend Developer | UI/UX Enthusiast
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start mb-8">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-700 font-semibold py-2 px-6  rounded-full transition"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Contact Me
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white py-2 px-6 rounded-full transition hover:bg-white hover:text-blue-800"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-white">
            <a
              href="https://github.com/Dev-Rakib-is"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#contact"
              className="hover:scale-110 transition"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="800"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img
            src={myImage}
            alt="Rakibul"
            className="w-96 h-96 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
