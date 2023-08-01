const express = require('express');
const router = express.Router();
const db = require('./db'); // Assuming you have a database connection file (db.js) for database operations

// Endpoint to delete a specific row based on user_id and internship_id
router.delete('/delete', (req, res) => {
  const { user_id, internship_id } = req.body;

  // Check if user_id and internship_id are provided in the request body
  if (!user_id || !internship_id) {
    return res.status(400).json({ error: 'Both user_id and internship_id are required.' });
  }

  // Assuming you have a table called 'internship_data' in the database where you store the data
  const sqlQuery = 'DELETE FROM intal1 WHERE user_id = ? AND internship_id = ?';
  
  // Perform the deletion in the database
  db.query(sqlQuery, [user_id, internship_id], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Failed to delete the row from the database.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Row not found in the database.' });
    }

    return res.status(200).json({ message: 'Row deleted successfully.' });
  });
});

module.exports = router;
