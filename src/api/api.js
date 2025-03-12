const apiBaseUrl = 'http://10.1.1.45:5000';
const apiLoginUrl = `${apiBaseUrl}/api`;
const apiVPNUrl = `${apiBaseUrl}/vpn`;

// Login function
export const login = async (username, password) => {
  const response = await fetch(`${apiLoginUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};
//ADD PUBKEY
export const sendPublicKey = async (publicKey, device) => {
  const response = await fetch(`${apiVPNUrl}/public_key`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publicKey, device }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error sending public key", errorData);
    throw new Error('Error sending public key');
  }
};

//DELETE ENTRY
export const deleteVPN = async (id) => {
  const response = await fetch(`${apiVPNUrl}/vpn/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete VPN entry");
  }
};

//FETCH VPN LIST
export const fetchVPNList = async () => {
  const response = await fetch(`${apiVPNUrl}/list`);
  if (!response.ok) {
    throw new Error("Failed to fetch VPN list");
  }
  return await response.json();
};

//GET VPN CONFIGURATION
export const VPNconfiguration = async () => {
  const response = await fetch(`${apiVPNUrl}/vpn-configuration`);
  if (!response.ok) {
    throw new Error("Failed to fetch VPN configuration, please contact the IT-Support");
  }
  return await response.json();
}

//REFRESH-LIST
export const refreshVPNList = async () => {
  const response = await fetch(`${apiVPNUrl}/refresh`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Error fetching VPN list');
  }
  return await response.json();
};