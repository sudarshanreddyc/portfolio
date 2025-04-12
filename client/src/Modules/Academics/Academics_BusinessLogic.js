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
      // const academics = await fetchData({
      //   endpoint:
      //     "https://myportifolioapi.azurewebsites.net/API/Academics/GetData",
      // });

      const academics = [
        {
          id: 1,
          school: "Trine University",
          percentage: 4.0,
          level: "Graduate",
          location: "Detroit, MI, United States",
          fromDate: "2024-08-01",
          toDate: "Present",
          logo: process.env.PUBLIC_URL + "/assets/Trine.jpg",
        },
        {
          id: 2,
          school: "Lovely Professional University",
          percentage: 9.54,
          level: "Undergraduate",
          location: "Punjab, India",
          fromDate: "2016-07-01",
          toDate: "2020-06-01",
          logo: process.env.PUBLIC_URL + "/assets/Lpu.png",
        },
        // {
        //   id: 3,
        //   school: "Sri Sai Jr College",
        //   percentage: 97.5,
        //   level: "Intermediate",
        //   location: "Anantapur, Andhrapradesh, India",
        //   fromDate: "2014-06-01",
        //   toDate: "2016-03-25",
        //   //logo: "/LC.jpg", // Add college logo path
        // },
      ];

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
