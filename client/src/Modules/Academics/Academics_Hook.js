import { useEffect } from "react";

export const initialState = {
  academics: [], // List of added academics
  isDataLoaded: false,
};

// Reducer function to manage state
export const academicsReducer = (state, action) => {
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

// Custom hook to initialize academics data fetch
export const useFetchAcademics = (objContext) => {
  useEffect(() => {
    if (!objContext.state.isDataLoaded) {
      objContext.Academics_BusinessLogic.fetchAcademicsData(objContext);
    }
  }, [objContext.state.isDataLoaded]);
};
