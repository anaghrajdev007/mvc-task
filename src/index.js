const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { port } = require('./config/env');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(userRoutes);

// Database connection
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
