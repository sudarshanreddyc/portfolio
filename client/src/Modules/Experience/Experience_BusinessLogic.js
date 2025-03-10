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
          responsibilities: `Designed and implemented APIs for secure data handling, improving overall system security. Developed and deployed scalable microservices architecture, enhancing system performance and maintainability.Optimized deployment pipelines, reducing deployment times by 30%.Enhanced performance and maintainability of analytical tools, improving efficiency by 25%.`,
          fromDate: "01/2024",
          toDate: "07/2024",
        },
        {
          id: 2,
          jobTitle: "Software Engineer",
          company: "Arcadix Infotech Pvt Ltd",
          logo: process.env.PUBLIC_URL + "/assets/Arcadix.jpg",
          responsibilities: `Designed and implemented scalable APIs with microservices architecture, improving system reliability and search performance by 40%.Integrated real-time updates for student marks, enhancing system responsiveness.Improved system performance by 30% and reduced technical debt through modernization efforts.Enhanced the School Management System's maintainability and performance with strategic updates.`,
          fromDate: "12/2021",
          toDate: "01/2024",
        },
        {
          id: 3,
          jobTitle: "Software Engineer",
          company: "Odessa Technologies",
          logo: process.env.PUBLIC_URL + "/assets/Odessa.png",
          responsibilities: `Designed and implemented scalable backend processes, enhancing query efficiency and reducing database response times by 15%.Developed and maintained deployment pipelines, streamlining the deployment process.Practiced test-driven development to enhance code quality and reduce bugs by 25%.Contributed to the global lease management system, improving overall system performance and reliability.`,
          fromDate: "07/2020",
          toDate: "11/2021",
        },
        {
          id: 4,
          jobTitle: "Software Engineer Intern",
          company: "Odessa Technologies",
          logo: process.env.PUBLIC_URL + "/assets/Odessa.png",
          responsibilities: `
                • Optimized backend processes, enhancing performance and scalability; improved query efficiency, reducing database response times by 15%, and streamlined deployment pipelines, boosting team productivity and deployment reliability.
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
