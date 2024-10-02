import { useEffect } from "react";

export const initialState = {
  skills: [], // List of added skills
  newSkill: {
    skillName: "",
    proficiency: "",
  },
};

// Reducer function to manage state
export const skillsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        newSkill: {
          ...state.newSkill,
          [action.field]: action.value,
        },
      };
    case "SET_SKILLS":
      return {
        ...state,
        skills: action.payload,
      };
    default:
      return state;
  }
};

// Custom hook to initialize skills data fetch
export const useFetchSkills = (objContext) => {
  useEffect(() => {
    objContext.Skills_BusinessLogic.fetchSkillsData(objContext);
  }, []);
};
