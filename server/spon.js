


const express = require('express');
const router = express.Router();
const db = require('../server/db');

async function getsponreg1(req, res) {
  try {
    const sponreg1Data = await queryDatabase('SELECT * FROM sponreg1');
    const sponreg2Data = await queryDatabase('SELECT * FROM sponreg2');
    const sponreg3Data = await queryDatabase('SELECT * FROM sponreg3');

    // Regroup data based on user_id
    const combinedData = sponreg1Data.map((sponreg1) => {
      const user_id = sponreg1.user_id;
      const matchedSponreg2 = sponreg2Data.find((sponreg2) => sponreg2.user_id === user_id);
      const matchedSponreg3 = sponreg3Data.find((sponreg3) => sponreg3.user_id === user_id);

      return {
        ...sponreg1,
        sponreg2: matchedSponreg2 || {},
        sponreg3: matchedSponreg3 || {},
      };
    });

    res.status(200).json(combinedData);
    console.log('Combined data:', combinedData);
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}

// Helper function to execute database queries
function queryDatabase(query) {
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = getsponreg1;
