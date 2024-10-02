export class Home_BusinessLogic {
  // Function to handle page change
  handlePageChange(objContext, page) {
    objContext.dispatch({ type: "SET_PAGE", payload: page });
    console.log(`Navigating to ${page} page`);
  }

  // Function to handle profile toggle
  toggleProfile(objContext) {
    objContext.dispatch({ type: "TOGGLE_PROFILE" });
    console.log("Toggling Profile");
  }

  // Function to handle profile navigation (if needed)
  navigateToProfile(objContext) {
    console.log("Navigating to Profile Page");
    window.location.href = "/profile"; // Simulate profile page navigation
  }
}
