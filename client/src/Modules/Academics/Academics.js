import React, { useReducer } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import * as Academics_Hook from "./Academics_Hook";
import * as Academics_BusinessLogic from "./Academics_BusinessLogic";

const Academics = ({ theme }) => {
  const [state, dispatch] = useReducer(
    Academics_Hook.academicsReducer,
    Academics_Hook.initialState
  );

  // Redux dispatch to update the loader state or any other redux-related states
  const reduxDispatch = useDispatch();

  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Academics_BusinessLogic:
      new Academics_BusinessLogic.Academics_BusinessLogic(),
  };

  // Fetch data directly
  Academics_Hook.useFetchAcademics(objContext);

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
      className={`p-8 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Heading */}
      <h1
        className={`text-4xl font-extrabold mb-8 text-center ${
          theme === "dark" ? "text-blue-400" : "text-indigo-700"
        }`}
      >
        Academic Background
      </h1>

      {/* Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
      >
        {state.academics.map((academic, index) => (
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
            {academic.logo && (
              <img
                src={academic.logo}
                alt={academic.school}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
            )}

            <h2
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" ? "text-blue-300" : "text-indigo-600"
              }`}
            >
              {academic.school}
            </h2>
            <p className="text-sm mb-2">
              <span className="font-bold">Level:</span> {academic.level}
            </p>
            <p className="text-sm mb-2">
              <span className="font-bold">Percentage/Grade:</span>{" "}
              {academic.percentage +
                "/" +
                (academic.level === "Graduate"
                  ? "4"
                  : academic.level === "Undergraduate"
                  ? "10"
                  : "100")}
            </p>
            <p className="text-sm mb-2">
              <span className="font-bold">Location:</span> {academic.location}
            </p>
            <p className="text-sm">
              <span className="font-bold">Duration:</span> {academic.fromDate} -{" "}
              {academic.toDate}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Academics;
