import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Introductory Paragraph */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 mb-8 md:w-[80%] mx-auto">
            Welcome to my personal page! I'm Imam Hossen, a web developer with a passion for creating meaningful, interactive, and accessible web experiences. Here, you’ll find out how I started my journey, what I’m currently working on, and what drives my passion for coding.
          </p>
        </motion.div>

        {/* Page Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Journey Card */}
          <motion.div
            className="bg-gray-700 rounded-lg shadow-lg p-8 space-y-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              My Journey as a Web Developer
            </h2>
            <p className="text-md text-gray-300 leading-relaxed">
              My interest in web development sparked during my second year as a Computer Science and Engineering (CSE) student at Barisal University. Initially, I was intrigued by the mechanics of websites and wanted to create something impactful. Starting with HTML, CSS, and JavaScript, I began to build simple websites, gradually gaining skills and confidence.
            </p>
            <p className="text-md text-gray-300 leading-relaxed">
              Over time, I discovered tools like React, which helped me realize my potential to create interactive and user-centric websites. Today, I focus on building dynamic, responsive websites that adapt to various devices, always striving to improve my craft with every project.
            </p>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div
            className="bg-gray-700 rounded-lg shadow-lg p-8 space-y-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              What I Enjoy Outside Coding
            </h2>
            <p className="text-md text-gray-300 leading-relaxed">
              Coding aside, I believe in a well-rounded life that nurtures creativity and mental well-being. Some of my favorite hobbies include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2 pl-4">
              <li>Reading books that inspire self-development and expand my tech knowledge.</li>
              <li>Exploring nature through hiking and adventure trips, which refreshes my mind.</li>
              <li>Strategizing in chess to improve problem-solving and critical thinking.</li>
              <li>Listening to music to unwind and discover new genres.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
