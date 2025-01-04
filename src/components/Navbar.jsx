import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 text-white font-bold p-2 rounded-full text-xl">
            IH
          </div>
          <span className="text-2xl font-semibold">Imam Hossen</span>
        </div>

        {/* Centered NavLinks */}
        <div className="hidden md:flex gap-6 items-center justify-center flex-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                : 'hover:text-blue-400'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                : 'hover:text-blue-400'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                : 'hover:text-blue-400'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                : 'hover:text-blue-400'
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a
            href="/path-to-your-cv.pdf"
            download
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 px-4 text-lg w-full text-center ${
                isActive
                  ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                  : 'hover:bg-blue-500'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-2 px-4 text-lg w-full text-center ${
                isActive
                  ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                  : 'hover:bg-blue-500'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `py-2 px-4 text-lg w-full text-center ${
                isActive
                  ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                  : 'hover:bg-blue-500'
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `py-2 px-4 text-lg w-full text-center ${
                isActive
                  ? 'text-blue-400 font-semibold border-b-2 border-blue-400'
                  : 'hover:bg-blue-500'
              }`
            }
          >
            Contact
          </NavLink>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 mt-2 w-full text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
