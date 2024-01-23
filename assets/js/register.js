const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('./models/user-details'); // Assuming you have a user model defined

// Route for handling user registration
router.post('/register', async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Name already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
