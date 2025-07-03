import { AlignJustify , X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 bg-blue-50 w-full shadow z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6.5">
        <a href="/">
          <div className="text-violet-800 text-base font-semibold flex items-center gap-1">
            <svg
              width="38"
              height="38"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#5E3BEE" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".35em"
                fontSize="24"
                fontFamily="Arial, sans-serif"
                fill="white"
                fontWeight="bold"
              >
                R
              </text>
            </svg>
            PORTOSTAR
          </div>
        </a>
        {/* DeskTop menu */}
        <ul className="hidden md:flex gap-[47px] font-normal text-black">
          <li>
            <a
              href="#hero"
              className="text-sm font-normal hover:text-blue-500 transition duration-300 tracking-[1.5px]"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#hero"
              className="text-sm font-normal hover:text-blue-500 transition duration-300 tracking-[1.5px]"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#hero"
              className="text-sm font-normal hover:text-blue-500 transition duration-300 tracking-[1.5px]"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#hero"
              className="text-sm font-normal hover:text-blue-500 transition duration-300 tracking-[1.5px]"
            >
              WORKS
            </a>
          </li>
        </ul>
        {/* Mobile menu */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="w-[38px] h-[38px]">
           {menuOpen? <X/> : <AlignJustify/>}
          </button>
        </div>
        {menuOpen && (
          <ul className="flex flex-col absolute bg-amber-300 bg-opacity-20 backdrop-blur-md font-medium space-y-4 top-[100%] p-5 rounded-lg left-1/2 transform -translate-x-1/2 w-11/12 max-w-xs text-base sm:text-lg shadow-lg border border-white/20">
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded hover:bg-amber-400/40 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded hover:bg-amber-400/40 transition"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded hover:bg-amber-400/40 transition"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded hover:bg-amber-400/40 transition"
              >
                WORKS
              </a>
            </li>
          </ul>
        )}

        {/* Desktop hire Button  */}
        <a href="#contact" className="hidden w-[124px] h-[40px] rounded-full border border-violet-800 hover:border-0 text-blue-500 text-sm font-medium cursor-pointer hover:scale-105 transition duration-400 hover:bg-blue-200 md:flex justify-center items-center">
          HIRE ME
        </a>
      </nav>
    </header>
  );
};

export default Header;
