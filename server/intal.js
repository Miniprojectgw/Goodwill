
const express = require('express');
const router = express.Router();
const db = require('../server/db');



function intAlu(req, res) {
  // Your data initialization code...
  const name =req.body.name;
  
  const email =req.body.email;
  const contactNumber=req.body.contactNumber;
  const companyName=req.body.companyName;
  const companyAddress=req.body.companyAddress;
  const position=req.body.position;
  const fields=req.body.fields;
  const skillsRequired=req.body.skillsRequired;
  const timeAndSchedule=req.body.timeAndSchedule;
  const benefits=req.body.benefits;
  const internp=req.body.internp;
  const user_id= req.body.user_id;
  

  

  const intal1 = {
    
    name,
    email,
    contactNumber,
    companyName,
    companyAddress, 
    user_id,
    internp,
  };

  const intal2 = {
    position,
    fields,
    skillsRequired,
    timeAndSchedule,
    benefits,
    user_id,
    internp,
  };

  

  // Add the rest of your intal initialization here...

  // Perform the queries using callbacks
  db.query('INSERT INTO intal1 SET ?', intal1, (error, result1) => {
    if (error) {
      console.error('Error occurred while inserting user:', error);
      res.status(500).json({ error: 'An internal server error occurred' });
    } else {
      db.query('INSERT INTO intal2 SET ?', intal2, (error, result2) => {
        if (error) {
          console.error('Error occurred while inserting user:', error);
          res.status(500).json({ error: 'An internal server error occurred' });
        } 
            else {
                console.log('User inserted successfully');
               res.status(200).json({ message: 'User registered successfully' });
              }
       
      });
    }
  });
}

module.exports = intAlu;
