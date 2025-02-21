import React, { useState } from 'react';
import VPNlist from './Vpnlist';
import VPNconfiguration from './vpnConfiguration.jsx';
import { sendPublicKey, refreshVPNList } from '../api/api';

function VPN() {
    const [publicKey, setPublicKey] = useState('');
    const [Device, setDevice] = useState('');
    const [loading, setLoading] = useState(false);
    const [, setError] = useState('');

    const handleSend = async () => {
        setLoading(true);
        try {
            await sendPublicKey(publicKey, Device);
            alert('Public key sent successfully');
            setPublicKey('');
            setDevice('');
            refreshVPNList(); // Refresh VPN list after sending the key
        } catch (err) {
            setError(err.message || 'Error sending public key');
            console.log(publicKey);
            console.log(Device);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">VPN Management</h1>

            {/* Public Key Submission */}
            <div className="flex border p-4 rounded-lg shadow-md mb-6 items-center">
                <p className="font-semibold mb-2 ">Public Key:</p>
                <textarea
                    className="border p-2 rounded-md mr-2 ml-2"
                    placeholder="Enter public key here"
                    value={publicKey}
                    onChange={(e) => setPublicKey(e.target.value)}
                    rows="1"
                    cols="50"
                    maxLength={64}
                    autoComplete='on'
                    required
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-40 h-10"
                    onClick={handleSend}
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Public Key'}
                </button>
                
                {/* VPN List */}
                <div className="flex flex-col ml-8">
                    <VPNlist />                
                </div>
                
            </div>
            {/* Config Section */}
            <div className="mt-6">
                <VPNconfiguration />
            </div>
        </div>
    );
}

export default VPN;
