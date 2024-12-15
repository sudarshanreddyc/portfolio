import React, { useReducer } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import * as Skills_Hook from "./Skills_Hook";
import * as Skills_BusinessLogic from "./Skills_BusinessLogic";

const Skills = ({ theme }) => {
  const [state, dispatch] = useReducer(
    Skills_Hook.skillsReducer,
    Skills_Hook.initialState
  );

  const reduxDispatch = useDispatch();

  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Skills_BusinessLogic: new Skills_BusinessLogic.Skills_BusinessLogic(),
  };

  // Fetch skills data directly
  Skills_Hook.useFetchSkills(objContext);

  // Group skills by category
  const groupedSkills = state.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div
      className={`min-h-screen p-8 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Page Heading */}
      <h1
        className={`text-4xl font-extrabold mb-8 text-center ${
          theme === "dark" ? "text-blue-400" : "text-indigo-700"
        }`}
      >
        My Skills
      </h1>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
      >
        {Object.entries(groupedSkills).map(([category, skills], index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className={`p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            {/* Category Title */}
            <h2
              className={`text-2xl font-semibold mb-4 text-center ${
                theme === "dark" ? "text-blue-300" : "text-indigo-600"
              }`}
            >
              {category}
            </h2>

            {/* Skills List */}
            <ul>
              {skills.map((skill, idx) => (
                <li
                  key={idx}
                  className={`flex justify-between items-center py-2 border-b last:border-b-0 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <span className="text-lg font-medium">{skill.skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
