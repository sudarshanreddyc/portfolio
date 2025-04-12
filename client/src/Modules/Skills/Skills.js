import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaVisualStudio,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
  FaCloud,
  FaTools,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiRedis,
} from "react-icons/si";

const categorizedSkills = [
  {
    title: "Languages",
    skills: [
      { icon: <FaCode className="text-gray-700" />, name: "C#" },
      { icon: <FaJava className="text-[#007396]" />, name: "Java" },
      { icon: <SiCplusplus className="text-[#00599C]" />, name: "C++" },
      { icon: <FaPython className="text-[#306998]" />, name: "Python" },
      { icon: <FaJsSquare className="text-[#F7DF1E]" />, name: "JavaScript" },
      { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
      {
        icon: <FaDatabase className="text-[#CC2927]" />,
        name: "Microsoft SQL Server",
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        icon: <SiScikitlearn className="text-[#F7931E]" />,
        name: "Scikit-learn",
      },
      { icon: <SiTensorflow className="text-[#FF6F00]" />, name: "TensorFlow" },
      { icon: <SiPytorch className="text-[#EE4C2C]" />, name: "PyTorch" },
      { icon: <SiKeras className="text-[#D00000]" />, name: "Keras" },
      { icon: <SiPandas className="text-[#150458]" />, name: "Pandas" },
      { icon: <SiNumpy className="text-[#013243]" />, name: "NumPy" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
      { icon: <SiDotnet className="text-[#512BD4]" />, name: ".NET Core" },
      {
        icon: <SiTailwindcss className="text-[#38B2AC]" />,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Cloud / DevOps",
    skills: [
      { icon: <FaDocker className="text-[#0db7ed]" />, name: "Docker" },
      { icon: <FaCloud className="text-[#6875F5]" />, name: "Azure DevOps" },
    ],
  },
  {
    title: "Systems & Storage",
    skills: [
      {
        icon: <FaNetworkWired className="text-[#6B7280]" />,
        name: "Distributed Systems",
      },
      { icon: <SiRedis className="text-[#DC382D]" />, name: "Caching (Redis)" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { icon: <FaGitAlt className="text-[#F1502F]" />, name: "Git" },
      { icon: <FaCode className="text-[#007ACC]" />, name: "VS Code" },
      { icon: <FaTools className="text-gray-600" />, name: "Visual Studio" },
    ],
  },
];

const Skills = ({ theme }) => {
  return (
    <section
      id="skills"
      className={`py-12 px-6 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-extrabold mb-10 text-center ${
          theme === "dark" ? "text-blue-400" : "text-indigo-700"
        }`}
      >
        My Skills
      </h1>

      {categorizedSkills.map((category, idx) => (
        <div key={idx} className="mb-12 w-full max-w-6xl">
          <h2
            className={`text-2xl font-semibold mb-6 ${
              theme === "dark" ? "text-blue-300" : "text-indigo-600"
            }`}
          >
            {category.title}
          </h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
