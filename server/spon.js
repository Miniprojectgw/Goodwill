
// const express = require('express');
// const router = express.Router();
// const db = require('../server/db');


// async function getsponreg1(req, res) {
//     db.query('SELECT * FROM sponreg1 ', (error, results) => {
//         if (error) {
//         console.error('Error occurred while fetching sponregs:', error);
//         res.status(500).json({ error: 'An internal server error occurred' });
//         } else {
//         res.status(200).json(results);
//         console.log('spon1', results);
//         }
        
//     });

   
//   }

// module.exports = getsponreg1;

// registration/register.js

const express = require('express');
const router = express.Router();
const db = require('../server/db');

async function getsponreg1(req, res) {
  try {
    const sponreg1Data = await queryDatabase('SELECT * FROM sponreg1');
    const sponreg2Data = await queryDatabase('SELECT * FROM sponreg2');
    const sponreg3Data = await queryDatabase('SELECT * FROM sponreg3');

    // Combine the results from all three tables
    const combinedData = {
      sponreg1: sponreg1Data,
      sponreg2: sponreg2Data,
      sponreg3: sponreg3Data,
    };

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


