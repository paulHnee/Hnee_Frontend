import React, { useState, useEffect } from "react";
import VPN from "./VPN";
import Login from "./Login";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    if (!isAuthenticated) {
        return <Login onLogin={handleLogin} />;
    }

    return <VPN />;
};

export default App;
