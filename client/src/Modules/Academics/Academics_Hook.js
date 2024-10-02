import { useEffect } from "react";

export const initialState = {
  academics: [], // List of added academics
  newAcademic: {
    school: "",
    grade: "",
    level: "",
    fromDate: "",
    toDate: "",
  },
};

// Reducer function to manage state
export const academicsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        newAcademic: {
          ...state.newAcademic,
          [action.field]: action.value,
        },
      };
    case "SET_ACADEMICS":
      return {
        ...state,
        academics: action.payload,
      };
    default:
      return state;
  }
};

// Custom hook to initialize academics data fetch
export const useFetchAcademics = (objContext) => {
  useEffect(() => {
    objContext.Academics_BusinessLogic.fetchAcademicsData(objContext);
  }, []);
};
