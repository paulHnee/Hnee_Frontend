export const sendPublicKey = async (key) => {
    const url = 'https://api.example.com/vpn'; // Adjust to your endpoint
    const payload = { publicKey: key };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to send public key:', error);
        throw error;
    }
};

export const fetchVPNList = async () => {
    const url = 'https://api.example.com/vpn-list'; // Adjust to your endpoint

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch VPN list:', error);
        throw error;
    }
};

export const deleteVPNEntry = async (id) => {
    const url = `https://api.example.com/vpn/${id}`; // Adjust to your endpoint

    try {
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to delete VPN entry:', error);
        throw error;
    }
};
