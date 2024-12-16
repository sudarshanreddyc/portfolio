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
          responsibilities: `
            • Migrated an analytical tool from Knockout.js to React with .NET and SQL backend, improving performance by 25% and maintainability, implemented encoding/decoding in .NET to secure sensitive data, and optimized CI/CD pipelines with Azure DevOps, reducing deployment times by 30%.
          `,
          fromDate: "01/2024",
          toDate: "07/2024",
        },
        {
          id: 2,
          jobTitle: "Software Engineer",
          company: "Arcadix Infotech Pvt Ltd",
          responsibilities: `
            • Proposed and led the migration from Angular.js to React for the School Management System, improving performance by 30% and reducing technical debt, integrated SignalR for real-time updates of students' marks, and developed scalable .NET and SQL Server web APIs with microservice architecture, integrating Elasticsearch to improve search performance by 40% and system reliability.
          `,
          fromDate: "12/2021",
          toDate: "01/2024",
        },
        {
          id: 3,
          jobTitle: "Software Engineer",
          company: "Odessa Technologies",
          responsibilities: `
            • Contributed to the development of LeaseWave, a global lease management system, by optimizing backend processes with .NET Core, C#, React, and Dapper, improved SQL query efficiency to reduce database response times by 15%, streamlined CI/CD pipelines using Azure DevOps, and practiced TDD with NUnit and Jest, enhancing code quality and reducing bugs by 25%.
          `,
          fromDate: "07/2020",
          toDate: "11/2021",
        },
        {
          id: 4,
          jobTitle: "Software Engineer Intern",
          company: "Odessa Technologies",
          responsibilities: `
            • Optimized backend processes for LeaseWave, a global lease management system, using .NET Core, C#, React, and Dapper, enhancing performance and scalability; improved SQL query efficiency, reducing database response times by 15%, and streamlined CI/CD pipelines with Azure DevOps, boosting team productivity and deployment reliability.
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
