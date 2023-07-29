
const express = require('express');
const router = express.Router();
const db = require('../server/db');


// async function sponReg (req, res) {

//   const name =req.body.name;
//   const email =req.body.email;
//   const dob =req.body.dob;
//   const father_name =req.body.father_name;
//   const father_mobile =req.body.father_mobile;
//   const father_occupation =req.body.father_occupation;
//   const mother_name =req.body.mother_name;
//   const mother_mobile =req.body.mother_mobile;
//   const mother_occupation =req.body.mother_occupation;
//   const gender =req.body.gender;
//   const occupation =req.body.occupation;
//   const family_income =req.body.family_income;
//   const house_owned =req.body.house_owned;
//   const num_rooms =req.body.num_rooms;
//   const course =req.body.course;

//   const bank_name =req.body.bank_name;
//   const branch_name =req.body.branch_name;
//   const account_type =req.body.account_type;
//   const ifsc_code =req.body.ifsc_code;
//   const bank_account_name =req.body.bank_account_name;
//   const account_number =req.body.account_number;
//   const bank_address =req.body.bank_address;


// ///neweww
// const sponreg1  = await {
    

//   name,
//   email,
//   dob,
//   father_name,
//   father_mobile,
//   father_occupation,
//   mother_name,
//   mother_mobile,
//   mother_occupation

// };
// console.log(sponreg1);

// db.query('INSERT INTO sponreg1 SET ?', sponreg1, (error, results) => {
//   if (error) {
//     console.error('Error occurred while inserting user:', error);

//     res.status(500).json({ error: 'An internal server error occurred' });
//   } else {
//     console.log('User inserted successfully');
//     res.status(200).json({ message: 'User registered successfully' });
//   }
// });

// const sponreg2  = await {
// gender,
// occupation,
// family_income,
// house_owned,
// num_rooms,
// course,
// profile_picture: null
// };
// console.log(sponreg2);


// db.query('INSERT INTO sponreg2 SET ?', sponreg2, (error, results) => {
//   if (error) {
//     console.error('Error occurred while inserting user:', error);

//     res.status(500).json({ error: 'An internal server error occurred' });
//   } else {
//     console.log('User inserted successfully');
//     res.status(200).json({ message: 'User registered successfully' });
//   }
// });

// const sponreg3  = await {
    

//     bank_name,
//     branch_name,
//     account_type,
//     ifsc_code,
//     bank_account_name,
//     account_number,
//     bank_address

// };
// console.log(sponreg3);

// db.query('INSERT INTO sponreg3 SET ?', sponreg3, (error, results) => {
//   if (error) {
//     console.error('Error occurred while inserting user:', error);

//     res.status(500).json({ error: 'An internal server error occurred' });
//   } else {
//     console.log('User inserted successfully');
//     res.status(200).json({ message: 'User registered successfully' });
//   }
// });


// }

// module.exports = sponReg;


// sponReg.js



// sponReg.js


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
  };

  const data2 = {
    gender,
    occupation,
    family_income,
    house_owned,
    num_rooms,
    course,
    profile_picture: null,
  };

  const data3 = {
    bank_name,
    branch_name,
    account_type,
    ifsc_code,
    bank_account_name,
    account_number,
    bank_address,
  };

  // Add the rest of your data initialization here...

  // Perform the queries using callbacks
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
}

module.exports = sponReg;
