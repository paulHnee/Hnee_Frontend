import React, { useState, useEffect } from 'react';
import VpnList from './Vpnlist';

function VPN() {
    const [publicKey, setPublicKey] = useState('');
    const [vpnList, setVpnList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [deviceType, setDeviceType] = useState('');  // New state for device type selection

    const apiBaseUrl = 'http://localhost:5000/api'; // Your Express API base URL

    // Function to send public key to the backend
    const handleSend = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${apiBaseUrl}/public-key`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ publicKey, deviceType }), // Include the device type in the request
            });

            if (response.ok) {
                alert('Public key sent successfully');
                setPublicKey('');
                setDeviceType(''); // Reset device type after submission
                refreshVPNList(); // Refresh VPN list after sending the key
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error sending public key');
            }
        } catch (err) {
            setError('Failed to send public key');
        } finally {
            setLoading(false);
        }
    };

    // Function to refresh the VPN list from the backend
    const refreshVPNList = async () => {
        setLoading(true);
        setError('');
        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                throw new Error("Authentication token is missing");
            }

            const response = await fetch(`${apiBaseUrl}/vpn-list`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to fetch VPN list");
            }

            const data = await response.json();
            setVpnList(data);
        } catch (err) {
            console.error("Error fetching VPN list:", err);
            setError(err.message || "Error fetching VPN list");
        } finally {
            setLoading(false);
        }
    };

    // Function to delete a VPN entry by its id
    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${apiBaseUrl}/vpn/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('VPN entry deleted');
                refreshVPNList(); // Refresh VPN list after deletion
            } else {
                setError('Error deleting VPN entry');
            }
        } catch (err) {
            setError('Failed to delete VPN entry');
        } finally {
            setLoading(false);
        }
    };

    // Fetch the VPN list when the component mounts
    useEffect(() => {
        refreshVPNList();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">VPN Management</h1>

            {/* Public Key Submission */}
            <div className="flex flex-col border p-4 rounded-lg shadow-md mb-6">
                <p className="font-semibold mb-2">Public Key:</p>
                <textarea
                    className="border p-2 rounded-md mb-2"
                    placeholder="Enter public key here"
                    value={publicKey}
                    onChange={(e) => setPublicKey(e.target.value)}
                    rows="4"
                    cols="50"
                />
                <div className="mb-4">
                    <label htmlFor="deviceType" className="font-semibold">Select Device Type:</label>
                    <select
                        id="deviceType"
                        value={deviceType}
                        onChange={(e) => setDeviceType(e.target.value)}
                        className="border p-2 rounded-md w-full mt-2"
                    >
                        <option value="">-- Select a device type --</option>
                        <option value="Windows">Windows</option>
                        <option value="macOS">macOS</option>
                        <option value="Linux">Linux</option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                    </select>
                </div>
                <button
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    onClick={handleSend}
                    disabled={loading || !deviceType} // Ensure device type is selected before sending
                >
                    {loading ? 'Sending...' : 'Send Public Key'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            {/* VPN List */}
            <div className="flex flex-col border p-4 rounded-lg shadow-md">
                <VpnList vpnList={vpnList} deleteVPN={handleDelete} />
                <button
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-4"
                    onClick={refreshVPNList}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Refresh List'}
                </button>
            </div>

            {/* Config Section */}
            <div className="mt-6">
                <p className="font-semibold">Configuration</p>
                <div className="border p-4 rounded-lg shadow-md">
                    <i>Config details here...</i>
                </div>
            </div>
        </div>
    );
}

export default VPN;
