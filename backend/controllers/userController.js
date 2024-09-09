const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Creating new user handler
const signup= async (req,res)=> {

  try{  
        // Extract user details from request body
        const {name,email,password}=req.body;
        //check if user exists
        const userExist = await  UserModel.findOne({email});
        if(userExist){
          return res.send('User already exist');
        }

        const newUser = new  UserModel({  name, email,password })
        newUser.password = await bcrypt.hash(password,10);
        //new user create
        await newUser.save();
        res.status(201).json(newUser);
  }catch(error){
    res.status(500).json({ message: error.message });
  }    
}

const login= async (req,res)=> {

  try{
        const {email,password}=req.body;
        //check if user exists
        const userExist = await  UserModel.findOne({email});
        if(!userExist){
          return res.send('Singup required');
        }
        res.status(201).json({email,password});
  }catch(error){
    res.status(500).json({ message: error.message });
  }    
}

module.exports = {signup,login};