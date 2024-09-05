require('dotenv').config(); //Load environment variables
require('./config/database').connect;

const PORT = process.env.PORT || 5000;
// Import required modules
const express = require('express');
const cors = require('cors');
const {signup,login} = require('./controllers/userController');



// Initialize Express app
const app = express();
app.use(cors());

// Middleware to parse JSON bodies
//parse incoming JSON requests and make the data available in req.body
app.use(express.json());


// Userroute
app.use('/api/user/signup',signup);
app.use('/api/user/login',login);




// Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
