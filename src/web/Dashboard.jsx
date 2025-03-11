import React, { useState, useEffect } from 'react';
import { VPN } from './index';
import ErrorBoundary from '../components/ErrorBoundary'; // Ensure you have an ErrorBoundary component

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const fetchData = async () => {
      try {
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <ErrorBoundary>
        <div className="container">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="grid grid-cols-2 gap-4">
            <VPN />
          </div>
        </div>
      </ErrorBoundary>
  );
}

export default Dashboard;