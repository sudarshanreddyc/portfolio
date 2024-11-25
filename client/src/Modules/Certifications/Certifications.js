import React, { useState, useEffect } from "react";

const Certifications = () => {
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
          url: "https://shorturl.at/NhYSO",
        },
      ]);
      setIsDataLoaded(true);
    }, 500); // Simulated delay
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      {isDataLoaded ? (
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-6">
          <ul className="list-disc pl-5">
            {certifications.map((cert, index) => (
              <li key={index} className="mb-2 text-gray-800">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {cert.title} – {cert.provider}
                  </a>
                ) : (
                  `${cert.title} – ${cert.provider}`
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-gray-500">
          Loading academic data, please wait...
        </div>
      )}
    </div>
  );
};

export default Certifications;
