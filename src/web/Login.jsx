import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      //!ONLY FOR DEMO PURPOSES
      if (username === "admin" && password === "admin123") {
        localStorage.setItem("authToken", "admin");
        console.info("Login successful: admin");
        navigate("/dashboard");
      } 
        const data = await login(username, password);
        localStorage.setItem("authToken", data.token);
        console.info("Login successful: user");
        navigate('/dashboard');
      
    } catch (err) {
      setError(err.message);
      console.error("Login failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Username and password are required.");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  return (
    <div className="max-w-sm mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="username">Benutzername:</label>
          <input
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="username"
            value={username}
            name="username"
            autoComplete="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyPress}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password:</label>
          <input
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            value={password}
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyPress}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button type="submit" className="w-full py-3 px-4 bg-modernGreen text-white font-semibold rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
