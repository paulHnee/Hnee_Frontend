const apiBaseUrl = 'http://localhost:5000/api';

// Login function
export const login = async (username, password) => {
  const response = await fetch(`${apiBaseUrl}/login`, {
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

//FETCH VPN LIST
export const fetchVPNList = async () => {
  const response = await fetch(`${apiBaseUrl}/vpn-list`);
  if (!response.ok) {
    throw new Error("Failed to fetch VPN list");
  }
  return await response.json();
};

//GET VPN CONFIGURATION
export const VPNconfiguration = async () => {
  const response = await fetch(`${apiBaseUrl}/vpn-configuration`);
  if (!response.ok) {
    throw new Error("Failed to fetch VPN configuration, please contact the IT-Support");
  }
  return await response.json();
}

//REFRESH
export const refreshVPNList = async () => {
  const response = await fetch(`${apiBaseUrl}/vpn-list`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Error fetching VPN list');
  }
  return await response.json();
};

//DELETE ENTRY
export const deleteVPN = async (id) => {
  const response = await fetch(`${apiBaseUrl}/vpn/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete VPN entry");
  }
};

export const sendPublicKey = async (publicKey, Device) => {
  const response = await fetch(`${apiBaseUrl}/public-key`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publicKey, Device }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error sending public key", errorData);
    throw new Error('Error sending public key');
  }
};