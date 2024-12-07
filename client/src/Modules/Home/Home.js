import React, { useReducer, useEffect } from "react";
import * as Home_Hook from "./Home_Hook";
import * as Home_BusinessLogic from "./Home_BusinessLogic";
import Navbar from "../../Components/NavBar";

// The main Home component
const Home = () => {
  const [state, dispatch] = useReducer(
    Home_Hook.homeReducer,
    Home_Hook.initialState
  );

  const objContext = {
    state,
    dispatch,
    Home_BusinessLogic: new Home_BusinessLogic.Home_BusinessLogic(),
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "SET_LOADER", payload: false });
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      {/* Main Content */}
      <div className="content">
        <div className="min-h-screen flex justify-center p-8 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
          {!state.showLoader ? (
            <div className="max-w-4xl bg-white shadow-lg rounded-lg p-10 text-gray-800">
              <h1 className="text-4xl font-extrabold mb-6">
                👋 Hello, I'm Sudarshan Reddy Chennamareddygari!
              </h1>
              <p className="text-xl mb-6">
                I'm currently pursuing my Master of Science in Information
                Studies at <strong>Trine University</strong> and bring 5 years
                of experience as a <strong>Full Stack Developer</strong>. My
                passion for programming and technology drives me to constantly
                improve and learn new skills.
              </p>

              <h2 className="text-2xl font-bold mb-4">💻 Proficient Coder:</h2>
              <p className="text-lg mb-4">
                I have solved <strong>150+ coding problems</strong> across
                various platforms, sharpening my problem-solving skills and
                coding efficiency:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>LeetCode</li>
                <li>GeeksforGeeks</li>
                <li>HackerRank</li>
              </ul>
              <p className="text-lg mb-6">
                I love tackling complex problems and crafting solutions that are
                not only functional but also optimized and scalable.
              </p>

              <h2 className="text-2xl font-bold mb-4">🌟 Technical Skills:</h2>
              <p className="text-lg mb-6">
                <strong>Languages:</strong> C#, .Net, C++, JavaScript, MySQL,
                HTML/CSS
                <br />
                <strong>Frameworks:</strong> React, .Net Core, Jest, Tailwind
                CSS
                <br />
                <strong>Developer Tools:</strong> Git, VS Code, Visual Studio
                <br />
                <strong>Deployment & Cloud:</strong> AWS Cloud, Docker,
                Kubernetes
              </p>

              <h2 className="text-2xl font-bold mb-4">👨‍💻 Core Competencies:</h2>
              <ul className="list-disc list-inside mb-6">
                <li>✔️ Problem-Solving Skills</li>
                <li>✔️ Team Collaboration</li>
                <li>✔️ Time Management</li>
                <li>✔️ Leadership</li>
                <li>✔️ Curiosity & Innovation</li>
                <li>✔️ Strong Communication Skills</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">🚀 Let's Collaborate!</h2>
              <p className="text-lg mb-6">
                I'm always on the lookout for new project collaborations, coding
                challenges, or open positions related to software development,
                cloud technologies, or full-stack engineering. If you're looking
                for someone who is passionate about coding and can contribute to
                building efficient, scalable systems, let's connect!
              </p>

              <p className="text-lg">
                <strong>📧 Reach me at:</strong>{" "}
                <a
                  href="mailto:sudarshanreddy.c123@gmail.com"
                  className="text-blue-600"
                >
                  sudarshanreddy.c123@gmail.com
                </a>
              </p>
            </div>
          ) : (
            <div className="text-xl font-semibold text-gray-800 animate-pulse flex space-x-4">
              <svg
                className="animate-spin h-8 w-8 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <span>Loading data, please wait...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
