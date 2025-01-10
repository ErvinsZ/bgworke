const axios = require('axios');
require('dotenv').config(); // Load environment variables


// Hardcoded API request details
const API_URL = process.env.API_URL; 
const payload = {
  telegramId: '1429850114', // Replace with a valid Telegram ID
  points: 1000,             // Increment points by 10 (or any other value)
};

// Function to call the API
const sendKeepAliveRequest = async () => {
  try {
    const response = await axios.post(API_URL, payload);
    console.log('Successfully updated points:', response.data);
  } catch (error) {
    console.error('Error updating points:', error.response?.data || error.message);
  }
};

sendKeepAliveRequest(); // Immediate call on startup
