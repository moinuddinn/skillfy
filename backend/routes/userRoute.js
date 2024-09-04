const express = require('express');
const {createUser} = require('../controllers/courseController');
const router = express.Router();


// Define routes for user registration and login
router.post('/create' , createUser);

module.exports = router;