import { fetchData } from "../../Services/portfolioservice";
import { hideLoader, showLoader } from "../../Redux/loader";

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
      objContext.reduxDispatch(showLoader());
      const academics = await fetchData({
        endpoint: "https://localhost:7090/API/Academics/GetData",
      });
      objContext.dispatch({
        type: "SET_STATE",
        payload: {
          academics: academics,
        },
      });
    } catch (error) {
      console.error("Failed to fetch academics data:", error);
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
