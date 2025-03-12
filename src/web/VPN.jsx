import React, { useState } from 'react';
import VPNlist from './Vpnlist';
import VPNconfiguration from './VpnConfiguration';
import { sendPublicKey, refreshVPNList } from '../api/api';


function VPN() {
    const [publicKey, setPublicKey] = useState('');
    const [device, setDevice] = useState('');                   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleSend = async () => {
        setLoading(true);
        setError('');                                           // Clear any previous errors     

        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("No token found");
            setLoading(false);
            return;
        }

        try {
            await sendPublicKey(publicKey, device, token);
            alert('Public key sent successfully');
            setPublicKey('');
            setDevice('');
            refreshVPNList();                                   // Refresh VPN list after sending the key
        } catch (err) {
            setError('Error sending public key');
            console.log(publicKey);
            console.log(device);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="container mx-auto p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">VPN Management</h1>

            {/* Public Key Submission */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Submit New VPN</h2>
                <div className="mb-4">
                    <label htmlFor="publicKey" className="block text-gray-700 text-sm font-bold mb-2">
                        Public Key:
                    </label>
                    <input
                        id="publicKey"
                        className="shadow appearance-none border rounded w-[420px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter public key here"
                        value={publicKey}
                        onChange={(e) => setPublicKey(e.target.value)}
                        maxLength={64}
                        minLength={32}
                        autoComplete="on"
                        required
                        
                    />
                </div>
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                <div className="mb-4">
                    <label htmlFor="deviceType" className="block text-gray-700 text-sm font-bold mb-2">
                        Device Name:
                    </label>
                    <input
                        id="deviceType"
                        className="shadow appearance-none border rounded w-[420px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter device name here"
                        value={device}
                        onChange={(e) => setDevice(e.target.value)}
                        maxLength={10}
                        minLength={2}
                        autoComplete="on"
                        required                        
                    />
                </div>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                        ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleSend}
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </div>

            {/* VPN List */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <VPNlist />
            </div>

            {/* Config Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <VPNconfiguration />
            </div>
        </div>
    );
}

export default VPN;