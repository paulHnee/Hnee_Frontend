import React, { useState, useEffect } from 'react';

function VPN() {
    const [publicKey, setPublicKey] = useState('');
    const [vpnList, setVpnList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const apiBaseUrl = 'http://localhost:8080/api'; // Replace with your Spring API base URL

    const handleSend = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${apiBaseUrl}/public-key`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ publicKey }),
            });

            if (response.ok) {
                alert('Public key sent successfully');
                setPublicKey('');
                refreshVPNList(); // Refresh list after sending the key
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

    const refreshVPNList = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiBaseUrl}/vpn-list`, {
                method: 'GET',
            });
            if (response.ok) {
                const data = await response.json();
                setVpnList(data);
            } else {
                setError('Error fetching VPN list');
            }
        } catch (err) {
            setError('Failed to fetch VPN list');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${apiBaseUrl}/vpn/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('VPN entry deleted');
                refreshVPNList(); // Refresh list after deletion
            } else {
                setError('Error deleting VPN entry');
            }
        } catch (err) {
            setError('Failed to delete VPN entry');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshVPNList(); // Fetch VPN list on component load
    }, []);

    return (
        <div>
            <div className="border-solid border flex flex-row mt-10">
                <div className="border-solid border flex flex-col items-start">
                    <p className="bold font-semibold">Public-key:</p>
                    <textarea
                        className="h-6 w-44 border-solid rounded-md"
                        placeholder="publickey"
                        value={publicKey}
                        onChange={(e) => setPublicKey(e.target.value)}
                        inputMode="text"
                        id="p_pbk001"
                    />
                    <button
                        className="border border-solid shadow-md rounded-md bg-modernGreen text-white mt-2 w-20 hover:bg-modernGreen-dark"
                        onClick={handleSend}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Senden'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
                <div className="border-solid ml-20">
                    <p className="bold font-medium">VPN Liste</p>
                    <button
                        className="border-gray-50 border border-solid shadow-inner h-8 w-8 rounded-md flex items-center bg-white"
                        onClick={refreshVPNList}
                        disabled={loading}
                    >
                        🔄
                    </button>
                    <div className="border border-solid rounded-sm shadow-inner">
                        <ul>
                            {vpnList.map((entry) => (
                                <li key={entry.id} className="flex justify-between">
                                    {entry.name}
                                    <button
                                        className="text-red-500 ml-4"
                                        onClick={() => handleDelete(entry.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
                Konfiguration
                <div className="border border-black border-solid h-36 w-36 shadow-inner">
                    <i>Config</i>
                </div>
            </div>
        </div>
    );
}

export default VPN;
