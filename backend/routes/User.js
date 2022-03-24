const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require('../models/Users.model');

// import input validations
// const validateLoginInput = require('../middleware/auth');
const {validateRegisterInput, validateLoginInput} = require('../middleware/auth');



// REGISTER ROUTE
router.route('/register').post((req, res) =>{

  const {error, isValid} = validateRegisterInput(req.body);

  if(!isValid){
    return res.status(400).json(error);
  }

  User.findOne({email:req.body.email})
      .then(user =>{
        if(user){
          return res.status(400).json({email:"Email already exists"});
        }else{
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          });

          // hashing the password
          const limit = 8;
          bcrypt.genSalt(limit, (err, salt) =>{
            bcrypt.hash(newUser.password, salt, (err, hash) =>{
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                     .then(user => res.json(user))
                     .catch(err => console.log(err))
            });
          });
        }
      });
});



// LOGIN ROUTE

router.route('/login').post()


module.exports = router;