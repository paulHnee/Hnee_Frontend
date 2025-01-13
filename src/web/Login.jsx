import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  // Trigger the submit function if Enter is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://10.1.2.164:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      //store the token in localStorage
      localStorage.setItem("authToken", data.token);
      // Redirect to site
      navigate('/dashboard');

    } catch (err) {
      console.error(err.message);
      console.error("Login failed: " + err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            value={email}
            name="email"
            autocomplete="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="w-full py-3 px-4 bg-modernGreen text-white font-semibold rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Login</button>
      </form>
    </div>
  );
};

export default Login;
