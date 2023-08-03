// const express = require('express');
// const router = express.Router();
// const app = express();
// const registerUser = require('../server/register');
// const sponReg = require('../server/sponreg');
// const loginuser = require('../server/login');
// const intAlu= require('../server/intal');
// const Feedpost = require('../server/feedpost');
// const Feedget = require('../server/feedget')
// const spon =require('../server/spon');
// const intsp =require('../server/intsp');
// const PORT = 5000;
// const cors = require('cors')

// app.use(cors())
// app.use(express.json());


// app.get('/register', (req, res) => {
//   res.send('Server is working!'); 
// });
// app.post('/register', registerUser);
// app.post('/sponreg', sponReg );
// app.post('/intal', intAlu )


// app.post('/feedpost', Feedpost )
// app.get('/login', loginuser);
// app.get('/spondata',spon);
// app.get('/intsp',intsp);
// app.get('/feedget',Feedget);
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const router = express.Router();
const app = express();
const registerUser = require('../server/register');
const sponReg = require('../server/sponreg');
const loginuser = require('../server/login');
const intAlu = require('../server/intal');
const Feedpost = require('../server/feedpost');
const Feedget = require('../server/feedget');
const spon = require('../server/spon');
const intsp = require('../server/intsp');
const delRow = require('../server/delete'); // Include the delete.js route here
const PORT = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/register', (req, res) => {
  res.send('Server is working!');
});
app.post('/register', registerUser);
app.post('/sponreg', sponReg);   // update
app.post('/intal', intAlu);
app.post('/feedpost', Feedpost);
app.get('/login', loginuser);
app.get('/spondata', spon);
app.get('/intsp', intsp);
app.get('/feedget', Feedget);

// Use the delete route for handling the DELETE request

app.use('/delete', delRow);   //delete

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
