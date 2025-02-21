import React, { useState } from 'react';
import { VPNconfiguration } from '../api/api';


function VpnConfig() {
    const [, setVpnConfig] = useState([]);
    const [error, setError] = useState('');

    const configuration = async () => {
        try {
            const data = await VPNconfiguration();
            setVpnConfig(data);
        } catch (err) {
            setError('Failed to fetch VPN configuration');
            console.error(error);
        }
    }

    return ( 
        <div>
            <p className="font-semibold text-xl">Configuration</p>
                <div className="border p-4 rounded-lg shadow-md">
                    <textarea 
                    className="border p-2 rounded-md" rows="10" cols="30"
                    placeholder='VPN Configuration' 
                    readOnly={true}
                    onClick={(e) => e.target.select()}
                    >
                        {configuration}
                    </textarea>
                </div>
        </div>
     );
}

export default VpnConfig;
