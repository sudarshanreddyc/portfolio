import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import * as Experience_Hook from "./Experience_Hook";
import * as Experience_BusinessLogic from "./Experience_BusinessLogic";

const Experience = () => {
  const [state, dispatch] = useReducer(
    Experience_Hook.experienceReducer,
    Experience_Hook.initialState
  );

  //Redux dispatch to update the loader state or any other redux related states
  const reduxDispatch = useDispatch();

  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Experience_BusinessLogic:
      new Experience_BusinessLogic.Experience_BusinessLogic(),
  };

  // Initialize the fetch using the custom hook
  Experience_Hook.useFetchExperiences(objContext);

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      {state.isDataLoaded ? ( // Check if isDataLoaded is true
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-6">
          <ul>
            {state.experiences.map((experience, index) => (
              <li key={index} className="mb-4">
                <div className="text-lg font-bold">{experience.jobTitle}</div>
                <div className="text-sm text-gray-700">
                  <span className="font-bold">Company: </span>
                  {experience.company}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-bold">Responsibilities:</span>{" "}
                  {experience.responsibilities}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold">From: </span>
                  {experience.fromDate}
                  <span className="font-bold"> - To: </span>
                  {experience.toDate}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-gray-500">Loading data, please wait...</div>
      )}
    </div>
  );
};

export default Experience;
