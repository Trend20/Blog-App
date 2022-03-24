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
app.use(express.json());

// using project routes
app.use('user', userRoutes);
app.use('articles', articlesRoutes);

require('dotenv').config();


// connect to the db
const url = process.env.DATABASE_URL;
mongoose.connect(url);
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application connected to the database successfully!!');
});

app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});