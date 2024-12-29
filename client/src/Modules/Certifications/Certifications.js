import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Certifications = ({ theme }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch certification data
    setTimeout(() => {
      setCertifications([
        {
          title: "Data Structures and Algorithms",
          provider: "GeeksForGeeks",
          url: "https://shorturl.at/Ot1VR",
        },
        {
          title: "All in One Python Development Suite",
          provider: "Simplilearn",
          url: "https://drive.google.com/file/d/10z_c4V7KogzmPktiFfwd1Nq-d9y84Lvw/view?usp=embed_facebook",
        },
        {
          title: ".NET, JavaScript, SQL Certification",
          provider: "Odessa Technologies",
        },
        {
          title: "Javascript Certification",
          provider: "Udemy",
          url: "https://shorturl.at/NhYSO",
        },
        {
          title: "Complete ReactJs Certification",
          provider: "Udemy",
          url: "https://www.udemy.com/certificate/UC-b42d0ce1-5d65-4643-ad43-712f5555b957/",
        },
      ]);
      setIsDataLoaded(true);
    }, 500);
  }, []);

  // Framer-motion animation variants
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
      className={`min-h-screen p-8 flex flex-col items-center ${
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
        Certifications
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
            <h2
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" ? "text-blue-300" : "text-indigo-600"
              }`}
            >
              {cert.title}
            </h2>
            <p className="text-sm mb-4">{cert.provider}</p>
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
                View Certification
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
