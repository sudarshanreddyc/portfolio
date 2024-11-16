import { fetchData } from "../../Services/portfolioservice";

export class Experience_BusinessLogic {
  // Handle form input changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Fetch experience data from the API
  async fetchExperienceData(objContext) {
    try {
      const experiences = await fetchData({
        endpoint:
          "https://myportifolioapi.azurewebsites.net/api/Experience/GetData",
      });
      objContext.dispatch({
        type: "SET_EXPERIENCES",
        payload: experiences,
      });
    } catch (error) {
      console.error("Failed to fetch experience data:", error);
    }
  }
}
