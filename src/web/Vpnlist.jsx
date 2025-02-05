import React, { useState, useEffect } from "react";

function VPN() {
  const [vpnList, setVpnList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE_URL = "http://localhost:5000/api";

  // Fetch VPN List
  const fetchVPNList = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/vpn-list`);
      if (!response.ok) {
        throw new Error("Failed to fetch VPN list");
      }
      const data = await response.json();
      setVpnList(data);
    } catch (err) {
      setError(err.message || "Error fetching VPN list");
    } finally {
      setLoading(false);
    }
  };

  // Delete a VPN entry
     const handleDelete = async (id) => {
         setLoading(true);
         try {
             const response = await fetch(`${API_BASE_URL}/vpn/${id}`, {
                 method: 'DELETE',
             });
             if (response.ok) {
                 alert('VPN entry deleted');
                 fetchVPNList(); // Refresh VPN list after deletion
             } else {
                 setError('Error deleting VPN entry');
             }
         } catch (err) {
             setError('Failed to delete VPN entry');
         } finally {
             setLoading(false);
         }
     };

  // Fetch the VPN list when the component loads
  useEffect(() => {
    fetchVPNList();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">VPN Management</h1>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}

      {/* Loading Indicator */}
      {loading ? (
        <p>Loading VPN list...</p>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">VPN List</h2>
          <table className="table-auto border-collapse border border-gray-400 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">IP</th>
                <th className="border border-gray-400 px-4 py-2">Public Key</th>
                <th className="border border-gray-400 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vpnList.length > 0 ? (
                vpnList.map((vpn) => (
                  <tr key={vpn.ID} className="hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-2">{vpn.ID}</td>
                    <td className="border border-gray-400 px-4 py-2">{vpn.Name}</td>
                    <td className="border border-gray-400 px-4 py-2">{vpn.IP}</td>
                    <td className="border border-gray-400 px-4 py-2">{vpn.public_key}</td>
                    <td className="border border-gray-400 px-4 py-2">
                      <button
                        onClick={() => handleDelete(vpn.ID)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No VPN data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default VPN;
