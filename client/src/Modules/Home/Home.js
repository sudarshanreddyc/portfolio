import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Home = ({ theme }) => {
  const titles = [
    "AI/ML Enthusiast",
    "Full-Stack Developer",
    "Frontend Specialist",
    "Software Architect",
  ];
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  let titleIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      titleIndex = (titleIndex + 1) % titles.length;
      setCurrentTitle(titles[titleIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.8 } },
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } -mt-16`}
    >
      <motion.div
        className={`text-center max-w-3xl shadow-2xl rounded-xl p-10 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Sudarshan Reddy Chennamareddygari
        </h1>
        <motion.h1
          className="text-3xl font-bold mb-6"
          key={currentTitle}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {currentTitle}
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Machine Learning Developer with 4 years of experience building
          data-driven solutions and web applications. Proficient in Python,
          Scikit-learn, TensorFlow, and Pandas for developing robust machine
          learning models. Skilled in data structures, algorithms, and feature
          engineering, with a strong foundation in AI and ML. Experienced in
          full-stack development. Skilled in designing microservices,
          implementing design patterns, and developing scalable applications.
          Passionate about leveraging ML to solve complex real-world problems.
        </motion.p>
        <motion.div
          className="mt-8 flex space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* LinkedIn */}
          <div className="flex items-center space-x-2">
            <span
              className={`text-xl ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              LinkedIn:
            </span>
            <a
              href="https://linkedin.com/in/sudarshan68"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark"
                  ? "text-gray-200 hover:text-gray-200"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              <FaLinkedin style={{ fontSize: "40px" }} />
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-2">
            <span
              className={`text-xl ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              GitHub:
            </span>
            <a
              href="https://www.github.com/sudarshanreddyc"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark"
                  ? "text-gray-200 hover:text-gray-200"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              <FaGithub style={{ fontSize: "40px" }} />
            </a>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mt-8 flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-lg font-medium mb-2 flex items-center justify-center">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:sudarshanreddy.c123@gmail.com"
              className={`underline ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              sudarshanreddy.c123@gmail.com
            </a>
          </p>

          <p className="text-lg font-medium flex items-center justify-center">
            <FaPhone className="mr-2" />
            <span
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              +1 (667) 445-7232
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
