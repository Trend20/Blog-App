const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// routes
const userRoutes = require('./routes/User');
const articlesRoutes = require('./routes/User');

const app = express();

const PORT = process.env.PORT || 5500;

// middleware
app.use(cors());
app.use(bodyParser.json());

const url = process.env.DATABASE_URL;

// connect to the db
const connection = mongoose.connection;
mongoose.connect(url)
// using project routes
app.use('user', userRoutes);
app.use('articles', articlesRoutes);

require('dotenv').config();

app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});