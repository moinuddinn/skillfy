require('dotenv').config(); //Load environment variables
const PORT = process.env.PORT || 5000;
// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



// Initialize Express app
const app = express();
app.use(cors());

// Middleware to parse JSON bodies
//parse incoming JSON requests and make the data available in req.body
app.use(express.json());

// Connect to MongoDB using environment variables for configuration
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Userroute





// Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
