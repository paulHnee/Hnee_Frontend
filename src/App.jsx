import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Front, ITSZ, Login, Dashboard } from './web';
import { Layout } from './Layout';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Optionally, you can add token expiry check here
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/.env" element={<Navigate to="/" />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Front />} />
            <Route path="/itsz" element={<ITSZ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/vpn" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;