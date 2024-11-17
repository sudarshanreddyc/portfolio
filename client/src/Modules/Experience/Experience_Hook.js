import { useEffect } from "react";

export const initialState = {
  experiences: [], // List of added experiences
  isDataLoaded: false,
};

// Reducer function to manage state
export const experienceReducer = (state, action) => {
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

// Custom hook to initialize experience data fetch
export const useFetchExperiences = (objContext) => {
  useEffect(() => {
    if (!objContext.state.isDataLoaded) {
      objContext.Experience_BusinessLogic.fetchExperienceData(objContext);
    }
  }, [objContext.state.isDataLoaded]);
};
