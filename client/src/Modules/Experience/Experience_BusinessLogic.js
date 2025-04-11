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
          responsibilities: `• Led UI migration of Angles for SAP, an analytical tool from Knockout.js to React, improving page load speed by 25%
and contributing to client acquisition worth over $1M.
• Refactored microservices and automated CI/CD pipelines, reducing latency and cutting release cycles by 30%.
• Conducted code reviews and defined development standards, improving efficiency and reducing onboarding time by 50%.`,
          fromDate: "01/2024",
          toDate: "07/2024",
        },
        {
          id: 2,
          jobTitle: "Software Engineer",
          company: "Arcadix Infotech Pvt Ltd",
          logo: process.env.PUBLIC_URL + "/assets/Arcadix.jpg",
          responsibilities: `• Architected a Student Dashboard using React, Node.js, and SQL to deliver real-time academic reports.
• Designed and implemented a centralized logging and error-handling module, reducing debugging time by 40%.
• Achieved 95% test coverage through unit and integration testing using NUnit and TDD practices.
• Implemented real-time grade updates with SignalR, instantly displaying test scores on performance dashboards.`,
          fromDate: "12/2021",
          toDate: "01/2024",
        },
        {
          id: 3,
          jobTitle: "Software Engineer",
          company: "Odessa Technologies",
          logo: process.env.PUBLIC_URL + "/assets/Odessa.png",
          responsibilities: `• Built reusable React components and RESTful APIs for LeaseWave, reducing code duplication by 30%.
• Optimized queries and indexing, improving execution speed by 30% and backend performance.
• Implemented encryption techniques, reducing data leakage by 25% and ensuring security compliance.
• Contributed over 30K lines of code to a large-scale production codebase via Git and peer reviews.`,
          fromDate: "09/2019",
          toDate: "11/2021",
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
