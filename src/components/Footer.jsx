import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-2xl font-semibold text-blue-400">Imam Hossen</p>
          <p className="text-sm text-gray-400">Web Developer | Front-End Enthusiast</p>
        </div>

        <div className="mt-6 sm:mt-0">
          <ul className="flex space-x-8 justify-center sm:justify-end text-2xl">
            <li>
              <a
                href="https://github.com/imamhossenbu"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/imam-hossen-ub/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="mailto:your-email@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        <p>&copy; 2025 Imam Hossen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
