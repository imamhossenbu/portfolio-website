import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import about from '../assets/about.jpg'

const About = () => {
    return (
        <section
            id="about"
            className="bg-gray-800 text-white py-20 pt- px-5"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row  items-center justify-between">
                {/* Image Section */}
                <motion.div
                    className="md:w-1/2 flex justify-center mb-8 md:mb-0"
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={about}
                        alt="About Me"
                        className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="md:w-1/2 space-y-6"
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold text-center md:text-left">
                        About Me
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Hi! I'm <span className="text-blue-400 font-semibold">Imam Hossen</span>,
                        a dedicated web developer with a passion for building user-friendly
                        and visually appealing websites. I am currently pursuing my Computer
                        Science and Engineering degree, and I love learning new technologies.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                        My expertise includes working with modern web technologies like React,
                        Tailwind CSS, and integrating APIs to create seamless user experiences.
                        I strive to deliver high-quality, responsive designs for all devices.
                    </p>
                    <NavLink to="/about">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg text-lg font-medium transition">
                            Learn More
                        </button>
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
