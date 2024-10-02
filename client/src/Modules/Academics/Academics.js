import React, { useReducer } from "react";
import * as Academics_Hook from "./Academics_Hook";
import * as Academics_BusinessLogic from "./Academics_BusinessLogic";

const Academics = () => {
  const [state, dispatch] = useReducer(
    Academics_Hook.academicsReducer,
    Academics_Hook.initialState
  );

  const objContext = {
    state,
    dispatch,
    Academics_BusinessLogic:
      new Academics_BusinessLogic.Academics_BusinessLogic(),
  };

  // Initialize the fetch using the custom hook
  Academics_Hook.useFetchAcademics(objContext);

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">My Academics</h1>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-6">
        {state.academics.length === 0 ? (
          <p>No academics added yet.</p>
        ) : (
          <ul>
            {state.academics.map((academic, index) => (
              <li key={index} className="mb-4">
                <div className="text-lg font-bold">{academic.school}</div>
                <div className="text-sm text-gray-700">
                  Level: {academic.level}
                </div>
                <div className="text-sm text-gray-700">
                  Percentage/Grade: {academic.percentage}
                </div>
                <div className="text-sm text-gray-600">
                  From: {academic.fromDate} - To: {academic.toDate}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Academics;
