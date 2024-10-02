import React, { useReducer } from "react";
import * as Home_Hook from "./Home_Hook";
import * as Home_BusinessLogic from "./Home_BusinessLogic";

// The main Home component
const Home = () => {
  // Initialize useReducer with homeReducer and initialState
  const [state, dispatch] = useReducer(
    Home_Hook.homeReducer,
    Home_Hook.initialState
  );

  // Create objContext containing state, dispatch, and business logic
  const objContext = {
    state, // Contains all the state information
    dispatch, // Dispatch function to update states
    Home_BusinessLogic: new Home_BusinessLogic.Home_BusinessLogic(), // Initialize Home_BusinessLogic
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">
          👋 Hello, I'm Sudarshan Reddy Chennamareddygagri!
        </h1>
        <p className="text-lg mb-4">
          I'm currently pursuing my Master of Science in Information Studies at{" "}
          <strong>Trine University</strong> and bring 4 years of experience as a{" "}
          <strong>Full Stack Developer</strong>. My passion for programming and
          technology drives me to constantly improve and learn new skills.
        </p>

        <h2 className="text-2xl font-bold mb-2">💻 Proficient Coder:</h2>
        <p className="text-lg mb-4">
          I have solved <strong>150+ coding problems</strong> across various
          platforms, sharpening my problem-solving skills and coding efficiency:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>LeetCode</li>
          <li>GeeksforGeeks</li>
          <li>HackerRank</li>
        </ul>
        <p className="text-lg mb-4">
          I love tackling complex problems and crafting solutions that are not
          only functional but also optimized and scalable.
        </p>

        <h2 className="text-2xl font-bold mb-2">🌟 Technical Skills:</h2>
        <p className="text-lg mb-4">
          <strong>Languages:</strong> C#, .Net, C++, JavaScript, MySQL, HTML/CSS
          <br />
          <strong>Frameworks:</strong> React, .Net Core, Jest, Tailwind CSS
          <br />
          <strong>Developer Tools:</strong> Git, VS Code, Visual Studio
          <br />
          <strong>Deployment & Cloud:</strong> AWS Cloud, Docker, Kubernetes
        </p>

        <h2 className="text-2xl font-bold mb-2">👨‍💻 Core Competencies:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>✔️ Problem-Solving Skills</li>
          <li>✔️ Team Collaboration</li>
          <li>✔️ Time Management</li>
          <li>✔️ Leadership</li>
          <li>✔️ Curiosity & Innovation</li>
          <li>✔️ Strong Communication Skills</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">🚀 Let's Collaborate!</h2>
        <p className="text-lg mb-4">
          I'm always on the lookout for new project collaborations, coding
          challenges, or open positions related to software development, cloud
          technologies, or full-stack engineering. If you're looking for someone
          who is passionate about coding and can contribute to building
          efficient, scalable systems, let's connect!
        </p>

        <p className="text-lg">
          <strong>📧 Reach me at:</strong>{" "}
          <a
            href="mailto:sudarshanreddy.c123@gmail.com"
            className="text-blue-500"
          >
            sudarshanreddy.c123@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
