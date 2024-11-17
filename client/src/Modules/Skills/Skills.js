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
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      {objContext.state.isDataLoaded ? (
        <div className="flex flex-wrap gap-6">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col min-h-[200px]"
            >
              <div className="text-xl font-bold mb-4">{category}</div>
              <ul className="flex-1">
                {skills.map((skill, index) => (
                  <li key={index} className="mb-2 flex justify-between">
                    <div className="text-lg">{skill.skill}</div>
                    {/* <div className="text-sm text-gray-700">Proficiency: {skill.proficiency}</div> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500">Loading data, please wait...</div>
      )}
    </div>
  );
};

export default Skills;
