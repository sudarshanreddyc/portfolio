import React, { useReducer } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import * as Experience_Hook from "./Experience_Hook";
import * as Experience_BusinessLogic from "./Experience_BusinessLogic";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

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
      className={`min-h-screen p-8 flex flex-col relative ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } md:items-center sm:pl-4 md:pl-0`} // Add left padding for small devices
    >
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience
      </motion.h1>
      {/* Vertical Line */}
      <div
        className={`absolute top-20 bottom-0 w-1 ${
          theme === "dark" ? "bg-gray-600" : "bg-gray-300"
        } -translate-x-1/2`}
      ></div>

      <div className="w-full max-w-4xl flex flex-col relative">
        {state.experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={`relative flex items-center mb-8 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } sm:justify-start md:justify-end`} // Align all to left for small devices
          >
            {/* Experience Card */}
            <div
              className={`p-3 md:p-4 rounded-md shadow-md sm:w-3/4 md:w-1/2 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              } ${
                theme === "dark"
                  ? "bg-gray-800 border-t-4 border-blue-400 text-gray-200"
                  : "bg-white border-t-4 border-blue-500 text-gray-800"
              } transform transition-all hover:scale-105`}
            >
              <div className="flex justify-center mb-2">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="h-12 w-auto rounded-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h2
                  className={`text-md md:text-lg font-bold flex items-center ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {experience.jobTitle}
                  <span
                    className={`ml-2 text-xs md:text-sm font-semibold ${
                      theme === "dark" ? "text-blue-300" : "text-blue-500"
                    }`}
                  >
                    {experience.fromDate} - {experience.toDate}
                  </span>
                </h2>
              </div>

              <div className="text-xs md:text-sm mb-2 flex items-center space-x-2">
                <span>
                  <strong>Company:</strong> {experience.company}
                </span>
              </div>

              {/* Responsibilities List */}
              <ul className="text-xs md:text-sm list-disc list-inside">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i} className="mb-2">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connector Dot */}
            <div
              className={`absolute top-0 w-3 h-3 rounded-full ${
                theme === "dark" ? "bg-blue-400" : "bg-blue-500"
              } left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 md:w-4 md:h-4`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
