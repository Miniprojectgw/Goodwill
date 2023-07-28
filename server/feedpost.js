
const express = require('express');
const router = express.Router();
const db = require('../server/db');


async function Feedpost (req, res) {
  const description =req.body.description;
  const user_id =req.body.user_id;
 


  // Perform validation, sanitization, or other necessary operations on the data

  const post = await {
    description,
    user_id,
  };
  console.log(post)

  db.query('INSERT INTO post SET ?', post, (error, results) => {
    if (error) {
      console.error('Error occurred while inserting post:', error);

      res.status(500).json({ error: 'An internal server error occurred' });
    } else {
      console.log('post inserted successfully');
      res.status(200).json({ message: 'post registered successfully' });
    }
  });
}

module.exports = Feedpost;

