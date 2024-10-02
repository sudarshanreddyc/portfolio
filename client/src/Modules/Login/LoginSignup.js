import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginSignup = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", email: "", password: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Assume login is always successful for now
      console.log("Logging in with: ", formData);
      navigate("/home"); // Navigate to Home page on successful login
    } else {
      console.log("Signing up with: ", formData);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? "Login" : "Signup"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
            {isLogin ? " Signup here" : " Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
