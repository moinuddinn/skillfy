const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/userModel');

//Creating new user handler
const createUser= async (req,res)=> {
     const {name,email,password}=req.body;

  try{
        // Extract user details from request body
        const newUser = new  User({  name, email,password
        })

        //new user create
        await newUser.save();
        res.status(201).json(newUser);
  }catch(error){
    res.status(500).json({ message: 'Server error' });
  }    
}

module.exports = {createUser};