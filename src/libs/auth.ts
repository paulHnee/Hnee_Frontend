// Define an interface for user credentials
export interface UserCredentials {
  username: string;
  password: string;
}

// Function to validate user credentials
export function validateCredentials(credentials: UserCredentials): boolean {
  const { username, password } = credentials;
  // Example validation logic (replace with real validation)
  return username === 'admin' && password === 'admin';
}

// Example usage (remove or replace with actual usage in your application)
const exampleCredentials: UserCredentials = { username: 'admin', password: 'admin' };
console.log(validateCredentials(exampleCredentials)); // Should print true