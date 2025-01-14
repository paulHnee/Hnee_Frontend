import React, { useState, useEffect } from 'react';

const apiBaseUrl = 'http://10.1.2.164:5000/api';

const isTokenExpired = (token) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.exp * 1000 < Date.now();
};

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('No refresh token available');

  const response = await fetch(`${apiBaseUrl}/refresh-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    return data.accessToken;
  } else {
    throw new Error('Failed to refresh access token');
  }
};

const fetchWithToken = async (url, options = {}) => {
  let accessToken = localStorage.getItem('accessToken');

  if (isTokenExpired(accessToken)) {
    try {
      accessToken = await refreshAccessToken();
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      throw error;
    }
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch');
  }

  return response.json();
};

const VpnList = ({ vpnList, setVpnList, deleteVPN }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchVPNList = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWithToken(`${apiBaseUrl}/vpn-list`);
      setVpnList(data);
    } catch (err) {
      console.error('Error fetching VPN list:', err);
      setError(err.message || 'Error fetching VPN list');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVPNList();
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