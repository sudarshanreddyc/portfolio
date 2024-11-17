import { useEffect } from "react";

export const initialState = {
  skills: [], // List of added skills
  isDataLoaded: false,
};

// Reducer function to manage state
export const skillsReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// Custom hook to initialize skills data fetch
export const useFetchSkills = (objContext) => {
  useEffect(() => {
    if (!objContext.state.isDataLoaded) {
      objContext.Skills_BusinessLogic.fetchSkillsData(objContext);
    }
  }, [objContext.state.isDataLoaded]);
};
