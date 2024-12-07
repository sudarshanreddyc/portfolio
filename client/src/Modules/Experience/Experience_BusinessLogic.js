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
            • Migrated an analytical tool from Knockout.js to React, leveraging .NET and SQL for backend operations, resulting in a 25% improvement in performance and enhanced maintainability, leading to faster load times and easier feature updates.
            • Detected and resolved a security vulnerability by implementing encoding and decoding mechanisms in .NET to protect sensitive data between the backend and browser, ensuring secure communication.
            • Optimized CI/CD pipelines using Azure DevOps, reducing deployment times by 30%.
          `,
          fromDate: "2024-01-05",
          toDate: "2024-07-30",
        },
        {
          id: 2,
          jobTitle: "Software Engineer",
          company: "Arcadix Infotech Pvt Ltd",
          responsibilities: `
            • Proposed and led the migration from Angular.js to React for the School Management System, improving performance by 30% and reducing technical debt.
            • Integrated SignalR to update students' marks in real-time in their profiles after exams, ensuring immediate updates.
            • Designed and developed scalable web APIs using .NET and SQL Server with a microservice architecture, and integrated Elasticsearch for faster data retrieval, improving system reliability, efficiency, and search performance by 40%.
          `,
          fromDate: "2021-12-01",
          toDate: "2024-01-01",
        },
        {
          id: 3,
          jobTitle: "Software Engineer",
          company: "Odessa Technologies",
          responsibilities: `
            • Contributed to the development of LeaseWave, a global lease management system, optimizing backend processes using .NET Core, C#, React, and Dapper.
            • Improved query efficiency by optimizing SQL queries, reducing database response times by 15%, and streamlined CI/CD deployment processes using Azure DevOps, enhancing team productivity and deployment reliability.
            • Practiced test-driven development (TDD) with NUnit and Jest, improving code quality and reducing bugs by 25%.
          `,
          fromDate: "2020-07-01",
          toDate: "2021-11-30",
        },
        {
          id: 4,
          jobTitle: "Software Engineer Intern",
          company: "Odessa Technologies",
          responsibilities: `
            • Contributed to the development of LeaseWave, a global lease management system, optimizing backend processes using .NET Core, C#, React, and Dapper.
            • Improved query efficiency by optimizing SQL queries, reducing database response times by 15%, and streamlined CI/CD deployment processes using Azure DevOps, enhancing team productivity and deployment reliability.
          `,
          fromDate: "2019-09-01",
          toDate: "2020-07-30",
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
