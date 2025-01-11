const axios = require('axios');
require('dotenv').config(); // Load environment variables


// Hardcoded API request details
const API_URL = process.env.API_URL; 
const users = [
   { telegramId: '7239375251', points: 10234 }, // Ari  
   {telegramId:'778778787', points: 10032}, // Amy   115455545
   {telegramId:'115455545', points: 10032}, // Greg
   {telegramId:'33333375', points: 10032}, // Giga
  { telegramId: '1429850114', points: 10675 }, //Erv
 // { telegramId: '2223232', points: 10217 }, //Beepman
  // { telegramId: '322223223', points: 10039}, //Marco
  // { telegramId: '666666535', points: 10127}, //Jigglypuff
   // { telegramId: '7312787101', points: 11354} // Summer
  // Add more users as needed
];

// Function to call the API
const sendKeepAliveRequest = async () => {
  console.log('Starting batch points update...');

  for (const user of users) {
    try {
      const response = await axios.post(API_URL, user);
      console.log(`Successfully updated points for user ${user.telegramId}:`, response.data);
    } catch (error) {
      console.error(
        `Error updating points for user ${user.telegramId}:`,
        error.response?.data || error.message
      );
    }
  }

  console.log('Batch update completed.');
};

sendKeepAliveRequest(); // Immediate call on startup
