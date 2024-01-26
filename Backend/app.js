const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./Model/User');

const app = express();
const PORT = 8055;

// Connect to MongoDB
mongoose.connect('mongodb+srv://mithunshaji2003:mithun@cluster0.veqjltb.mongodb.net/Roadway?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user with the provided role
    const newUser = new User({ name, email, password, role });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
