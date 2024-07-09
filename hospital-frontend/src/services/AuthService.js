import axios from 'axios';

// Set the URL of your backend API
const API_URL = 'http://localhost:8080/api/';

// Function to register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}users/register`, userData);
    return response.data; // Assuming the API returns the created user data or a success message
  } catch (error) {
    console.error('Error registering the user:', error.response.data);
    return null; // Or return an error message/object
  }
};

// Function to login a user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}users/login`, { email, password });
    if (response.data.accessToken) {
      // Store user details and token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response.data);
    return null; // Or return an error message/object
  }
};

// Function to logout a user
export const logout = () => {
  localStorage.removeItem('user'); // Remove user from local storage to log user out
};

// Optionally, you might want a function to check if a user is logged in
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user')); // Get user details from local storage
};

// Function to request a password reset link/token
export const requestPasswordReset = async (email) => {
    try {
      const response = await axios.post(`${API_URL}auth/forgot-password`, { email });
      // Assuming the API sends an email to the user with a reset link or token
      return response.data; // Success message
    } catch (error) {
      console.error('Error requesting password reset:', error.response.data);
      return null; // Or return an error message/object
    }
  };
  
  // Function to submit a new password
  export const submitNewPassword = async (token, newPassword, confirmPassword) => {
    try {
      const response = await axios.post(`${API_URL}auth/reset-password`, {
        token,
        newPassword,
        confirmPassword
      });
      // Assuming the API updates the user's password and returns a success message
      return response.data;
    } catch (error) {
      console.error('Error submitting new password:', error.response.data);
      return null; // Or return an error message/object
    }
  };

