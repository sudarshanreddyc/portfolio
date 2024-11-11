import { fetchData } from "../../Services/portfolioservice";

export class Skills_BusinessLogic {
  // Handle form input changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Fetch skills data from the API
  async fetchSkillsData(objContext) {
    try {
      const skills = await fetchData({
        endpoint:
          "https://my-api-portfolio-e6bmdse4e6h3azgw.canadacentral-01.azurewebsites.net/api/Skills/GetData",
      });
      objContext.dispatch({
        type: "SET_SKILLS",
        payload: skills,
      });
    } catch (error) {
      console.error("Failed to fetch skills data:", error);
    }
  }
}
