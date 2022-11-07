const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// import user model
const User = require('../models/User');
// REGISTER ROUTE
router.post('/register', async (req, res) =>{
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
      })
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
})

// LOGIN ROUTE
router.post('/login', async (req, res) =>{
  try {
    const user = await User.findOne({username: req.body.username})
   !user && res.status(400).json('Wrong credentials!')
    const validatedUser = await bcrypt.compare(req.body.password,  user.password);
    !validatedUser && res.status(400).json('Wrong Credentials!')
    const { password, ...others} = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;