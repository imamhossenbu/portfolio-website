import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Barisal University",
    year: "2022 - Present",
    details: "Learning programming, data structures, algorithms, and software engineering principles.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gachbaria Govt. College",
    year: "2019 - 2021",
    details: "Completed coursework in mathematics, physics, and computer studies.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Chamball High School",
    year: "2017 - 2019",
    details: "Excelled in science subjects with a focus on mathematics and physics.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-gray-800 text-white py-20 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10">Educational Qualification</h2>

        {/* Education List */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Degree */}
              <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>

              {/* Institution and Year */}
              <div className="flex justify-between items-center text-sm font-medium text-gray-400 mb-2">
                <span>{item.institution}</span>
                <span>{item.year}</span>
              </div>

              {/* Details */}
              <p className="text-gray-300">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
