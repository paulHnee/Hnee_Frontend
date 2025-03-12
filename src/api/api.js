const apiBaseUrl = 'http://10.1.1.45:5000';
const apiLoginUrl = `${apiBaseUrl}/api`;
const apiVPNUrl = `${apiBaseUrl}/vpn`;

// Helper function to get the token from cookies
const getTokenFromCookies = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; token=`);
  if (parts.length === 2) {
    const token = parts.pop().split(';').shift();
    console.log('Token retrieved from cookie:', token); // Debug log
    return token;
  }
};

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

// ADD PUBKEY
export const sendPublicKey = async (publicKey, device) => {
  const token = getTokenFromCookies();
  const response = await fetch(`${apiVPNUrl}/public_key`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ publicKey, device }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error sending public key", errorData);
    throw new Error('Error sending public key');
  }
};

// DELETE ENTRY
export const deleteVPN = async (id) => {
  const token = getTokenFromCookies();
  const response = await fetch(`${apiVPNUrl}/vpn/${id}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("Failed to delete VPN entry");
  }
};

// FETCH VPN LIST
export const fetchVPNList = async () => {
  const token = getTokenFromCookies();
  const response = await fetch(`${apiVPNUrl}/list`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("Failed to fetch VPN list");
  }
  return await response.json();
};

// GET VPN CONFIGURATION
export const VPNconfiguration = async () => {
  const token = getTokenFromCookies();
  const response = await fetch(`${apiVPNUrl}/vpn-configuration`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("Failed to fetch VPN configuration, please contact the IT-Support");
  }
  return await response.json();
}

// REFRESH-LIST
export const refreshVPNList = async () => {
  const token = getTokenFromCookies();
  const response = await fetch(`${apiVPNUrl}/refresh`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Error fetching VPN list');
  }
  return await response.json();
};