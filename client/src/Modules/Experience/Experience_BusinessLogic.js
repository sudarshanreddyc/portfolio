import { fetchData } from "../../Services/portfolioservice";
import { hideLoader, showLoader } from "../../Redux/loader";

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
      objContext.reduxDispatch(showLoader());
      const experiences = await fetchData({
        endpoint: "https://localhost:7090/api/Experience/GetData",
      });
      objContext.dispatch({
        type: "SET_STATE",
        payload: {
          experiences: experiences,
        },
      });
    } catch (error) {
      console.error("Failed to fetch experience data:", error);
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
