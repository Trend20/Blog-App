const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require('../models/Users.model');


router.route('/register').post((req, res) =>{
  
})


module.exports = router;