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
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex flex-col items-center">
      {isDataLoaded ? (
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
            Certifications
          </h1>
          <ul className="space-y-6">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col"
              >
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {cert.title}
                </div>
                <div className="text-sm text-gray-600">{cert.provider}</div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-600 underline hover:text-blue-800"
                  >
                    View Certification
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-xl font-semibold text-gray-800 animate-pulse flex items-center space-x-4">
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
  );
};

export default Certifications;
