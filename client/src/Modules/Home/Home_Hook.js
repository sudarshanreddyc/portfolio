// Initial state object containing all the states
export const initialState = {
  selectedPage: "Home", // Default selected page
  isProfileOpen: false, // Example state for profile toggle
};

// Reducer function to manage state updates
export const homeReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, selectedPage: action.payload }; // Update selected page
    case "TOGGLE_PROFILE":
      return { ...state, isProfileOpen: !state.isProfileOpen }; // Toggle profile state
    default:
      return state; // Return current state if no actions match
  }
};
