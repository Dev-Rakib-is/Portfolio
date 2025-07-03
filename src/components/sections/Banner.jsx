import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import myImage from "../../assets/Me.png";

const topDownVariant = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, y: -50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.4 },
  },
};

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-900 to-sky-800 text-white">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          variants={topDownVariant}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Hi, I’m Rakibul
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Frontend Developer | UI/UX Enthusiast
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start mb-8">
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(255,255,255,0.20)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              href="#contact"
              className="inline-block bg-white text-blue-700 font-semibold py-2 px-6 rounded-full transition"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(255,255,255,0.20)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              href="/cv.pdf" 
              download
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white py-2 px-6 rounded-full transition hover:bg-white hover:text-blue-800"
            >
              <Download size={18} /> Download CV
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-white">
            <motion.a
              href="https://github.com/Rakibul islam Dev-Rakib-is"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hover:scale-110 transition"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hover:scale-110 transition"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              href="mailto:your@email.com"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hover:scale-110 ease-out transition"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="show"
          className="flex justify-center md:justify-end"
        >
          <img
            src={myImage}
            alt="Rakibul"
            className="w-96 h-96 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
