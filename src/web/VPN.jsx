import React, { useState, useEffect } from 'react';
import { sendPublicKey, fetchVPNList, deleteVPNEntry } from '../types/api'; // Adjust the path

function VPN() {
    const [publicKey, setPublicKey] = useState('');
    const [vpnList, setVPNList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSend = async () => {
        setLoading(true);
        setError(null);

        try {
            await sendPublicKey(publicKey);
            alert('Public key sent successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const refreshVPNList = async () => {
        setLoading(true);
        setError(null);

        try {
            const list = await fetchVPNList();
            setVPNList(list);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        setLoading(true);
        setError(null);

        try {
            await deleteVPNEntry(id);
            setVPNList(vpnList.filter((entry) => entry.id !== id)); // Update state
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshVPNList(); // Fetch list on component mount
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
                    {/* TODO: Fetch and display configuration */}
                    <i>Config</i>
                </div>
            </div>
        </div>
    );
}

export default VPN;
