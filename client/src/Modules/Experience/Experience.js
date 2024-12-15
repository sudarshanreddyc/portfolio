import React, { useReducer } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import * as Experience_Hook from "./Experience_Hook";
import * as Experience_BusinessLogic from "./Experience_BusinessLogic";
import { FaBuilding, FaCalendarAlt, FaTasks } from "react-icons/fa";

const Experience = ({ theme }) => {
  const [state, dispatch] = useReducer(
    Experience_Hook.experienceReducer,
    Experience_Hook.initialState
  );

  const reduxDispatch = useDispatch();

  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Experience_BusinessLogic:
      new Experience_BusinessLogic.Experience_BusinessLogic(),
  };

  Experience_Hook.useFetchExperiences(objContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.3 },
    }),
  };

  return (
    <div
      className={`min-h-screen p-8 flex flex-col items-center relative ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Vertical Line */}
      <div
        className={`absolute top-0 bottom-0 left-1/2 w-1 ${
          theme === "dark" ? "bg-gray-600" : "bg-gray-300"
        } -translate-x-1/2`}
      ></div>

      <div className="w-full max-w-6xl flex flex-col relative">
        {state.experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="relative flex items-center mb-12"
          >
            {/* Experience Card */}
            <div
              className={`p-4 rounded-md shadow-md w-1/2 ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              } ${
                theme === "dark"
                  ? "bg-gray-800 border-t-4 border-blue-400 text-gray-200"
                  : "bg-white border-t-4 border-blue-500 text-gray-800"
              } transform transition-all hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-2">
                <h2
                  className={`text-lg font-bold ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {experience.jobTitle}
                </h2>
                <FaBuilding
                  className={`${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  } text-xl`}
                />
              </div>
              <div className="mb-2 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <FaBuilding />
                  <span>
                    <strong>Company:</strong> {experience.company}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt />
                  <span>
                    <strong>From:</strong> {experience.fromDate}{" "}
                    <strong>To:</strong> {experience.toDate}
                  </span>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <FaTasks />
                  <span className="font-bold">Responsibilities:</span>
                </div>
                <p style={{ whiteSpace: "pre-line" }}>
                  {experience.responsibilities}
                </p>
              </div>
            </div>

            {/* Connector Dot */}
            <div
              className={`absolute top-0 w-4 h-4 rounded-full ${
                theme === "dark" ? "bg-blue-400" : "bg-blue-500"
              } left-1/2 -translate-x-1/2 -translate-y-1/2`}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
