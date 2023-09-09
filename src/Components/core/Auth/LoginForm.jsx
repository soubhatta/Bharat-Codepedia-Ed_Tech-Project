import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">User Login</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleOnChange}
            placeholder="Enter your username"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/forgot-password" className="text-blue-500 hover:underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
