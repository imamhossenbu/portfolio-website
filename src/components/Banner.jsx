import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import img from '../assets/img.jpg';
import {ReactTyped} from 'react-typed';

function Banner() {
  return (
    <section className="bg-gray-900 text-white py-20 px-5">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Section: Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="text-blue-400">
              <ReactTyped
                strings={['Imam Hossen', 'A Web Developer', 'A Passionate CSE Student']}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            A passionate web developer specializing in building responsive and dynamic websites.
          </p>
          <div className="space-x-4">
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              Download CV
            </a>
            <Link
              to="/projects"
              className="bg-gray-700 hover:bg-gray-800 transition text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              View Projects
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/imam-hossen-ub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/imamhossainbu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/imamhossenbu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/imamhossenbu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Imam Hossen Illustration"
            className="w-64 md:w-80 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
