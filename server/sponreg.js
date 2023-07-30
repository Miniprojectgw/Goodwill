
const express = require('express');
const router = express.Router();
const db = require('../server/db');



function sponReg(req, res) {
  // Your data initialization code...
    const name =req.body.name;
  const email =req.body.email;
  const dob =req.body.dob;
  const father_name =req.body.father_name;
  const father_mobile =req.body.father_mobile;
  const father_occupation =req.body.father_occupation;
  const mother_name =req.body.mother_name;
  const mother_mobile =req.body.mother_mobile;
  const mother_occupation =req.body.mother_occupation;
  const gender =req.body.gender;
  const occupation =req.body.occupation;
  const family_income =req.body.family_income;
  const house_owned =req.body.house_owned;
  const num_rooms =req.body.num_rooms;
  const course =req.body.course;

  const bank_name =req.body.bank_name;
  const branch_name =req.body.branch_name;
  const account_type =req.body.account_type;
  const ifsc_code =req.body.ifsc_code;
  const bank_account_name =req.body.bank_account_name;
  const account_number =req.body.account_number;
  const bank_address =req.body.bank_address;
  const user_id= req.body.user_id;
  

  const data1 = {
    name,
    email,
    dob,
    father_name,
    father_mobile,
    father_occupation,
    mother_name,
    mother_mobile,
    mother_occupation,
    user_id,
  };

  const data2 = {
    gender,
    occupation,
    family_income,
    house_owned,
    num_rooms,
    course,
    profile_picture: null,
    user_id,
  };

  const data3 = {
    bank_name,
    branch_name,
    account_type,
    ifsc_code,
    bank_account_name,
    account_number,
    bank_address,
    user_id,
  };

  // Add the rest of your data initialization here...

  // Perform the queries using callbacks
//   db.query('INSERT INTO sponreg1 SET ?', data1, (error, result1) => {
//     if (error) {
//       console.error('Error occurred while inserting user:', error);
//       res.status(500).json({ error: 'An internal server error occurred' });
//     } else {
//       db.query('INSERT INTO sponreg2 SET ?', data2, (error, result2) => {
//         if (error) {
//           console.error('Error occurred while inserting user:', error);
//           res.status(500).json({ error: 'An internal server error occurred' });
//         } else {
//           db.query('INSERT INTO sponreg3 SET ?', data3, (error, result3) => {
//             if (error) {
//               console.error('Error occurred while inserting user:', error);
//               res.status(500).json({ error: 'An internal server error occurred' });
//             } else {
//               console.log('User inserted successfully');
//               res.status(200).json({ message: 'User registered successfully' });
//             }
//           });
//         }
//       });
//     }
//   });



  // Check if the user data already exists in the database
  db.query('SELECT * FROM sponreg1 WHERE user_id = ?', user_id, (error, rows) => {
    if (error) {
      console.error('Error occurred while fetching user data:', error);
      res.status(500).json({ error: 'An internal server error occurred' });
    } else {
      if (rows.length === 0) {
        // If the user data doesn't exist, insert a new row
        db.query('INSERT INTO sponreg1 SET ?', data1, (error, result1) => {
          if (error) {
            console.error('Error occurred while inserting user:', error);
            res.status(500).json({ error: 'An internal server error occurred' });
          } else {
            db.query('INSERT INTO sponreg2 SET ?', data2, (error, result2) => {
              if (error) {
                console.error('Error occurred while inserting user:', error);
                res.status(500).json({ error: 'An internal server error occurred' });
              } else {
                db.query('INSERT INTO sponreg3 SET ?', data3, (error, result3) => {
                  if (error) {
                    console.error('Error occurred while inserting user:', error);
                    res.status(500).json({ error: 'An internal server error occurred' });
                  } else {
                    console.log('User inserted successfully');
                    res.status(200).json({ message: 'User registered successfully' });
                  }
                });
              }
            });
          }
        });
      } else {
        // If the user data exists, update the existing row
        db.query('UPDATE sponreg1 SET ? WHERE user_id = ?', [data1, user_id], (error, result1) => {
          if (error) {
            console.error('Error occurred while updating user data:', error);
            res.status(500).json({ error: 'An internal server error occurred' });
          } else {
            db.query('UPDATE sponreg2 SET ? WHERE user_id = ?', [data2, user_id], (error, result2) => {
              if (error) {
                console.error('Error occurred while updating user data:', error);
                res.status(500).json({ error: 'An internal server error occurred' });
              } else {
                db.query('UPDATE sponreg3 SET ? WHERE user_id = ?', [data3, user_id], (error, result3) => {
                  if (error) {
                    console.error('Error occurred while updating user data:', error);
                    res.status(500).json({ error: 'An internal server error occurred' });
                  } else {
                    console.log('User data updated successfully');
                    res.status(200).json({ message: 'User data updated successfully' });
                  }
                });
              }
            });
          }
        });
      }
    }
  });


}

module.exports = sponReg;
