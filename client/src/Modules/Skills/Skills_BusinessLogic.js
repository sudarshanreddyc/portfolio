import { hideLoader, showLoader } from "../../Redux/loader";
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
      objContext.reduxDispatch(showLoader());
      const skills = await fetchData({
        endpoint: "https://localhost:7090/api/Skills/GetData",
      });
      objContext.dispatch({
        type: "SET_STATE",
        payload: {
          skills: skills,
        },
      });
    } catch (error) {
      console.error("Failed to fetch skills data:", error);
    } finally {
      setTimeout(() => {
        objContext.reduxDispatch(hideLoader());
        objContext.dispatch({
          type: "SET_STATE",
          payload: {
            isDataLoaded: true,
          },
        });
      }, 500);
    }
  }
}
