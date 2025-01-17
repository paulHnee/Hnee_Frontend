import React, { useState, useEffect } from 'react';

const VpnList = ({ vpnList, setVpnList, deleteVPN }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Example of setting loading and error states
    setLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
      // setError('Failed to fetch VPN data'); // Uncomment to simulate an error
    }, 2000);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">VPN List</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
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
                    onClick={() => deleteVPN(vpn.ID)}
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
  );
};

export default VpnList;