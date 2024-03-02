const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const session = require('express-session'); // Import express-session
const User = require('./Model/User');
const Car = require('./Model/Car');
const Payment = require('./Model/Payment');
const Admin = require('./Model/Admin');


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
app.use(session({
  secret: 'your-secret-key', // Change this to a secure random string
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true if using HTTPS
}))

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
    req.session.user = {
      id: user._id,
      email: user.email,
      role: user.role
    };
    console.log(req.session);


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

    // Retrieve user data from session
    const userData = req.session.user;

    // Check if user data exists in session and matches the requested user ID
    if (!userData || userData.userId !== userId) {
      return res.status(401).json({ error: 'Unauthorized access' });
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
    // Retrieve user data from session
    const userData = req.session.user;

    // Check if user data exists in session and matches the requested user ID
    
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


// Endpoint to upload payment details
app.post('/upload-payment', async (req, res) => {
  try {
    // Extract the payment details from the request body
    const { name, email, carName, paymentAmount, paymentMethod } = req.body;

    // Save the payment details to the database
    const payment = new Payment({ name, email, carName, paymentAmount, paymentMethod });
    await payment.save();

    res.status(201).json({ message: 'Payment details uploaded successfully' });
  } catch (error) {
    console.error('Error uploading payment details:', error); // Log the error message
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/payment-details/:email', async (req, res) => {
  try {
    const userEmail = req.params.email;

    // Find payment details by email
    const payments = await Payment.find({ email: userEmail });

    // If no payments found, return an error
    if (!payments || payments.length === 0) {
      return res.status(404).json({ error: 'No payment details found for the provided email' });
    }

    // Return the payment details
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payment details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin Signup route
app.post('/admin-register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new admin
    const newAdmin = new Admin({ name, email, password });

    // Save the admin to the database
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registration successful' });
  } catch (error) {
    console.error('Error in admin registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin login route
app.post('/admin-login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Admin.findOne({ email });

    // If the admin is not found, or if the password is incorrect, return an error
    if (!admin || admin.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // At this point, the login is successful
    res.status(200).json({ message: 'Admin login successful', admin });
  } catch (error) {
    console.error('Error in admin login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to get total counts
app.get('/total-counts', async (req, res) => {
  try {
    // Fetch total count of users
    const totalUsers = await User.countDocuments();

    // Fetch total count of lenders
    const totalLenders = await User.countDocuments({ role: 'lender' });

    // Fetch total count of lends (assuming each car rented is a lend)
    const totalLends = await Car.countDocuments({ isRented: true });

    // Send the counts as a JSON response
    res.status(200).json({
      totalUsers,
      totalLenders,
      totalLends,
    });
  } catch (error) {
    console.error('Error fetching total counts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to fetch all users
app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Return the users as a JSON response
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to fetch all payments
app.get('/payment-details', async (req, res) => {
  try {
    // Fetch all payment details from the database
    const payments = await Payment.find();

    // Return the payments as a JSON response
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});