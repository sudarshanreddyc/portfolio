import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import * as Academics_Hook from "./Academics_Hook";
import * as Academics_BusinessLogic from "./Academics_BusinessLogic";

const Academics = () => {
  const [state, dispatch] = useReducer(
    Academics_Hook.academicsReducer,
    Academics_Hook.initialState
  );

  //Redux dispatch to update the loader state or any other redux related states
  const reduxDispatch = useDispatch();

  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Academics_BusinessLogic:
      new Academics_BusinessLogic.Academics_BusinessLogic(),
  };

  // Initialize the fetch using the custom hook
  Academics_Hook.useFetchAcademics(objContext);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex flex-col items-center">
      {state.isDataLoaded ? (
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
            Academic Background
          </h1>
          <ul className="space-y-6">
            {state.academics.map((academic, index) => (
              <li
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col"
              >
                <div className="text-lg font-semibold text-gray-800">
                  {academic.school}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  <span className="font-bold">Level:</span> {academic.level}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  <span className="font-bold">Percentage/Grade:</span>{" "}
                  {academic.percentage +
                    "/" +
                    (academic.level === "Graduate"
                      ? "4"
                      : academic.level === "Undergraduate"
                      ? "10"
                      : "100")}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  <span className="font-bold">Location:</span>{" "}
                  {academic.location}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-bold">Duration:</span>{" "}
                  {academic.fromDate} - {academic.toDate}
                </div>
              </li>
            ))}
          </ul>
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

export default Academics;
