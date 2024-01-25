// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

// const app = express();
// const PORT = 5501;
// const path = require('path');

// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static('public')); 
// app.use(express.static('Gallery Poll', { index: 'register.html' }));
// // Serve static files (e.g., HTML, CSS, images)

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/userRegistration', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Define User schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Set up routes
// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, 'Gallery Poll', 'register.html');
//   res.sendFile(filePath);
// });

// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   // Hash the password before saving it to the database
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create a new user
//   const newUser = new User({
//     username,
//     password: hashedPassword,
//   });

//   // Save the user to the database
//   newUser.save((err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error registering user');
//     } else {
//       res.redirect('/login.html'); // Redirect to login page after successful registration
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// -------------------------------------------------------------------------

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const register = require('./assets/js/register');

// const app = express();
// const PORT = 5501;
// const path = require('path');

// app.use('/assets', express.static('assets'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('Gallery Poll'));
// app.use(register); // Serve static files with 'register.html' as the default

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://jonah-admin:jonahrocks@gallerypoll.7i8aymp.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Define User schema
// const userSchema = new mongoose.Schema({
//   fullname: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.models.User || mongoose.model('User', userSchema);

// // Set up routes
// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, 'register.html');
//   res.sendFile(filePath);
// });

// app.post('/register', async (req, res) => {
//   const { fullname, email, password } = req.body;

//   // Hash the password before saving it to the database
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create a new user
//   const newUser = new User({
//     fullname,
//     email,
//     password: hashedPassword,
//   });

//   // Save the user to the database
//   newUser.save((err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error registering user');
//     } else {
//       res.redirect('/login.html'); // Redirect to login page after successful registration
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const { rejects } = require('assert');
// const saltRounds = 10;

const app = express();
const PORT = 5501;

// Connect to MongoDB
mongoose.connect('mongodb+srv://jonah-admin:jonahrocks@gallerypoll.7i8aymp.mongodb.net/GALLERYPOLL?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define User schema and model
const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'register.html');
  res.sendFile(filePath);
});

const User = mongoose.model('Users', userSchema);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Gallery Poll'));
app.use('/assets', express.static('assets'));

const registerRoute = require('./assets/js/register');
app.use('/', registerRoute);


// Neeraja's code -----

// app.post('/register', async (req, res) => {
//   const {fullname, email, password } = req.body;
//   console.log('successful',email)
  try {
   
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(400).send({ status: false, message: "User already exists" });
    }

    //  const hashedNewPassword = await bcrypt.hash(password, 10);
    var hashedNewPassword = await new Promise((resolve,reject) => {
      bcrypt.hash(password , 10 , (err,hash) => {
        if(err) {
          console.log(err)
          reject(err) ;
        }
          else{
            resolve(hash)
          }
        })
      })
    
    const user = await User.create({ fullname, email,  password });
    if (user) {
       console.log( 'ss' ,user.password)
       return res.status(201).send({ status: true, message: "User created successfully", data: user, redirect: "./login.html" });
    } else {
      return res.status(400).send({ status: false, message: "User creation failed" });
    }
  } catch (err) {
    // console.log(hashedNewPassword)
    res.status(500).send({ status: false, message: err.message});
  }
// });



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, 'register.html');
//   res.sendFile(filePath);
// });

// app.post('/register', async (req, res) => {
//   const { fullname, email, password } = req.body;

//   // Hash the password before saving it to the database
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create a new user
//   const newUser = new User({
//     fullname,
//     email,
//     password: hashedPassword,
//   });

  // Save the user to the database
  // newUser.save((err) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send('Error registering user');
  //   } else {
  //     res.redirect('/login.html');
  //   }
  // });
// });