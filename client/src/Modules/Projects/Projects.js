import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Real-Time Chat Application Using Socket.IO",
    description: `• Built a real-time chat application using React, Node.js, and Socket.IO, leveraging the WebSocket protocol for efficient, bidirectional communication and dynamic room-based messaging.
    • Achieved 99% message delivery accuracy and maintained latency under 100ms during concurrent browser testing.`,
    skills: [
      "React",
      "Node.js",
      "Socket.IO",
      "WebSockets",
      "Real-Time Communication",
    ],
    githubLink: "https://github.com/sudarshanreddyc/RealTimeChatApp",
  },
  {
    id: 2,
    title: "House Price Prediction",
    description: `• Developed a machine learning model to predict house prices using Python and Scikit-learn.
      • Trained and tested the model on Melbourne housing data with features like BuildingArea and Price.
      • Achieved high prediction accuracy by comparing Linear Regression and Decision Tree models.`,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Linear Regression",
      "Decision Trees",
      "Data Visualization",
    ],
    githubLink: "https://github.com/sudarshanreddyc/MachineLearnigWithPython",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing personal projects, skills, and experiences.",
    skills: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages",
    ],
    githubLink: "https://github.com/sudarshanreddyc/portfolio/tree/main/client",
  },
  {
    id: 4,
    title: "Bank Loan Default Prediction",
    description: `• Analyzed financial data for 100,000 borrowers using RStudio to conduct loan default analysis.
      • Achieved 96% accuracy in predicting loan defaulters by comparing Random Forest and Gradient Boosting models.`,
    skills: [
      "R",
      "R Studio",
      "Data Mining",
      "Gradient Boosting",
      "Random Forest",
      "Decision Trees",
    ],
    githubLink: "https://github.com/sudarshanreddyc/LoanDefaultPrediction",
  },
];

const Projects = ({ theme }) => {
  return (
    <div
      className={`p-8 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Page Header */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h1>

      {/* Cards Container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
          >
            {/* Project Title */}
            <h2
              className={`text-2xl font-semibold mb-3 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {project.title}
            </h2>

            {/* Project Description */}
            <div className="text-sm mb-4 leading-relaxed">
              {project.description.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {/* Skills Used */}
            <div className="flex flex-wrap mb-4">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`mr-2 mb-2 px-2 py-1 text-xs font-medium rounded ${
                    theme === "dark"
                      ? "bg-blue-700 text-white"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <div className="flex items-center justify-end">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-sm font-semibold ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                View on GitHub <FaGithub className="ml-2 text-xl" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
