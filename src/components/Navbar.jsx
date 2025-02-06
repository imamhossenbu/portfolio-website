import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50 text-white p-5">
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
          <Link to="home"  className="cursor-pointer hover:text-blue-400">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/uc?export=download&id=1loohmGIgekTe4gQT__yTUOc11XzbGkA6"
            download
            target='_blank'
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Download Resume
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
          <Link to="home"  className="py-2 px-4 text-lg w-full text-center cursor-pointer hover:bg-blue-500">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="py-2 px-4 text-lg w-full text-center cursor-pointer hover:bg-blue-500">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="py-2 px-4 text-lg w-full text-center cursor-pointer hover:bg-blue-500">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="py-2 px-4 text-lg w-full text-center cursor-pointer hover:bg-blue-500">
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1loohmGIgekTe4gQT__yTUOc11XzbGkA6/view?usp=sharing"
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
