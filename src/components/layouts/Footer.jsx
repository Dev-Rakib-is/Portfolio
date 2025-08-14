import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Rakibul Islam</h2>
          <p className="text-sm">Frontend Developer | UI/UX Enthusiast</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://github.com/Dev-Rakib-is" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a href="https://www.facebook.com/rakibul.islam.463664" target="_blank"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 text-sm text-gray-300">
        © 2025 Rakibul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
