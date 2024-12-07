import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import * as Skills_Hook from "./Skills_Hook";
import * as Skills_BusinessLogic from "./Skills_BusinessLogic";

const Skills = () => {
  const [state, dispatch] = useReducer(
    Skills_Hook.skillsReducer,
    Skills_Hook.initialState
  );

  //Redux dispatch to update the loader state or any other redux related states
  const reduxDispatch = useDispatch();

  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Skills_BusinessLogic: new Skills_BusinessLogic.Skills_BusinessLogic(),
  };

  // Initialize the fetch using the custom hook
  Skills_Hook.useFetchSkills(objContext);

  const groupedSkills = state.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex flex-col items-center">
      {objContext.state.isDataLoaded ? (
        <div className="flex flex-wrap gap-8 justify-center">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-8 w-[300px] md:w-[350px] lg:w-[400px] flex flex-col"
            >
              <div className="text-2xl font-extrabold text-purple-600 mb-4 text-center">
                {category}
              </div>
              <ul className="flex-1">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="mb-3 flex justify-between items-center text-lg border-b border-gray-200 pb-2"
                  >
                    <div className="text-gray-800 font-medium">
                      {skill.skill}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-xl font-semibold text-gray-800 animate-pulse flex items-center space-x-4">
          <svg
            className="animate-spin h-8 w-8 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span>Loading data, please wait...</span>
        </div>
      )}
    </div>
  );
};

export default Skills;
