import { useEffect } from "react";

export const initialState = {
  experiences: [], // List of added experiences
  newExperience: {
    jobTitle: "",
    company: "",
    responsibilities: "",
    fromDate: "",
    toDate: "",
  },
};

// Reducer function to manage state
export const experienceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        newExperience: {
          ...state.newExperience,
          [action.field]: action.value,
        },
      };
    case "SET_EXPERIENCES":
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};

// Custom hook to initialize experience data fetch
export const useFetchExperiences = (objContext) => {
  useEffect(() => {
    objContext.Experience_BusinessLogic.fetchExperienceData(objContext);
  }, [objContext]);
};
