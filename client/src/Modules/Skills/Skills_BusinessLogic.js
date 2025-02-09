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
        // Languages
        { id: 5, skill: "C#", proficiency: null, category: "Languages" },
        { id: 6, skill: "Java", proficiency: null, category: "Languages" },
        { id: 7, skill: "C++", proficiency: null, category: "Languages" },
        { id: 8, skill: "Python", proficiency: null, category: "Languages" },
        {
          id: 9,
          skill: "JavaScript",
          proficiency: null,
          category: "Languages",
        },
        {
          id: 10,
          skill: "TypeScript",
          proficiency: null,
          category: "Languages",
        },
        {
          id: 11,
          skill: "Microsoft SQL Server",
          proficiency: null,
          category: "Languages",
        },
        { id: 12, skill: "HTML/CSS", proficiency: null, category: "Languages" },

        // Machine Learning
        {
          id: 13,
          skill: "Scikit-learn",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 14,
          skill: "TensorFlow",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 15,
          skill: "PyTorch",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 16,
          skill: "Pandas",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 17,
          skill: "NumPy",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 18,
          skill: "Keras",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 19,
          skill: "Matplotlib",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 20,
          skill: "Seaborn",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 21,
          skill: "Feature Engineering",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 22,
          skill: "Model Optimization",
          proficiency: null,
          category: "Machine Learning",
        },
        {
          id: 23,
          skill: "Data Visualization",
          proficiency: null,
          category: "Machine Learning",
        },

        // Frameworks
        { id: 24, skill: "React", proficiency: null, category: "Frameworks" },
        {
          id: 25,
          skill: ".Net core",
          proficiency: null,
          category: "Frameworks",
        },
        { id: 26, skill: "Dapper", proficiency: null, category: "Frameworks" },
        { id: 27, skill: "Jest", proficiency: null, category: "Frameworks" },
        {
          id: 28,
          skill: "Tailwind-CSS",
          proficiency: null,
          category: "Frameworks",
        },

        // Developer Tools
        {
          id: 29,
          skill: "Git",
          proficiency: null,
          category: "Developer Tools",
        },
        {
          id: 30,
          skill: "VS Code",
          proficiency: null,
          category: "Developer Tools",
        },
        {
          id: 31,
          skill: "Visual Studio",
          proficiency: null,
          category: "Developer Tools",
        },

        // Cloud/DevOps
        {
          id: 32,
          skill: "Microsoft Azure",
          proficiency: null,
          category: "Cloud/DevOps",
        },
        { id: 33, skill: "CI/CD", proficiency: null, category: "Cloud/DevOps" },
        {
          id: 34,
          skill: "Cloudflare",
          proficiency: null,
          category: "Cloud/DevOps",
        },
        {
          id: 35,
          skill: "Docker",
          proficiency: null,
          category: "Cloud/DevOps",
        },

        // Other Skills
        {
          id: 36,
          skill: "Data structures and Algorithms",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 37,
          skill: "Elastic Search",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 38,
          skill: "Web API",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 39,
          skill: "Agile Methodologies",
          proficiency: null,
          category: "Other Skills",
        },
        {
          id: 40,
          skill: "Problem Solving Skills",
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
