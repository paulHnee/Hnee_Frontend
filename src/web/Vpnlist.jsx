import React, { useState, useEffect } from "react";
import { fetchVPNList, refreshVPNList, deleteVPN } from '../api./api';

function VPN() {
  const [vpnList, setVpnList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchList = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchVPNList();
      setVpnList(data);
    } catch (err) {
      setError("Error fetching VPN list");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const refreshList = async () => {
    setLoading(true);
    try {
      const data = await refreshVPNList();
      setVpnList(data);
    } catch (err) {
      setError('Failed to fetch VPN list');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setError("");
    try {
      await deleteVPN(id);
      setVpnList((prevList) => prevList.filter((vpn) => vpn.ID !== id));
      alert("VPN entry deleted successfully.");
    } catch (err) {
      setError("Error deleting VPN entry");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading VPN list...</p>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">VPN List</h2>
          <table className="table-auto border-collapse border border-gray-400 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-4 py-2">Nummer</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">IP</th>
                <th className="border border-gray-400 px-4 py-2">Public Key</th>
                <th className="border border-gray-400 px-4 py-2"></th>
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
      <button
        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-4"
        onClick={refreshList}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Refresh List'}
      </button>
    </div>
  );
}

export default VPN;
