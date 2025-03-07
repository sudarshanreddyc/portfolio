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
      // const experiences = await fetchData({
      //   endpoint:
      //     "https://myportifolioapi.azurewebsites.net/api/Experience/GetData",
      // });
      const experiences = [
        {
          id: 1,
          jobTitle: "Software Engineer",
          company: "Insightsoftware",
          logo: process.env.PUBLIC_URL + "/assets/Insightsoftware.png",
          responsibilities: `
                • Migrated an analytical tool from a legacy framework to a modern front-end framework, improving performance by 25% and maintainability. Implemented data encoding/decoding to secure sensitive data and optimized deployment pipelines, reducing deployment times by 30%.
            `,
          fromDate: "01/2024",
          toDate: "07/2024",
        },
        {
          id: 2,
          jobTitle: "Software Engineer",
          company: "Arcadix Infotech Pvt Ltd",
          logo: process.env.PUBLIC_URL + "/assets/Arcadix.jpg",
          responsibilities: `
                • Proposed and led the migration of a School Management System from an older framework to a modern front-end framework, improving performance by 30% and reducing technical debt. Integrated real-time updates for student marks and developed scalable APIs with microservices, improving search performance by 40% and system reliability.
            `,
          fromDate: "12/2021",
          toDate: "01/2024",
        },
        {
          id: 3,
          jobTitle: "Software Engineer",
          company: "Odessa Technologies",
          logo: process.env.PUBLIC_URL + "/assets/Odessa.png",
          responsibilities: `
                • Contributed to the development of a global lease management system by optimizing backend processes, improving query efficiency to reduce database response times by 15%, streamlining deployment pipelines, and practicing test-driven development to enhance code quality and reduce bugs by 25%.
            `,
          fromDate: "07/2020",
          toDate: "11/2021",
        },
        {
          id: 4,
          jobTitle: "Software Engineer Intern",
          company: "Odessa Technologies",
          logo: process.env.PUBLIC_URL + "/assets/Odessa.png",
          responsibilities: `
                • Optimized backend processes for a global lease management system, enhancing performance and scalability; improved query efficiency, reducing database response times by 15%, and streamlined deployment pipelines, boosting team productivity and deployment reliability.
            `,
          fromDate: "09/2019",
          toDate: "06/2020",
        },
      ];

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
