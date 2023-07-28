
const express = require('express');
const router = express.Router();
const db = require('../server/db');


async function Feedget(req, res) {
    db.query('SELECT * FROM post', (error, results) => {
      if (error) {
        console.error('Error occurred while fetching posts:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
      } else {
        res.status(200).json(results);
        console.log(results);
      }
    });
  }

module.exports = Feedget;

// feedget.js
