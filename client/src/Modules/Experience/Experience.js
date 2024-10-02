import React, { useReducer } from "react";
import * as Experience_Hook from "./Experience_Hook";
import * as Experience_BusinessLogic from "./Experience_BusinessLogic";

const Experience = () => {
  const [state, dispatch] = useReducer(
    Experience_Hook.experienceReducer,
    Experience_Hook.initialState
  );

  const objContext = {
    state,
    dispatch,
    Experience_BusinessLogic:
      new Experience_BusinessLogic.Experience_BusinessLogic(),
  };

  // Initialize the fetch using the custom hook
  Experience_Hook.useFetchExperiences(objContext);

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">My Experiences</h1>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-6">
        {state.experiences.length === 0 ? (
          <p>No experiences added yet.</p>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Experience;
