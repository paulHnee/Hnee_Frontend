const API_BASE_URL = 'http://localhost:5000/api';

// Login function
export const login = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  return response.json();
};

// Fetch protected data
export const fetchProtectedData = async (token) => {
  const response = await fetch(`${API_BASE_URL}/protected`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Access denied');
  }

  return response.json();
};
