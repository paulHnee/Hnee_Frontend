import React, { useState, useEffect } from 'react';
import { VPNconfiguration } from '../api/api';
import CopyToClipboard from 'react-copy-to-clipboard';

function VpnConfig() {
    const [vpnConfig, setVpnConfig] = useState("Nothing here....");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchConfiguration = async () => {
            setLoading(true);
            setError(''); // Clear any previous errors
            try {
                const data = await VPNconfiguration();
                setVpnConfig(data);
            } catch (err) {
                setError('Failed to fetch VPN configuration: ' + (err.message || err));
                console.error('Error fetching VPN configuration:', err);
            } finally {
                setLoading(false);
                console.log(error);
            }
        };

        fetchConfiguration();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">VPN Configuration</h2>

            {loading && <div className="text-gray-500">Loading configuration...</div>}
            
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Configuration Details</h3>
                <pre className="whitespace-pre-wrap text-sm text-gray-800">
                    <code className="block p-2 rounded-md bg-gray-50 overflow-x-auto">
                        {vpnConfig}
                    </code>
                </pre>
                <CopyToClipboard text={vpnConfig}>
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Copied to clipboard')}>
                        Copy to Clipboard
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default VpnConfig;
