// Initial state object containing all the states
export const initialState = {
  selectedPage: "Home", // Default selected page
  isProfileOpen: false, // Example state for profile toggle
  showLoader: true,
};

// Reducer function to manage state updates
export const homeReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, selectedPage: action.payload }; // Update selected page
    case "TOGGLE_PROFILE":
      return { ...state, isProfileOpen: !state.isProfileOpen }; // Toggle profile state
    case "SET_LOADER":
      return { ...state, showLoader: action.payload }; // Set loader state
    default:
      return state; // Return current state if no actions match
  }
};
