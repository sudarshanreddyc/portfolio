import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = ({ theme }) => {
  const titles = [
    "Full-Stack Developer",
    "Backend Engineer",
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
      } -mt-16`} // Add negative top margin
    >
      <motion.div
        className={`text-center max-w-3xl shadow-2xl rounded-xl p-10 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-6"
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
          Full-stack developer with 5 years of experience creating robust web
          applications. Skilled in .NET Core, JavaScript, SQL, and React.
          Proficient in data structures and algorithms, and currently enhancing
          skills in Python, AI, and ML.
        </motion.p>
        <motion.div
          className="mt-8 flex space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
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

          <a
            href="https://www.github.com/sudarshanreddyc"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl ${
              theme === "dark"
                ? "text-gray-200 hover:text-gray-200"
                : "text-gray-800 hover:text-black"
            }`}
          >
            <FaGithub style={{ fontSize: "40px" }} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
