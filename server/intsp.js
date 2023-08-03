


const express = require('express');
const router = express.Router();
const db = require('../server/db');

async function getintal1(req, res) {
  try {
    const intal1Data = await queryDatabase('SELECT * FROM intal1');
    const intal2Data = await queryDatabase('SELECT * FROM intal2');
   

    // Regroup data based on user_id
    const combinedData = intal1Data.map((intal1) => {
      const user_id = intal1.user_id;
      const matchedintal2 = intal2Data.find((intal2) => intal2.user_id === user_id);
     
      return {
        ...intal1,
        intal2: matchedintal2 || {},
        
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

module.exports = getintal1;



// const express = require('express');
// const router = express.Router();
// const db = require('../server/db');

// async function getintal1(req, res) {
//   try {
//     const intal1Data = await queryDatabase('SELECT * FROM intal1');
//     const intal2Data = await queryDatabase('SELECT * FROM intal2');

//     // Regroup data based on user_id
//     const combinedData = intal1Data.map((intal1) => {
//       const user_id = intal1.user_id;
//       const matchedIntal2 = intal2Data.find((intal2) => intal2.user_id === user_id);

//       return {
//         ...intal1,
//         intal2: matchedIntal2 ? matchedIntal2.interp : 0, // Get the interp value from intal2 or set to 0 if not found
//       };
//     });

//     res.status(200).json(combinedData);
//     console.log('Combined data:', combinedData);
//   } catch (error) {
//     console.error('Error occurred while fetching data:', error);
//     res.status(500).json({ error: 'An internal server error occurred' });
//   }
// }

// // Helper function to execute database queries
// function queryDatabase(query) {
//   return new Promise((resolve, reject) => {
//     db.query(query, (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }

// module.exports = getintal1;

