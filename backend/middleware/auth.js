const Validator = require('express-validator');
const isEmpty = require('is-empty');

// LOGIN VALIDATION

module.exports = function ValidateLoginInput(data){

  let errors = {}

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';


    //Email checks
    if(Validator.isEmpty(data.email)){
      errors.email = "Email field is required";
  } else if(!Validator.isEmail(data.email)){
      errors.email = "Email is invalid";
  }

   //Password checks
   if(Validator.isEmpty(data.password)){
    errors.password = "Password field is required";
  }

    return{
      errors,
      isValid: isEmpty(errors)
    };
};


// REGISTER VALIDATION

module.exports = function validateRegisterInput(data){

  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //Name checks
  if(Validator.isEmpty(data.name)) {
      errors.name = "Name field is required";
  }

  //Email checks
  if(Validator.isEmpty(data.email)){
      errors.email = "Email field is required";
  }else if(!Validator.isEmail(data.email)){
      errors.email = "Email is invalid";
  }

  //Password checks
  if(Validator.isEmpty(data.password)){
      errors.password = "Password field is required";
  }

  if(Validator.isEmpty(data.password2)){
      errors.password2 = "Confirm Password field is required";
  }

  if(!Validator.isLength(data.password,{min:6,max:30})){
      errors.password = "Password must be at least 6 characters";
  }

  if(!Validator.equals(data.password,data.password2)){
      errors.password2 = "Passwords must match";
  }

  return{
      errors,
      isValid:isEmpty(errors)
  };

};


const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const keys = require('../config/keys');

const User = require('../models/User');

// import input validations
const {validateRegisterInput, validateLoginInput} = require('../middleware/auth');



// REGISTER ROUTE
router.route('/register').post((req, res) =>{

  const {errors, isValid} = validateRegisterInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
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

router.route('/login').post((req, res) =>{

  const {errors, isValid} = validateLoginInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({email})
      .then(user =>{
        if(!user){
          return res.status(400).json({ emailnotfound: "Email not found" })
        }

        // check passowrd
        bcrypt.compare(password, user.password)
              .then(isMatch =>{
                if(isMatch){
                  // Create JWT Payload
                  const payload ={
                    id:user.id,
                    name:user.name
                  };

                  // sign token
                  jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                      expiresIn: 31556926
                    },
                    (err, token) =>{
                      res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                    }
                  )
                } else {
                  return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
                }
              })

      })




})


module.exports = router;