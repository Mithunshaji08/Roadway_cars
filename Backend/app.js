  const express = require('express');
  const bodyParser = require('body-parser');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const multer = require('multer');
  const fs = require('fs'); // Import the 'fs' module
  const path = require('path');
  const User = require('./Model/User');
  const Car= require('./Model/Car')

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
  app.use(cors()); // Use cors middleware to enable CORS
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

  // login
  app.post('/login', async (req, res) => {
    try {
      const { email, password, role } = req.body;

      // Find the user by email and role
      const user = await User.findOne({ email, role });

      // If the user is not found, return an error
      if (!user) {
        return res.status(401).json({ error: 'Invalid email, role, or password' });
      }

      // Compare the provided password with the stored hashed password
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid email, role, or password' });
      }

      // At this point, the login is successful
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error in login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //fetching deatails
  app.get('/user-details/:id', async (req, res) => {
    try {
      const userId = req.params.id;

      // Check if the provided ID is valid
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
      }

      // Find the user by ID
      const user = await User.findById(userId);

      // If the user is not found, return an error
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Return the user details
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  //lend -a car
  app.post('/lent-a-car', async (req, res) => {
    try {
      const car = new Car(req.body);
      await car.save();
      res.status(201).send(car);
    } catch (error) { 
      res.status(400).send(error);
    }
  });


  // Endpoint to fetch all cars
  app.get('/cars', async (req, res) => {  
    try {
      const cars = await Car.find();
      res.status(200).json(cars);
    } catch (error) {
      console.error('Error fetching cars:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Update user route
  app.put('/update-user/:id', async (req, res) => {
    const userId = req.params.id;

    try {
      // Find the user by ID and update their data
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

      // Check if the user exists and was successfully updated
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found or could not be updated' });
      }

      // Respond with the updated user data
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/cars-by-lender/:lenderName', async (req, res) => {
    try {
      const lenderName = req.params.lenderName;
  
      // Find the lender by name
      const lender = await User.findOne({ name: lenderName });
  
      // If the lender is not found, return an error
      if (!lender) {
        return res.status(404).json({ error: 'Lender not found' });
      }
  
      // Find all cars lent by this lender
      const lentCars = await Car.find({ lenderName: lenderName });
  
      // Return the lent cars
      res.status(200).json(lentCars);
    } catch (error) {
      console.error('Error fetching lent cars:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Express route to delete a car by lender's name
app.delete('/delete-car-by-lender/:lenderName', async (req, res) => {
  try {
    const lenderName = req.params.lenderName;

    // Find the lender by name
    const lender = await User.findOne({ name: lenderName });

    // If the lender is not found, return an error
    if (!lender) {
      return res.status(404).json({ error: 'Lender not found' });
    }

    // Delete the cars associated with the lender's name
    await Car.deleteMany({ lenderName: lenderName });

    res.status(200).json({ message: 'Cars deleted successfully for the lender' });
  } catch (error) {
    console.error('Error deleting cars by lender name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  


  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
