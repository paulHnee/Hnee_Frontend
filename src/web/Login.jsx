import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add state for error message
  const navigate = useNavigate();

  // Trigger the submit function if Enter is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages

    try {
      const response = await fetch("http://localhost/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store the token in localStorage
      localStorage.setItem("authToken", data.token);
      // Redirect to site
      navigate('/dashboard');

    } catch (err) {
      setError(err.message); // Set the error message
      console.error("Login failed: " + err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Benutzername:</label>
          <input
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={username}
            name="username"
            autocomplete="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyPress}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            value={password}
            name="password"
            autocomplete="current-password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyPress}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit" className="w-full py-3 px-4 bg-modernGreen text-white font-semibold rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Login</button>
      </form>
    </div>
  );
};

export default Login;
