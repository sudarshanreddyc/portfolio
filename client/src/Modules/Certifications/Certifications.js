import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Certifications = ({ theme }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCertifications([
        {
          title: "Best Team - Odessa Hackathon",
          provider: "GitHub",
          url: "https://github.com/sudarshanreddyc/ai-requirement-extractor",
          //logo: process.env.PUBLIC_URL + "/assets/github-mark.png",
          description:
            "Built an LLM-powered AI Requirement Extractor using React.js and Hugging Face Mistral-7B. Improved efficiency by 70%, reduced API latency by 40%, and token usage by 30%.",
        },
        {
          title: "Problem Solving (Intermediate)",
          provider: "Hackerrank",
          url: "https://www.hackerrank.com/certificates/2723d700e997",
          logo: process.env.PUBLIC_URL + "/assets/Hackerrank.png",
        },
        {
          title: "Data Structures and Algorithms",
          provider: "GeeksForGeeks",
          url: "https://shorturl.at/Ot1VR",
          logo: process.env.PUBLIC_URL + "/assets/GFG.jpg",
        },
        {
          title: "All in One Python Development Suite",
          provider: "Simplilearn",
          url: "https://drive.google.com/file/d/10z_c4V7KogzmPktiFfwd1Nq-d9y84Lvw/view?usp=embed_facebook",
          logo: process.env.PUBLIC_URL + "/assets/Simplilearn.png",
        },
        {
          title: ".NET, JavaScript, SQL Certification",
          provider: "Odessa Technologies",
          logo: process.env.PUBLIC_URL + "/assets/Odessa.png",
        },
        {
          title: "Javascript Certification",
          provider: "Udemy",
          url: "https://shorturl.at/NhYSO",
          logo: process.env.PUBLIC_URL + "/assets/Udemy.png",
        },
        {
          title: "Complete ReactJs Certification",
          provider: "Udemy",
          url: "https://www.udemy.com/certificate/UC-b42d0ce1-5d65-4643-ad43-712f5555b957/",
          logo: process.env.PUBLIC_URL + "/assets/Udemy.png",
        },
      ]);
      setIsDataLoaded(true);
    }, 500);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div
      className={`p-8 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-extrabold mb-8 ${
          theme === "dark" ? "text-blue-400" : "text-indigo-700"
        }`}
      >
        Certifications & Achievements
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className={`p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            {/* {cert.logo && (
              <img
                src={cert.logo}
                alt={`${cert.provider} logo`}
                className="w-12 h-12 object-contain mb-2"
              />
            )} */}
            <h2
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" ? "text-blue-300" : "text-indigo-600"
              }`}
            >
              {cert.title}
            </h2>
            {cert.provider != "GitHub" && (
              <p className="text-sm mb-2 font-medium">{cert.provider}</p>
            )}
            {cert.description && (
              <p className="text-sm mb-2 leading-snug">{cert.description}</p>
            )}
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-sm font-semibold underline ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-600"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                {cert.provider === "GitHub" ? "GitHub" : "View Certification"}
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
