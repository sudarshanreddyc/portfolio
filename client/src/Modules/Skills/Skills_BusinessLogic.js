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
      // const skills = await fetchData({
      //   endpoint:
      //     "https://myportifolioapi.azurewebsites.net/api/Skills/GetData",
      // });
      const skills = [
        { id: 5, skill: "C#", proficiency: null, category: "Languages" },
        { id: 6, skill: "Java", proficiency: null, category: "Languages" },
        { id: 7, skill: "C++", proficiency: null, category: "Languages" },
        { id: 8, skill: "Python", proficiency: null, category: "Languages" },
        {
          id: 9,
          skill: "Javascript",
          proficiency: null,
          category: "Languages",
        },
        {
          id: 9,
          skill: "TypeScript",
          proficiency: null,
          category: "Languages",
        },
        {
          id: 10,
          skill: "Microsoft SQL Server",
          proficiency: null,
          category: "Languages",
        },
        { id: 11, skill: "HTML/CSS", proficiency: null, category: "Languages" },
        { id: 12, skill: "React", proficiency: null, category: "Frameworks" },
        {
          id: 13,
          skill: ".Net core",
          proficiency: null,
          category: "Frameworks",
        },
        { id: 14, skill: "Dapper", proficiency: null, category: "Frameworks" },
        { id: 15, skill: "Jest", proficiency: null, category: "Frameworks" },
        {
          id: 16,
          skill: "Tailwind-CSS",
          proficiency: null,
          category: "Frameworks",
        },
        {
          id: 17,
          skill: "Git",
          proficiency: null,
          category: "Developer Tools",
        },
        {
          id: 18,
          skill: "VS Code",
          proficiency: null,
          category: "Developer Tools",
        },
        {
          id: 19,
          skill: "Visual Studio",
          proficiency: null,
          category: "Developer Tools",
        },
        {
          id: 20,
          skill: "Microsoft Azure",
          proficiency: null,
          category: "Cloud/Devops",
        },
        { id: 21, skill: "CI/CD", proficiency: null, category: "Cloud/Devops" },
        {
          id: 22,
          skill: "Cloudflare",
          proficiency: null,
          category: "Cloud/Devops",
        },
        {
          id: 23,
          skill: "Docker",
          proficiency: null,
          category: "Cloud/Devops",
        },
        {
          id: 24,
          skill: "Data structures and Algorithms",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 25,
          skill: "Elastic search",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 26,
          skill: "Web API",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 27,
          skill: "Agile methodologies",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 28,
          skill: "Problem solving skills",
          proficiency: null,
          category: "Other Skills",
        },
      ];

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
