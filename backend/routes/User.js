const express = require('express');
const {signup,login} = require('../controllers/userController');
const router = express.Router();


// Define routes for user registration and login
router.post("/signup", signup);
router.post("/login", login);


module.exports = router;