const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');



// UPDATE ROUTE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findOneAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can only update your account details!");
  }
});


// DELETE ROUTE
router.delete('/:id', async (req, res) =>{
  
})
// GET ROUTE



module.exports = router;