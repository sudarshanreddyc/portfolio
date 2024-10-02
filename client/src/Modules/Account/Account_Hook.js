// Initial state
export const initialState = {
  username: "JohnDoe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  profilePicture: "", // URL of the profile picture
};

// Reducer function to handle state updates
export const accountReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "UPDATE_PROFILE_PICTURE":
      return {
        ...state,
        profilePicture: action.value,
      };
    default:
      return state;
  }
};
