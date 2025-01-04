import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiC } from 'react-icons/si';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500 text-6xl mb-4" />, progress: 85 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-6xl mb-4" />, progress: 90 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 text-6xl mb-4" />, progress: 85 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-6xl mb-4" />, progress: 80 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-6xl mb-4" />, progress: 70 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 text-6xl mb-4" />, progress: 90 },
  { name: 'Express.js', icon: <SiExpress className="text-gray-500 text-6xl mb-4" />, progress: 75 },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-6xl mb-4" />, progress: 80 },
  { name: 'C', icon: <SiC className="text-blue-700 text-6xl mb-4" />, progress: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.1, delay: index * 0.2 }}
            >
              {/* Icon */}
              {skill.icon}

              {/* Line Separator */}
              <div className="w-16 h-1 bg-blue-500 my-4"></div>

              {/* Name */}
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>

              {/* Circular Progress Bar */}
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={skill.progress}
                  text={`${skill.progress}%`}
                  styles={buildStyles({
                    textColor: '#ffffff',
                    pathColor: '#3b82f6',
                    trailColor: '#1f2937',
                  })}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
