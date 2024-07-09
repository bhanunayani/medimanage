require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Import routes
const authRoutes = require('./routes/auth'); // Make sure the path matches the location of your routes file

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Use Routes
app.use('/api/auth', authRoutes); // This line tells the Express app to use your auth routes with '/api/auth' prefix

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.json()); // For parsing application/json

// Use auth routes
app.use('/api/auth', authRoutes);

// Other app configurations

app.listen(3000, () => {
  console.log('Server is running on port 8080');
});