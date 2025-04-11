// Home.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
    <section
      id="home"
      className={`flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <motion.div
        className={`mb-10 py-10 text-center max-w-3xl shadow-2xl rounded-xl ${
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
          Software Engineer with 4+ years of experience in developing scalable
          microservices, cloud solutions, and AI/ML models using Python. Skilled
          in system design, data structures, and algorithms, with expertise in
          building high-performance applications and collaborating with
          cross-functional teams in Agile environments.
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl text-gray-800 dark:text-gray-200">
              LinkedIn:
            </span>
            <a
              href="https://linkedin.com/in/sudarshan68"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ fontSize: "40px", color: "#0A66C2" }} />
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xl text-gray-800 dark:text-gray-200">
              GitHub:
            </span>
            <a
              href="https://www.github.com/sudarshanreddyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ fontSize: "40px", color: "#ffffff" }} />
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xl text-gray-800 dark:text-gray-200">
              LeetCode:
            </span>
            <a
              href="https://leetcode.com/u/sudarshanreddyc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode style={{ fontSize: "38px", color: "#FFA116" }} />
            </a>
          </div>
        </motion.div>

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
              className={theme === "dark" ? "text-gray-200" : "text-gray-800"}
            >
              +1 (667) 445-7232
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
