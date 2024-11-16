import { fetchData } from "../../Services/portfolioservice";

export class Academics_BusinessLogic {
  // Handle form input changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Fetch academics data from the API
  async fetchAcademicsData(objContext) {
    try {
      const academics = await fetchData({
        endpoint:
          "https://myportifolioapi.azurewebsites.net/API/Academics/GetData",
      });
      objContext.dispatch({
        type: "SET_ACADEMICS",
        payload: academics,
      });
    } catch (error) {
      console.error("Failed to fetch academics data:", error);
    }
  }
}
