const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // For environment variables

// Initialize Express App
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Initialize Firebase Admin SDK
const serviceAccount = require('./firebaseServiceAccount.json'); // Path to your Firebase private key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // Initialize Firestore
const PORT = process.env.PORT || 5000; // Port configuration

// JWT Secret Key (Store securely in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';


//REGISTRATION API
app.post('/register', async (req, res) => {
    const { email, password, username, role } = req.body;
  
    if (!email || !password || !username || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if user already exists
      const userSnapshot = await db.collection(role).where('email', '==', email).get();
      if (!userSnapshot.empty) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Store user in Firestore
      const newUser = { email, password: hashedPassword, username, timestamp: new Date() };
      await db.collection(role).add(newUser);
  
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed', error: error.message });
    }
  });
  

  //LOGIN API
  app.post('/login', async (req, res) => {
    const { email, password, role } = req.body;
  
    if (!email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if user exists
      const userSnapshot = await db.collection(role).where('email', '==', email).get();
      if (userSnapshot.empty) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const userData = userSnapshot.docs[0].data();
      
      // Compare passwords
      const isMatch = await bcrypt.compare(password, userData.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ email: userData.email, role }, JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Login successful!', token });
    } catch (error) {
      res.status(500).json({ message: 'Login failed', error: error.message });
    }
  });
  