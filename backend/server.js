const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 5500;

// middleware
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();

app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});