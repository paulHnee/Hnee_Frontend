import React, { useState, useEffect } from 'react';
import { VPNconfiguration } from './api';


function VpnConfig() {
    const [vpnConfig, setVpnConfig] = useState(null); // Initialize to null, not []
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
            }
        };

        fetchConfiguration();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">VPN Configuration</h2>

        {loading && <div className="text-gray-500">Loading configuration...</div>}
        {vpnConfig && (
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Configuration Details</h3>
                <pre className="whitespace-pre-wrap text-sm text-gray-800">
                    <code className="block p-2 rounded-md bg-gray-50 overflow-x-auto">
                        {typeof vpnConfig === 'string' ? vpnConfig : JSON.stringify(vpnConfig, null, 2)}
                    </code>
                </pre>
            </div>
        )}
    </div>
     );
}

export default VpnConfig;
